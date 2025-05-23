import React from "react";

const ShopingCardOrderSummary = ({ bookCount }) => {
  return (
    <div className="card shadow-sm sticky-top" style={{ top: "20px" }}>
      <div className="card-header bg-white border-bottom">
        <h2 className="h5 mb-0">
          <i className="fas fa-receipt text-primary me-2"></i> Resumen del préstamo
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
          <li className="list-group-item d-flex justify-content-between">
            <span>Libros seleccionados</span>
            <span className="fw-bold">{bookCount}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between">
            <span>Fecha de devolución</span>
            <span className="fw-bold">-</span>
          </li>
          <li className="list-group-item d-flex justify-content-between text-danger">
            <span>Multa por retraso</span>
            <span className="fw-bold">$5.000/día</span>
          </li>
        </ul>

        <button type="button" className="btn btn-primary w-100 py-2">
          <i className="fas fa-lock me-2"></i>Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;