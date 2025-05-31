import React from "react";

const ShopingCardFooter = () => {
  return (
    <footer className="bg-light border-top mt-5 py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 small text-muted">&copy; 2025 Librería Virtual. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-decoration-none small text-muted me-3">Términos y condiciones</a>
            <a href="#" className="text-decoration-none small text-muted">Política de privacidadd</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ShopingCardFooter;