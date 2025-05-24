import React from "react";

const benefits = [
  { icon: "fas fa-tag", title: "Descuentos", desc: "Ofertas especiales" },
  { icon: "fas fa-shipping-fast", title: "Renovaciones", desc: "Extiende tu préstamo fácil" },
  { icon: "fas fa-headset", title: "Soporte", desc: "Asistencia 24/7" },
  { icon: "fas fa-comments", title: "Consultas", desc: "Asesoramiento personalizado" },
];

export default function BenefitsSection() {
  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <h2 className="section-title">¿Por qué elegirnos?</h2>
        <div className="row">
          {benefits.map((b, i) => (
            <div className="col-md-3 py-3 py-md-0" key={i}>
              <div className="benefit-card">
                <i className={b.icon}></i>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}