// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#f8f9fa", // color suave de fondo
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: "250px", // deja espacio para el sidebar
        right: 0,
        zIndex: 1001,
      }}
    >
      <input
        type="text"
        placeholder="Buscar..."
        style={{
          width: "300px",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
      />
      <div
        style={{
          color: "#34495e", // color del texto para que se vea mejor
          fontWeight: "500",
        }}
      >
        Usuario: Mauro
      </div>
    </header>
  );
}
