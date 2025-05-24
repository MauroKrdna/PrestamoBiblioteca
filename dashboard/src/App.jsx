import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Sidebar />
      <div style={{ marginLeft: "250px" }}>
        <Header />
        <main style={{ marginTop: "60px", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/crear" element={<h1>Crear Producto</h1>} />
            <Route path="/listado" element={<h1>Listado de Productos</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

