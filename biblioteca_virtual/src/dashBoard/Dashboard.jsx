import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CardDashboard from "./CardDashboard"; // Importamos el componente

function Dashboardhome() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: "250px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f6fa",
          minHeight: "100vh",
        }}
      >
        <Header />

        <div style={{ padding: "80px 20px 20px 20px" }}>
          <h1 style={{ marginBottom: "20px", color: "#2C3E50" }}>
            Bienvenido al Dashboard
          </h1>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
            }}
          >
            <CardDashboard
              iconClass="fas fa-book"
              title="Total Libros"
              value="120"
              bgColor="#4e73df"
            />
            <CardDashboard
              iconClass="fas fa-hand-holding"
              title="Préstamos Activos"
              value="45"
              bgColor="#1cc88a"
            />
            <CardDashboard
              iconClass="fas fa-users"
              title="Usuarios"
              value="30"
              bgColor="#36b9cc"
            />
            <CardDashboard
              iconClass="fas fa-clock"
              title="Libros Retrasados"
              value="5"
              bgColor="#f6c23e"
            />
          </div>

          <div style={{ marginTop: "40px" }}>
            <h2 style={{ marginBottom: "10px", color: "#2C3E50" }}>
              Resumen General
            </h2>
            <p style={{ lineHeight: "1.6", color: "#555" }}>
              Aquí se pueden mostrar estadísticas generales, gráficos, o tablas
              de resumen. Por ejemplo: los libros más prestados, usuarios más
              activos, etc.
              <br />
              Cuando se integre el resto del sistema, estos datos se
              actualizarán automáticamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboardhome;




