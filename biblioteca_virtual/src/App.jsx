import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Public/ProtectedRoute";

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BookDetailPage from "./pages/BookDetailPage";
import PrestamoPage from "./pages/PrestamoPage";
import Login from "./components/Public/Login";
import Register from "./components/Public/Register";
import Dashboard from "./pages/Dashboard";



function App() {
  const [isAdmin, setIsAdmin] = React.useState(localStorage.getItem("isAdmin") === "true");

  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true");
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin");
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/HomePage" element={<HomePage />} />


        {/* Rutas protegidas */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/prestamos"
          element={
            <ProtectedRoute>
              <PrestamoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={isAdmin ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />}
        />
        <Route
          path="/crear"
          element={isAdmin ? <CrearLibro /> : <Navigate to="/" />}
        />
        <Route
          path="/listado"
          element={isAdmin ? <VerLibros /> : <Navigate to="/" />}
        />

        {/* Ruta por defecto */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;