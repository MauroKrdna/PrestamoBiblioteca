import React from "react";

const ShopingCardNavbar = ({ cartCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <i className="fas fa-book-open text-primary me-2"></i>Librería Virtual
        </a>
        <div className="d-flex align-items-center">
          <span className="badge bg-primary rounded-pill me-2">{cartCount}</span>
          <span className="text-muted">Paso 1 de 2</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;