// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { login as loginService, registerUser as registerService } from "../service/AuthService";
import { data } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // 🔹 Cargar token guardado al iniciar la app
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) setToken(savedToken);
  }, []);

  // 🔹 Login
  const login = async (credentials) => {
    try {
      const response = await loginService(credentials);
      const receivedToken = response.data.token; // asegúrate de que tu backend devuelva esto
      setToken(receivedToken);
      localStorage.setItem("token", receivedToken);
      return { ok: true, data: response.data };
    } catch (error) {
      console.error("Error en login:", error);
      return { ok: false, error };
    }
  };

  // 🔹 Registro (opcional, si quieres guardar token al registrarse)
  const register = async (data) => {
    try {
      const response = await registerService(data);
      return { ok: true, data: response.data };
    } catch (error) {
      console.error("Error en registro:", error);
      return { ok: false, error};
    }
  };

  // 🔹 Logout
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


