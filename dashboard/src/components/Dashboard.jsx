
import React from 'react';
import CardDashboard from './CardDashboard';
import PrestamosTable from './PrestamosTable';

function Dashboard() {
  return (
    <div>
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

      <PrestamosTable />
    </div>
  );
}

export default Dashboard;
