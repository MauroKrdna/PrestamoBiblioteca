import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-col contact-info">
          <h3>Información de contacto</h3>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>Calle Libros 123, Ciudad Literaria</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+123 456 7890</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contacto@libreriavirtual.com</p>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <p>Lunes a Viernes: 9am - 6pm</p>
          </div>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-col quick-links">
          <h3>Enlaces rápidos</h3>
          <ul>
            <li><a href="/books">Libros</a></li>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
          </ul>
        </div>

        <div className="footer-col subscribe">
          <h3>Suscríbete</h3>
          <p>Recibe noticias y ofertas exclusivas.</p>
          <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              aria-label="Correo electrónico"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Librería Virtual. Todos los derechos reservados.
      </div>
    </footer>
  );
}
