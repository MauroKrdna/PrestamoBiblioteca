import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("Datos enviados:", JSON.stringify({ email, password })); // Asegurar que los datos son correctos

  try {
    const res = await fetch("http://localhost/api/login.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    console.log("✅ Respuesta de la API:", JSON.stringify(data)); // Verifica si el JSON está bien

    if (!res.ok || data.status === "error") {
      throw new Error(data.message || "Error en la API");
    }

    alert(`Bienvenido, ${data.name}`);

    login({ name: data.name, email: data.email, role: data.role });

    setTimeout(() => {
      navigate("/home"); // Redirige solo después de que el usuario se ha guardado correctamente
    }, 500);

  } catch (error) {
    console.error("❌ Error en login:", error);
    alert("Error al iniciar sesión: " + error.message);
  }
};

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png" 
            alt="login icon" 
            style={{ width: "60px" }} 
            className="mb-2"
          />
          <h3 className="fw-bold">Iniciar Sesión</h3>
          <p className="text-muted">Accede a tu biblioteca</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="ejemplo@correo.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              placeholder="Ingrese su contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            ¿No tienes una cuenta?
            <a href="/register" className="ms-1">Regístrate aquí</a>
          </small>
        </div>
      </div>
    </div>
  );
}