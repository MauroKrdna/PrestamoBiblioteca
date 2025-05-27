import React from "react";

export default function CardDashboard({ iconClass, title, value, bgColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginBottom: "20px",
      }}
    >
      <i className={iconClass} style={{ fontSize: "24px" }} />
      <div>
        <div style={{ fontSize: "14px", opacity: 0.9 }}>{title}</div>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>{value}</div>
      </div>
    </div>
  );
}

