import React from 'react';

function PrestamosTable() {
  return (
    <div className="mt-4">
      <h2>Listado de Préstamos</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Fecha Préstamo</th>
            <th>Fecha Devolución</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Juan Pérez</td>
            <td>2025-05-21</td>
            <td>2025-06-01</td>
            <td>
              <button className="btn btn-sm btn-warning me-2">Editar</button>
              <button className="btn btn-sm btn-danger">Eliminar</button>
            </td>
          </tr>
          {/* Puedes duplicar las filas con datos de ejemplo */}
        </tbody>
      </table>
    </div>
  );
}

export default PrestamosTable;
