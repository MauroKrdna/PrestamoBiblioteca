import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Verificación de datos antes de enviar
    console.log("Datos enviados:", formData);

    try {
      const res = await fetch("http://localhost/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error de conexión");

      const data = await res.json();

      if (data.status === "success") {
        alert("Registro exitoso. Inicia sesión.");
        navigate("/login");
      } else {
        alert(data.message || "Error al registrarse");
      }
    } catch (error) {
      alert("Error de conexión con el servidor");
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4 rounded-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center mb-4">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/747/747376.png" 
            alt="registro icon" 
            style={{ width: "60px" }} 
            className="mb-2"
          />
          <h3 className="fw-bold">Crear Cuenta</h3>
          <p className="text-muted">Únete a nuestra biblioteca</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" placeholder="Ingrese su nombre" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" placeholder="ejemplo@correo.com" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="Ingrese su contraseña" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Celular</label>
            <input type="tel" className="form-control" placeholder="Ingrese su número de celular" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <button type="submit" className="btn btn-success w-100">Registrarse</button>
        </form>
        <div className="text-center mt-3">
          <small className="text-muted">
            ¿Ya tienes una cuenta?
            <a href="/login" className="ms-1">Inicia sesión</a>
          </small>
        </div>
      </div>
    </div>
  );
}