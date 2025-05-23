import React from "react";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="hero-content">
              <h1>Explora nuestro <span>universo</span> de libros</h1>
              <p>Descubre títulos increíbles para todas las edades y gustos.</p>
              <button className="btn-hero">Explorar Catálogo</button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="hero-img">
              <img src="/src/assets/images/books-main.png" alt="Libros destacados" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}