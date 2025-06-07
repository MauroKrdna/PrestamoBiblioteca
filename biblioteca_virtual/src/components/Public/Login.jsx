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
    await login({ email, password });

    if (localStorage.getItem("user")) {
      navigate("/HomePage"); // Redirige solo si el usuario se guardó correctamente
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
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
      </div>
    </div>
  );
}