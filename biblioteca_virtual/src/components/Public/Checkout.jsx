import React, { useState, useEffect } from 'react';

export default function Checkout() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    const storedSummary = localStorage.getItem('loanSummary');
    if (storedSummary) {
      setSummary(JSON.parse(storedSummary));
    }
  }, []);

  return (
    <main className="container pt-5 my-4">
      <h2 className="page-title text-center mb-5 py-3 bg-primary text-white rounded">
        Finalizar Préstamo
      </h2>

      {!summary ? (
        <div className="alert alert-info text-center">
          No hay resumen de pedido disponible. Por favor vuelve a la página de selección.
        </div>
      ) : (
        <div className="row g-4">
          {/* Formulario de entrega */}
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-header bg-white border-bottom">
                <h3 className="h5 mb-0">
                  <i className="fas fa-user-circle text-primary me-2"></i>
                  Datos del Usuario
                </h3>
              </div>
              <div className="card-body">
                <form id="checkout-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">Nombres*</label>
                      <input type="text" className="form-control" required placeholder="Ingresa tus nombres" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Apellidos*</label>
                      <input type="text" className="form-control" required placeholder="Ingresa tus apellidos" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Correo electrónico*</label>
                      <input type="email" className="form-control" required placeholder="tucorreo@ejemplo.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Teléfono*</label>
                      <input type="tel" className="form-control" required placeholder="Ingresa tu teléfono" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Dirección de entrega*</label>
                      <input type="text" className="form-control" required placeholder="Calle, número, barrio" />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Detalles adicionales (opcional)</label>
                      <input type="text" className="form-control" placeholder="Apartamento, oficina, etc." />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Notas adicionales (opcional)</label>
                      <textarea className="form-control" rows="3" placeholder="Indicaciones especiales para la entrega"></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Resumen del pedido */}
          <div className="col-lg-4">
            <div className="card shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-header bg-white border-bottom">
                <h3 className="h5 mb-0">
                  <i className="fas fa-receipt text-primary me-2"></i>
                  Resumen del Préstamo
                </h3>
              </div>
              <div className="card-body">
                <div className="order-summary mb-4">
                  <div className="border-bottom pb-3 mb-3">
                    <h5 className="fw-bold mb-3">Libros seleccionados</h5>
                    <div id="checkout-items">
                      {summary.cartItems.length === 0 ? (
                        <div className="text-center text-muted py-3">No hay libros seleccionados</div>
                      ) : (
                        summary.cartItems.map((book) => (
                          <div key={book.id} className="d-flex justify-content-between">
                            <span>{book.title} x {book.quantity}</span>
                            <span>
                              ${(
                                parseFloat(book.price.replace(/[^0-9.-]+/g, "")) * book.quantity
                              ).toLocaleString('es-CL')}
                            </span>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Subtotal:</span>
                    <span className="fw-bold">${summary.total.toLocaleString('es-CL')}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Domicilio:</span>
                    <span className="fw-bold">
                      {summary.shippingCost === 0 ? "Gratis" : `$${summary.shippingCost.toLocaleString('es-CL')}`}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span>Descuento:</span>
                    <span className="fw-bold text-danger">-$0</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mb-4">
                    <h5 className="mb-0">Total:</h5>
                    <h5 className="mb-0 text-primary">${summary.grandTotal.toLocaleString('es-CL')}</h5>
                  </div>
                </div>

                <div className="payment-methods mb-4">
                  <h5 className="fw-bold mb-3">Método de pago</h5>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="cod" value="cod" defaultChecked />
                    <label className="form-check-label" htmlFor="cod">
                      Contraentrega <small className="text-muted">(+5%)</small>
                    </label>
                  </div>
                  <div className="form-check mb-2">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="pse" value="pse" />
                    <label className="form-check-label" htmlFor="pse">
                      PSE <small className="text-muted">(+3%)</small>
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="transfer" value="transfer" />
                    <label className="form-check-label" htmlFor="transfer">
                      Transferencia bancaria
                    </label>
                  </div>
                </div>

                <button type="submit" form="checkout-form" className="btn btn-primary w-100 py-2" id="complete-order">
                  <i className="fas fa-check-circle me-2"></i>Confirmar Préstamo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
