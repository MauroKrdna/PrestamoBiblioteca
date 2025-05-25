import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminLogged = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminLogged);
  }, []);

  const handleLogin = (status) => {
    setIsAdmin(status);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAdmin ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;

