import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Demo users (replace with backend later)
  const demoUsers = [
    { email: "admin@gmail.com", password: "admin@123", name: "Admin", role: "admin" },
    { email: "staff@gmail.com", password: "123456", name: "test", role: "staff" },
  ];

  const login = (email, password) => {
    const foundUser = demoUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (foundUser) {
      const { password, ...userData } = foundUser; // remove password
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/dashboard");
      return true; // login success
    } else {
      return false; // login failed
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
