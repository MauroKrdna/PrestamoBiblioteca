import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Inventario</div>
      </Link>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
      <div className="sidebar-heading">Módulos</div>

      <li className="nav-item">
        <Link className="nav-link" to="/crear">
          <i className="fas fa-fw fa-plus"></i>
          <span>Crear Producto</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/listado">
          <i className="fas fa-fw fa-list"></i>
          <span>Ver Productos</span>
        </Link>
      </li>

    </ul>
  );
}

export default Sidebar;
