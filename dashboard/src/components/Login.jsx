// src/components/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ onLogin }) {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar usuario y contraseña
    if (form.username === 'admin' && form.password === '1234') {
      alert('¡Bienvenido administrador!');
      localStorage.setItem('isAdmin', 'true'); // Guarda el estado de sesión
      onLogin(true); // Cambia el estado en App.jsx
      navigate('/dashboard'); // Redirecciona al Dashboard
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f5f5f5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '700px',
          height: '350px',
          backgroundColor: '#fff',
          border: '8px solid #4a90e2',
          borderRadius: '15px',
          overflow: 'hidden',
          boxShadow: '0 0 20px rgba(0,0,0,0.1)'
        }}
      >
        <div
          style={{
            flex: 1,
            backgroundImage: "url('https://cdn-icons-png.flaticon.com/512/29/29302.png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            filter: 'brightness(0.85)',
          }}
        />

        <form
          onSubmit={handleSubmit}
          style={{
            flex: 1,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '20px',
            color: '#333',
            textAlign: 'right'
          }}
        >
          <h2
            style={{
              textAlign: 'center',
              marginBottom: '30px',
              color: '#4a90e2'
            }}
          >
            Inicio de sesión
          </h2>

          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={form.username}
            onChange={handleChange}
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              border: '1.5px solid #ccc',
              fontSize: '18px',
              outline: 'none',
              textAlign: 'right'
            }}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              border: '1.5px solid #ccc',
              fontSize: '18px',
              outline: 'none',
              textAlign: 'right'
            }}
            required
          />

          <button
            type="submit"
            style={{
              padding: '15px',
              borderRadius: '25px',
              backgroundColor: '#4a90e2',
              border: 'none',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#357ABD'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#4a90e2'}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
