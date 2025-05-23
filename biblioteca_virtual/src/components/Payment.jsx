import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <main className="container my-4">
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
                      <th className="text-center" style={{ width: "120px" }}>
                        Tipo
                      </th>
                      <th className="text-center" style={{ width: "100px" }}>
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody id="cart-items">
                    {/* Puedes reemplazar esto con datos dinámicos */}
                    <tr id="empty-cart">
                      <td colSpan="4" className="text-center py-5 text-muted">
                        <i className="fas fa-book-open fa-2x mb-3"></i>
                        <p className="mb-0">No tienes libros en tu carrito</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer bg-white border-top">
              <a href="/" className="btn btn-outline-primary">
                <i className="fas fa-arrow-left me-2"></i>Continuar buscando
              </a>
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
                <select className="form-select loan-type">
                  <option value="7">7 días (Estándar)</option>
                  <option value="14">14 días (Extendido)</option>
                  <option value="21">21 días (Premium)</option>
                </select>
              </div>

              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Libros seleccionados</span>
                  <span className="fw-bold" id="book-count">0</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0">
                  <span>Fecha de devolución</span>
                  <span className="fw-bold" id="return-date">-</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 text-danger">
                  <span>Multa por retraso</span>
                  <span className="fw-bold">$5.000/día</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-top px-0 pt-3">
                  <h5 className="mb-0">Total</h5>
                  <h5 className="mb-0 text-primary" id="cart-total">$0</h5>
                </li>
              </ul>

              <Link to="/Checkout" className="btn btn-primary w-100 py-2" id="checkout-btn">
                <i className="fas fa-lock me-2"></i>Proceder al pago
            </Link>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
