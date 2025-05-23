import React from "react";

export default function ContentPrincipalPrestamo() {
  return (
    <div>
      <main className="app-content" />
      <div className="app-title d-flex justify-content-between align-items-center mb-3">
        <h1>
          <i className="fa fa-hourglass-start"></i> Préstamos
        </h1>
        <button
          className="btn btn-primary"
          type="button"
          data-toggle="modal"
          data-target="#modalPrestar"
        >
          <i className="fa fa-plus"></i> Nuevo Préstamo
        </button>
      </div>

      <div className="tile">
        <div className="tile-body">
          <div className="table-responsive">
            <table
              className="table table-bordered table-hover table-striped"
              id="tblPrestar"
            >
              <thead className="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Libro</th>
                  <th>Estudiante</th>
                  <th>Fecha Préstamo</th>
                  <th>Fecha Devolución</th>
                  <th>Cant</th>
                  <th>Observación</th>
                  <th>Estado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Cien Años de Soledad</td>
                  <td>Juan Pérez</td>
                  <td>2025-05-10</td>
                  <td>2025-05-20</td>
                  <td>1</td>
                  <td>Sin observaciones</td>
                  <td>Activo</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    <button className="btn btn-danger btn-sm">Eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Don Quijote de la Mancha</td>
                  <td>María García</td>
                  <td>2025-05-12</td>
                  <td>2025-05-22</td>
                  <td>2</td>
                  <td>Entregar con cuidado</td>
                  <td>Activo</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    <button className="btn btn-danger btn-sm">Eliminar</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>La Sombra del Viento</td>
                  <td>Carlos Sánchez</td>
                  <td>2025-05-14</td>
                  <td>2025-05-24</td>
                  <td>1</td>
                  <td>Libro antiguo</td>
                  <td>Devuelto</td>
                  <td>
                    <button className="btn btn-primary btn-sm">Editar</button>
                    <button className="btn btn-danger btn-sm">Eliminar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
