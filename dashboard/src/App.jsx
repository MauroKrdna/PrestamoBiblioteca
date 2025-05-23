import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          <Routes>
            <Route path="/" element={<h1>Dashboard</h1>} />
            <Route path="/crear" element={<h1>Crear Producto</h1>} />
            <Route path="/listado" element={<h1>Listado de Productos</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
