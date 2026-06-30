"use client";

import { userService } from "@/services/userService";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  user: null,
  isInitialized: false,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const getUser = async () => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;
    if (!token) {
      setUser(null);
      setIsInitialized(true);
      return;
    }

    try {
      const userData = await userService.getMe();
      setUser(userData);
    } catch (error) {
      console.error("유저 정보 로드 실패", error);
      localStorage.removeItem("accessToken");
      setUser(null);
    } finally {
      setIsInitialized(true);
    }
  };

  function login(token) {
    localStorage.setItem("accessToken", token);
    getUser();
  }

  function logout() {
    localStorage.removeItem("accessToken");
    setUser(null);
  }

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 0);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isInitialized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
