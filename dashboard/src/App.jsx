// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login      from './components/Login';
import Dashboard  from './components/Dashboard';
import CrearLibro from './components/CrearLibro';
import VerLibros  from './components/VerLibros';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está logueado al iniciar
    const adminLoggedIn = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminLoggedIn);
  }, []);

  const handleLogin = (status) => {
    // status === true cuando Login.jsx llama onLogin(true)
    setIsAdmin(status);
    if (status) {
      localStorage.setItem('isAdmin', 'true');
    }
  };

  const handleLogout = () => {
    // Borra sesión y regresa al login
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta principal: Login */}
        <Route
          path="/"
          element={isAdmin 
            ? <Navigate to="/dashboard" /> 
            : <Login onLogin={handleLogin} />}
        />

        {/* Dashboard (privado) */}
        <Route
          path="/dashboard"
          element={isAdmin 
            ? <Dashboard onLogout={handleLogout} /> 
            : <Navigate to="/" />}
        />

        {/* Crear Libro (privado) */}
        <Route
          path="/crear"
          element={isAdmin 
            ? <CrearLibro /> 
            : <Navigate to="/" />}
        />

        {/* Ver Libros (privado) */}
        <Route
          path="/listado"
          element={isAdmin 
            ? <VerLibros /> 
            : <Navigate to="/" />}
        />

        {/* Cualquier otra ruta → redirige al login */}
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;



