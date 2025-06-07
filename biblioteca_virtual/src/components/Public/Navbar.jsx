import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../assets/js/useCart";

export default function Navbar() {
  const { user, logout } = useAuth();

  const { cartItems } = useCart();

  return (
    <div className="w3-bar w3-black w3-large w3-padding d-flex justify-content-between align-items-center">
      {/* Links a la izquierda */}
      <div>
        <Link to="/" className="w3-bar-item w3-button w3-mobile me-5">
          <i className="fa fa-bed w3-margin-right"></i>Home
        </Link>
        <Link to="/Books" className="w3-bar-item w3-button w3-mobile me-5">Books</Link>
        <Link to="/About" className="w3-bar-item w3-button w3-mobile me-5">About</Link>
        <Link to="/Contact" className="w3-bar-item w3-button w3-mobile">Contact</Link>
      </div>

      {/* Bloque derecho */}
      <div className="d-flex align-items-center ms-5">
        {user ? (
          <>
            <span className="text-white me-4">
              <i className="fa-regular fa-user me-1"></i> {user.name}
            </span>
            <button
              onClick={logout}
              className="btn btn-link text-white text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Cerrar sesión
            </button>
          </>
        ) : (
          <>
            <Link to="/Login" className="text-white me-5">
              <i className="fa-regular fa-user me-1"></i>Ingresar
            </Link>
            <Link to="/Register" className="text-white me-5">
              <i className="fa-regular fa-user me-1"></i>Registrar
            </Link>
          </>
        )}

        {/* Enlace del carrito */}
          <Link to="/Carrito" className="carrito ms-3 text-white">
            <i className="fa-solid fa-book-bookmark"></i>
            <span className="contar-pro">{cartItems.length}</span>
          </Link>
      </div>
    </div>
  );
}
