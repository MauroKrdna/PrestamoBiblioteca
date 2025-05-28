import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function CrearLibro() {
  const navigate = useNavigate();
  const { state } = useLocation(); // para edición
  const [form, setForm] = useState({
    id: '',
    titulo: '',
    autor: '',
    anio: '',
  });

  // Si viene un libro para editar, precargarlo
  useEffect(() => {
    if (state?.libro) {
      setForm(state.libro);
    }
  }, [state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Leer libros existentes
    const existentes = JSON.parse(localStorage.getItem('books') || '[]');

    // Validar unicidad del ID en modo creación
    if (!state?.libro && existentes.some(lib => lib.id === form.id)) {
      return alert('Ya existe un libro con ese ID');
    }

    if (state?.libro) {
      // Actualizar
      const updated = existentes.map(lib =>
        lib.id === state.libro.id ? { ...form } : lib
      );
      localStorage.setItem('books', JSON.stringify(updated));
    } else {
      // Crear
      existentes.push({ ...form });
      localStorage.setItem('books', JSON.stringify(existentes));
    }

    navigate('/listado');
  };

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
          <h1 style={{ marginBottom: '20px' }}>
            {state?.libro ? 'Editar Libro' : 'Crear Libro'}
          </h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '400px'
            }}
          >
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={form.id}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <input
              type="text"
              name="titulo"
              placeholder="Título"
              value={form.titulo}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <input
              type="text"
              name="autor"
              placeholder="Autor"
              value={form.autor}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <input
              type="number"
              name="anio"
              placeholder="Año"
              value={form.anio}
              onChange={handleChange}
              required
              min="1500"
              max={new Date().getFullYear()}
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
            <button
              type="submit"
              style={{
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: '#4a90e2',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              {state?.libro ? 'Guardar Cambios' : 'Crear'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

