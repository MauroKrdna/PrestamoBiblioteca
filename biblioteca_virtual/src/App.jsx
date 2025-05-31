import { Routes, Route } from "react-router-dom"; 
import { AuthProvider } from "./context/AuthContext";  // 🔥 Importa AuthProvider
import ProtectedRoute from "./components/Public/ProtectedRoute";  // 🔒 Importa la ruta protegida

import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import BookDetailPage from "./pages/BookDetailPage";
import PrestamoPage from "./pages/PrestamoPage";
import Login from "./components/Public/Login"; // 📲 Importa el Login
import Dashboard from "./pages/Dashboard"; // 🔑 Agrega el Dashboard privado
import Register from "./components/Public/Register";

function App() {
  return (
    <AuthProvider> {/* 🔥 Envuelve todo con AuthProvider */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Books" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/Carrito" element={<CartPage />} />
        <Route path="/Login" element={<Login />} />  {/* 📲 Ruta pública para Login */}
        <Route path="/Register" element={<Register/>}/>

        {/* 🔒 Rutas protegidas */}
        <Route path="/Checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
        <Route path="/Prestamos" element={<ProtectedRoute><PrestamoPage /></ProtectedRoute>} />
        <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
