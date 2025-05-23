import React from 'react';

function Dashboard() {
  return (
    <div>
      <h2 className="mb-4">Panel de Control</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 rounded-lg bg-primary text-white p-4 text-center">
            <div style={{ fontSize: '3rem' }}>
              <i className="fas fa-book"></i>
            </div>
            <h5 className="mt-3">Libros registrados</h5>
            <p className="display-4 mb-0">123</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 rounded-lg bg-success text-white p-4 text-center">
            <div style={{ fontSize: '3rem' }}>
              <i className="fas fa-book-reader"></i>
            </div>
            <h5 className="mt-3">Préstamos activos</h5>
            <p className="display-4 mb-0">45</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 rounded-lg bg-warning text-white p-4 text-center">
            <div style={{ fontSize: '3rem' }}>
              <i className="fas fa-users"></i>
            </div>
            <h5 className="mt-3">Usuarios registrados</h5>
            <p className="display-4 mb-0">12</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
