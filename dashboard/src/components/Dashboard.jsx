import React from 'react';
import Sidebar from './Sidebar';
import CardDashboard from './CardDashboard';
import PrestamosTable from './PrestamosTable';
import Header from './Header'; // Importamos el Header

function Dashboard() {
  const prestamos = [
    { id: 1, userId: "U001", fechaPrestamo: "2025-05-20", fechaDevolucion: "2025-05-27" },
    { id: 2, userId: "U002", fechaPrestamo: "2025-05-22", fechaDevolucion: "2025-05-29" },
    { id: 3, userId: "U003", fechaPrestamo: "2025-05-23", fechaDevolucion: "2025-05-30" },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ flex: 1, marginLeft: '250px', display: 'flex', flexDirection: 'column' }}>
        <Header /> {/* El Header en la parte superior */}

        <div style={{ padding: '20px' }}>
          <h1 style={{ marginBottom: '20px' }}>Bienvenido al Dashboard</h1>

          <div className="row">
            <div className="col-md-4">
              <CardDashboard
                iconClass="fas fa-book"
                title="Libros"
                value="120"
                bgColor="#4e73df"
              />
            </div>
            <div className="col-md-4">
              <CardDashboard
                iconClass="fas fa-hand-holding"
                title="Préstamos Activos"
                value="45"
                bgColor="#1cc88a"
              />
            </div>
            <div className="col-md-4">
              <CardDashboard
                iconClass="fas fa-users"
                title="Usuarios"
                value="30"
                bgColor="#36b9cc"
              />
            </div>
          </div>

          <div style={{ marginTop: '40px' }}>
            <PrestamosTable prestamos={prestamos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;



