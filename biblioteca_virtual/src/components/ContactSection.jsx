import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contact-container">
          <div className="contact-form">
            <h3>Envíanos un mensaje</h3>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Asunto" />
              </div>
              <div className="form-group">
                <textarea placeholder="Tu mensaje..." rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Enviar Mensaje</button>
            </form>
          </div>
          
          <div className="contact-info">
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
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
