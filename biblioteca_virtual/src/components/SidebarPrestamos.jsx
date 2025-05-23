import React from "react";

export default function SidebarPrestamos() {
  return (
    <div>
      <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
      <aside class="app-sidebar">
        <div class="app-sidebar__user">
          <img
            class="app-sidebar__user-avatar"
            src="../Assets/img/user.png"
            alt="Usuario"
          />
          <div>
            <p class="app-sidebar__user-name">Admin</p>
            <p class="app-sidebar__user-designation">Administrador</p>
          </div>
        </div>
        <ul class="app-menu">
          <li>
            <a class="app-menu__item" href="home.html">
              <i class="app-menu__icon fa fa-dashboard"></i>
              <span class="app-menu__label">Dashboard</span>
            </a>
          </li>
          <li>
            <a class="app-menu__item" href="usuarios.html">
              <i class="app-menu__icon fa fa-users"></i>
              <span class="app-menu__label">Usuarios</span>
            </a>
          </li>
          <li>
            <a class="app-menu__item" href="libros.html">
              <i class="app-menu__icon fa fa-book"></i>
              <span class="app-menu__label">Libros</span>
            </a>
          </li>
          <li>
            <a class="app-menu__item active" href="prestamos.html">
              <i class="app-menu__icon fa fa-hourglass-start"></i>
              <span class="app-menu__label">Préstamos</span>
            </a>
          </li>
          <li>
            <a class="app-menu__item" href="configuracion.html">
              <i class="app-menu__icon fa fa-cogs"></i>
              <span class="app-menu__label">Configuración</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
