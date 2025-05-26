import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function CrearLibro() {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    anio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Libro creado: ' + JSON.stringify(form));
    setForm({ titulo: '', autor: '', anio: '' });
  };

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
          <h1 style={{ marginBottom: '20px' }}>Crear Libro</h1>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '400px',
            }}
          >
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
                border: '1px solid #ccc',
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
                border: '1px solid #ccc',
              }}
            />
            <input
              type="number"
              name="anio"
              placeholder="Año"
              value={form.anio}
              onChange={handleChange}
              required
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
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
                cursor: 'pointer',
              }}
            >
              Guardar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

