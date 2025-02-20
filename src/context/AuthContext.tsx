"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

interface User {
  username: string;
  password: string;
}

interface AuthContextType {
  user: string | null;
  register: (username: string, password: string) => boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const register = (username: string, password: string): boolean => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some((user) => user.username === username)) {
      return false;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };

  const login = (username: string, password: string): boolean => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!userExists) {
      return false;
    }

    setUser(username);
    localStorage.setItem("loggedInUser", username);
    router.push("/analytics/sales-by-products");
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("loggedInUser");
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
