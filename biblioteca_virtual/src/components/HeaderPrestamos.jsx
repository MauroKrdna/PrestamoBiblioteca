import React from "react";

export default function HeaderPrestamos() {
  return (
    <header class="app-header">
      <a className="app-header__logo" href="#">
        Mi Proyecto
      </a>
      <ul className="app-nav list-unstyled mb-0 d-flex align-items-center">
        <li>
          <a href="index.html" class="text-white">
            Salir
          </a>
        </li>
      </ul>
    </header>
  );
}
