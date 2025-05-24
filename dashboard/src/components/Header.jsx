import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light shadow-sm px-4">
      <div className="container-fluid">
        <h4 className="mb-0">Dashboard Privado</h4>
        <div>
          {/* Aquí puedes poner usuario, botón logout, etc. */}
          <button className="btn btn-outline-danger btn-sm">Cerrar sesión</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
