// src/context/AuthContext.tsx
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
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/me`, {
          credentials: "include",
        });
        if (res.ok) {
          const data = await res.json();
          setUser(data.user); // make sure your /me route sends { user }
        }
      } catch (err) {
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
