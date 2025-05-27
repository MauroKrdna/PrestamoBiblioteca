import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaTimes } from 'react-icons/fa';
import Sidebar from './Sidebar';
import Header from './Header';

export default function VerLibros() {
  const navigate = useNavigate();
  const [libros, setLibros] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    const almacen = JSON.parse(localStorage.getItem('books') || '[]');
    setLibros(almacen);
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm('¿Eliminar este libro?')) return;
    const filtrados = libros.filter(lib => lib.id !== id);
    localStorage.setItem('books', JSON.stringify(filtrados));
    setLibros(filtrados);
  };

  const handleEdit = (libro) => {
    navigate('/crear', { state: { libro } });
  };

  // Filtrar libros según la búsqueda
  const librosFiltrados = libros.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div
        style={{
          flex: 1,
          marginLeft: '250px',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Header />

        <div style={{ padding: '20px', marginTop: '60px' }}>
          <h1 style={{ marginBottom: '20px' }}>Listado de Libros</h1>

          {/* Buscador */}
          <input
            type="text"
            placeholder="Buscar por título..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            style={{
              padding: '10px',
              marginBottom: '20px',
              width: '100%',
              maxWidth: '300px',
              border: '1px solid #ccc',
              borderRadius: '5px'
            }}
          />

          {librosFiltrados.length === 0 ? (
            <p>
              No hay libros. <button onClick={() => navigate('/crear')}>Crear uno</button>
            </p>
          ) : (
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '20px'
              }}
            >
              <thead>
                <tr style={{ backgroundColor: '#4a90e2', color: 'white' }}>
                  <th style={{ padding: '14px', border: '1px solid #ddd' }}>ID</th>
                  <th style={{ padding: '14px', border: '1px solid #ddd' }}>Título</th>
                  <th style={{ padding: '14px', border: '1px solid #ddd' }}>Autor</th>
                  <th style={{ padding: '14px', border: '1px solid #ddd' }}>Año</th>
                  <th style={{ padding: '14px', border: '1px solid #ddd' }}>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {librosFiltrados.map(libro => (
                  <tr key={libro.id} style={{ backgroundColor: '#f9f9f9' }}>
                    <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.id}</td>
                    <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.titulo}</td>
                    <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.autor}</td>
                    <td style={{ padding: '14px', border: '1px solid #ddd' }}>{libro.anio}</td>
                    <td
                      style={{
                        padding: '14px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        gap: '10px'
                      }}
                    >
                      <button
                        onClick={() => handleEdit(libro)}
                        style={{
                          backgroundColor: 'gold',
                          color: 'black',
                          border: 'none',
                          borderRadius: '5px',
                          padding: '8px 12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <FaEdit /> Editar
                      </button>
                      <button
                        onClick={() => handleDelete(libro.id)}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          padding: '8px 12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px'
                        }}
                      >
                        <FaTimes /> Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}


