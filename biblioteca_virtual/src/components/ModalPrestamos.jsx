import React, { useState } from "react";

export default function ModalPrestamos() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado");
    setShowModal(false); // Cierra el modal después del envío
  };

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Abrir Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Prestar Libro</h5>
                <button type="button" className="close text-white" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="frmPrestar" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="libro">Libro</label>
                    <select id="libro" className="form-control" name="libro" required></select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="estudiante">Estudiante</label>
                    <select id="estudiante" className="form-control" name="estudiante" required></select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="cantidad">Cantidad</label>
                    <input id="cantidad" className="form-control" type="number" name="cantidad" min="1" required />
                    <small id="msg_error" className="form-text text-danger"></small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fecha_prestamo">Fecha de Préstamo</label>
                    <input id="fecha_prestamo" className="form-control" type="date" name="fecha_prestamo" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="fecha_devolucion">Fecha de Devolución</label>
                    <input id="fecha_devolucion" className="form-control" type="date" name="fecha_devolucion" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="observacion">Observación</label>
                    <textarea id="observacion" className="form-control" name="observacion" rows="3"></textarea>
                  </div>

                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary mr-2" type="submit">
                      Prestar
                    </button>
                    <button className="btn btn-secondary" type="button" onClick={() => setShowModal(false)}>
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}