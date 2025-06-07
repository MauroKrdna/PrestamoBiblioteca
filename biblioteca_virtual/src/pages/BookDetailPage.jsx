import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../components/Public/Navbar";
import Footer from "../components/Public/Footer";
import { books } from "../assets/js/booksData"; // <--- Importa los datos locales
import { useCart } from "../assets/js/useCart";

export default function BookDetailPage() {


  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Acceso a la función de agregar


  const [bookData, setBookData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSubscribe, setShowSubscribe] = useState(false);

  useEffect(() => {
    const foundBook = books.find((b) => b.id.toString() === id);
    if (foundBook) {
      // Si no tiene varias imágenes, lo tratamos como una sola
      if (!foundBook.imagenes) {
        foundBook.imagenes = [foundBook.img];
      }
    }
    setBookData(foundBook);
  }, [id]);

  if (!bookData) return <p className="text-center my-5">No se encontró el libro.</p>;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % bookData.imagenes.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + bookData.imagenes.length) % bookData.imagenes.length);
  };

  const handleAddToCart = () => {
    addToCart(bookData);
    navigate("/Carrito"); // Redirige al carrito/pago
  };

  return (
    <>
      <Menu />

      <div className="container my-5">
        <div className="row g-4">
          {/* Imagen del libro */}
          <div className="col-md-6">
            <div className="position-relative">
              <img
                src={bookData.imagenes[currentImageIndex]}
                alt={bookData.title}
                className="img-fluid rounded shadow"
              />
              {bookData.imagenes.length > 1 && (
                <>
                  <button onClick={prevImage} className="btn btn-outline-secondary position-absolute top-50 start-0 translate-middle-y">
                    ‹
                  </button>
                  <button onClick={nextImage} className="btn btn-outline-secondary position-absolute top-50 end-0 translate-middle-y">
                    ›
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Detalles del libro + sinopsis */}
          <div className="col-md-6">
            <h2 className="text-primary">{bookData.title}</h2>
            <p className="text-muted">Autor: {bookData.author}</p>
            <p><strong>Género:</strong> {bookData.genre}</p>
            <p><strong>Editorial:</strong> {bookData.publisher}</p>
            <p className="mt-3">{bookData.descripcion || "Sin descripción disponible."}</p>

            {/* Sinopsis justo debajo */}
            <div className="mt-4">
              <h4>Sobre este libro</h4>
              <p>{bookData.sinopsis || "Sin sinopsis adicional disponible."}</p>
            </div>

            <div className="mt-4 d-flex gap-3">
            <button className="btn btn-success" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
              <button className="btn btn-outline-primary" onClick={() => setShowSubscribe(true)}>
                Suscribirse a novedades
              </button>
            </div>

            {showSubscribe && (
              <div className="mt-4">
                <h5>Suscríbete para recibir actualizaciones</h5>
                <form>
                  <input type="email" className="form-control mb-2" placeholder="Tu correo electrónico" required />
                  <button type="submit" className="btn btn-primary">Suscribirme</button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Detalles técnicos abajo */}
        <div className="row mt-5">
          <div className="col-md-6">
            <h4>Detalles</h4>
            <ul>
              <li><strong>Año:</strong> {bookData.anio || "N/A"}</li>
              <li><strong>ISBN:</strong> {bookData.isbn || "N/A"}</li>
              <li><strong>Páginas:</strong> {bookData.paginas || "N/A"}</li>
              <li><strong>Editorial:</strong> {bookData.publisher || "N/A"}</li>
            </ul>
          </div>
        </div>
      </div>


      <Footer />
    </>
  );
}
