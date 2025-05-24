import React from 'react';

function PrestamosTable() {
  const prestamos = [
    { id: 1, libro: "React.js Básico", usuario: "Juan Pérez", fecha: "2025-05-20" },
    { id: 2, libro: "Java Avanzado", usuario: "Ana Gómez", fecha: "2025-05-19" },
    { id: 3, libro: "Python para Todos", usuario: "Luis Díaz", fecha: "2025-05-18" },
  ];

  return (
    <div className="mt-4">
      <h5>Últimos Préstamos</h5>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Libro</th>
            <th>Usuario</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {prestamos.map(({ id, libro, usuario, fecha }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{libro}</td>
              <td>{usuario}</td>
              <td>{fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PrestamosTable;
