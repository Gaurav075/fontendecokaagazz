import { createContext, useEffect, useState, ReactNode } from "react";

export const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
  loading: boolean;
}>({
  user: null,
  setUser: () => {},
  loading: true,
});


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      let token = localStorage.getItem("token");

      try {
        let res: Response | null = null;

        if (token) {
          res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          console.log("⚠️ No token in localStorage");
        }

        if (!res || res.status === 401) {
          console.log("🔁 Trying to refresh token via /refresh-token");
          const refreshRes = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/refresh-token`,
            {
              method: "POST",
              credentials: "include",
            }
          );

          if (!refreshRes.ok) {
            console.log("❌ Refresh token invalid");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
            setLoading(false);
            return;
          }

          const refreshData = await refreshRes.json();

          localStorage.setItem("token", refreshData.accessToken);
          token = refreshData.accessToken;

          res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        if (res && res.ok) {
          const data = await res.json();
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          console.log("⚠️ /me failed even after refresh");
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        }
      } catch (err) {
        console.error("❌ Error during auth check:", err);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      }
      setLoading(false);
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser ,loading}}>
      {children}
    </AuthContext.Provider>
  );
};
