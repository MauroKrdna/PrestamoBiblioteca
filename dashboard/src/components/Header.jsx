import React from "react";

export default function Header({ onSearch }) {
  const handleChange = (e) => onSearch?.(e.target.value);

  return (
    <header
      style={{
        height: "60px",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: "250px",
        right: 0,
        zIndex: 1001,
      }}
    >
      {onSearch && (
        <input
          type="text"
          placeholder="Buscar..."
          onChange={handleChange}
          style={{
            width: "300px",
            padding: "8px 12px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          }}
        />
      )}
      <div style={{ color: "#34495e", fontWeight: "500" }}>
        Usuario: Oscar Holguin
      </div>
    </header>
  );
}
