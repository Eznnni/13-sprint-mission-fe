"use client";

import { useContext } from "react";

const AuthContext = createContext({
  register: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const register = async({ email, nickname, password, passwordConfirmation });

  return (
    <AuthContext.Provider value={register}>{children}</AuthContext.Provider>
  );
}
