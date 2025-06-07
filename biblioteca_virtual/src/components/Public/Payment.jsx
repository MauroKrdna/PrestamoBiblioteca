import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useCart } from '../../assets/js/useCart';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
  const { cartItems, removeFromCart, updateQuantity, parsePrice } = useCart();
  const [loanDays, setLoanDays] = useState(7);
  const [destination, setDestination] = useState("Medellín");

  const navigate = useNavigate();

  // Función para calcular el envío
  const calculateShipping = (destination) => {
    switch (destination) {
      case "Bello":
        return 10000;
      case "Copacabana":
      case "Caldas":
      case "La Estrella":
        return 20000;
      case "Envigado":
      case "Itagui":
      case "Sabaneta":
        return 15000;
      default:
        return 0; // Medellín u otros
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.quantity,
    0
  );

  const shippingCost = calculateShipping(destination);
  const grandTotal = total + shippingCost;

  const totalBooks = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const calculateReturnDate = () => {
    const returnDate = new Date();
    returnDate.setDate(returnDate.getDate() + loanDays);
    return returnDate.toLocaleDateString('es-CL', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const handleProceedToCheckout = () => {
    const summary = {
      cartItems,
      total,
      shippingCost,
      grandTotal,
      loanDays,
      destination,
    };
    localStorage.setItem('loanSummary', JSON.stringify(summary));
    navigate('/Checkout');
  };

  return (
    <main className="container pt-5 my-4">
      <div className="row g-4">
        {/* Lista de productos */}
        <div className="col-lg-8">
          <div className="card shadow-sm">
            <div className="card-header bg-white border-bottom">
              <h2 className="h5 mb-0">
                <i className="fas fa-shopping-cart text-primary me-2"></i>
                Tus libros seleccionados
              </h2>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "60px" }}></th>
                      <th>Libro</th>
                      <th className="text-center">Género</th>
                      <th className="text-center">Cantidad</th>
                      <th className="text-end">Subtotal</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center py-5 text-muted">
                          <i className="fas fa-book-open fa-2x mb-3"></i>
                          <p className="mb-0">No tienes libros en tu carrito</p>
                        </td>
                      </tr>
                    ) : (
                      cartItems.map((book) => {
                        const unitPrice = parsePrice(book.price);
                        const subtotal = unitPrice * book.quantity;

                        return (
                          <tr key={book.id}>
                            <td>
                              <img
                                src={book.img}
                                alt={book.title}
                                style={{ width: "50px", height: "auto" }}
                              />
                            </td>
                            <td>
                              <div className="fw-bold">{book.title}</div>
                              <div className="text-muted">{book.author}</div>
                              <div className="text-muted small">Precio: ${unitPrice.toLocaleString('es-CL')}</div>
                            </td>
                            <td className="text-center">{book.genre}</td>
                            <td className="text-center">
                              <div className="d-flex justify-content-center align-items-center gap-2">
                                <button
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={() => updateQuantity(book.id, -1)}
                                >
                                  −
                                </button>
                                <span>{book.quantity}</span>
                                <button
                                  className="btn btn-sm btn-outline-secondary"
                                  onClick={() => updateQuantity(book.id, 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="text-end">${subtotal.toLocaleString('es-CL')}</td>
                            <td className="text-center">
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => removeFromCart(book.id)}
                              >
                                <i className="fas fa-trash-alt"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-white border-top">
              <Link to="/" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>Continuar buscando
              </Link>
            </div>
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
            <div className="card-header bg-white border-bottom">
              <h2 className="h5 mb-0">
                <i className="fas fa-receipt text-primary me-2"></i>
                Resumen del préstamo
              </h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label">Tipo de préstamo</label>
                <select
                  className="form-select"
                  value={loanDays}
                  onChange={(e) => setLoanDays(Number(e.target.value))}
                >
                  <option value="7">7 días (Estándar)</option>
                  <option value="14">14 días (Extendido)</option>
                  <option value="21">21 días (Premium)</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Ciudad de entrega</label>
                <select
                  className="form-select"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                >
                  <option value="Medellín">Medellín</option>
                  <option value="Bello">Bello</option>
                  <option value="Envigado">Envigado</option>
                  <option value="Itagui">Itagüí</option>
                  <option value="Sabaneta">Sabaneta</option>
                  <option value="La Estrella">La Estrella</option>
                  <option value="Caldas">Caldas</option>
                  <option value="Copacabana">Copacabana</option>
                </select>
              </div>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Libros seleccionados</span>
                  <span className="fw-bold">{totalBooks}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Fecha de devolución</span>
                  <span className="fw-bold">{calculateReturnDate()}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 text-danger">
                  <span>Multa por retraso</span>
                  <span className="fw-bold">$5.000/día</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Costo de envío</span>
                  <span className="fw-bold text-muted">
                    {shippingCost === 0 ? "Gratis" : `$${shippingCost.toLocaleString('es-CL')}`}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-top px-0 pt-3">
                  <h5 className="mb-0">Total</h5>
                  <h5 className="mb-0 text-primary">
                    ${grandTotal.toLocaleString('es-CL')}
                  </h5>
                </li>
              </ul>

              <button onClick={handleProceedToCheckout} className="btn btn-primary w-100 py-2">
                <i className="fas fa-lock me-2"></i>Proceder al pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
