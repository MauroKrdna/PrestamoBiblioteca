import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function VerLibros() {
  const libros = [
    { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967 },
    { id: 2, titulo: 'Don Quijote', autor: 'Miguel de Cervantes', anio: 1605 },
    { id: 3, titulo: 'La Odisea', autor: 'Homero', anio: -700 },
  ];

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: '250px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header />

        <div style={{ padding: '20px', marginTop: '60px' }}>
          <h1 style={{ marginBottom: '20px' }}>Listado de Libros</h1>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '20px', // Agrandamos tamaño de la tabla
            }}
          >
            <thead>
              <tr style={{ backgroundColor: '#4a90e2', color: 'white' }}>
                <th style={{ padding: '14px', border: '1px solid #ddd' }}>ID</th>
                <th style={{ padding: '14px', border: '1px solid #ddd' }}>Título</th>
                <th style={{ padding: '14px', border: '1px solid #ddd' }}>Autor</th>
                <th style={{ padding: '14px', border: '1px solid #ddd' }}>Año</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro) => (
                <tr key={libro.id} style={{ backgroundColor: '#f9f9f9' }}>
                  <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.id}</td>
                  <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.titulo}</td>
                  <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.autor}</td>
                  <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.anio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
