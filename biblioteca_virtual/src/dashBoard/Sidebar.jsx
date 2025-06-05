import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
    window.location.reload();
  };

  return (
    <div
      style={{
        backgroundColor: "#2C3E50",
        color: "white",
        height: "100vh",
        width: "250px",
        padding: "20px",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        zIndex: 1000,
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Inventario</h2>
      <nav>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>
            <Link
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#34495E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/crear"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#34495E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Crear Libro
            </Link>
          </li>
          <li>
            <Link
              to="/listado"
              style={{
                color: "white",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "4px",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#34495E")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              Listado de Libros
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "8px 12px",
                borderRadius: "4px",
                textAlign: "left",
                fontSize: "1rem",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#34495E")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
