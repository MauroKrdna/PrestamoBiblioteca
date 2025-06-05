import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user === null) {
    return <p>Cargando...</p>; // ⚡ Evita redirecciones mientras el usuario se carga
  }

  return user ? children : <Navigate to="/login" />;
}