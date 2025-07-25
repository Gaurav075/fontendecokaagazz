import { createContext, useEffect, useState, ReactNode } from "react";

export const AuthContext = createContext<{
  user: any;
  setUser: (user: any) => void;
}>({
  user: null,
  setUser: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

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
        }

        // If not authorized or token is invalid/missing
        if (!res || res.status === 401) {
          const refreshRes = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/auth/refresh-token`,
            {
              method: "POST",
              credentials: "include", // ✅ Send cookies
            }
          );

          if (!refreshRes.ok) {
            localStorage.removeItem("token");
            setUser(null);
            return;
          }

          const refreshData = await refreshRes.json();
          localStorage.setItem("token", refreshData.accessToken);
          token = refreshData.accessToken;

          // Retry /me with new token
          res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }

        if (res && res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (err) {
        console.error("Fetch /me or refresh-token failed:", err);
        localStorage.removeItem("token");
        setUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
