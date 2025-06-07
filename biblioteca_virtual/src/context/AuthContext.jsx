import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("✅ Respuesta de la API:", data);

      if (!res.ok || data.status === "error") {
        alert("Correo o contraseña incorrectos.");
        return;
      }

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data)); // ⚡ Persistir sesión

    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error de conexión con el servidor.");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}