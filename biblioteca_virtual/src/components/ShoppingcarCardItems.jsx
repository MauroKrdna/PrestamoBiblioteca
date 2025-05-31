import React from "react";

const ShopingCardCartItems = ({ items }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-header bg-white border-bottom">
        <h2 className="h5 mb-0">
          <i className="fas fa-shopping-cart text-primary me-2"></i> Tus libros seleccionados
        </h2>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th style={{ width: "60px" }}></th>
                <th>Libro</th>
                <th className="text-center" style={{ width: "120px" }}>Tipo</th>
                <th className="text-center" style={{ width: "100px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.icon}</td>
                    <td>{item.name}</td>
                    <td className="text-center">{item.type}</td>
                    <td className="text-center">
                      <button className="btn btn-danger btn-sm">Eliminar</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-5 text-muted">
                    <i className="fas fa-book-open fa-2x mb-3"></i>
                    <p className="mb-0">No tienes libros en tu carrito</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShopingCardCartItems;