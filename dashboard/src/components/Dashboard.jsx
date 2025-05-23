import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Panel de Control</h2>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card bg-primary text-white shadow">
            <div className="card-body">
              Libros registrados
              <div className="text-white-50 small">123</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-success text-white shadow">
            <div className="card-body">
              Préstamos activos
              <div className="text-white-50 small">45</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card bg-warning text-white shadow">
            <div className="card-body">
              Usuarios registrados
              <div className="text-white-50 small">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
