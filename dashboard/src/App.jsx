import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CrearLibro from './components/CrearLibro';
import VerLibros from './components/VerLibros';


function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está logueado
    const adminLoggedIn = localStorage.getItem('isAdmin');
    setIsAdmin(adminLoggedIn === 'true');
  }, []);

  const handleLogin = (status) => {
    setIsAdmin(status);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    setIsAdmin(false);
  };

  return (
    <Router>
      <Routes>
        {/* Ruta principal: Login */}
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        {/* Dashboard solo si es admin */}
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />

        {/* Crear libro solo si es admin */}
        <Route
          path="/crear"
          element={isAdmin ? <CrearLibro /> : <Navigate to="/" />}
        />

        {/* Ver libros solo si es admin */}
        <Route
          path="/listado"
          element={isAdmin ? <VerLibros /> : <Navigate to="/" />}
        />

        {/* Ruta comodín para no encontrados */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;



