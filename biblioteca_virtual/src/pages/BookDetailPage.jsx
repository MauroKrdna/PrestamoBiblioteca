import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Menu from "../components/Public/Navbar";
import Footer from "../components/Public/Footer";
import { books } from "../assets/js/booksData"; // <--- Importa los datos locales

export default function BookDetailPage() {
  const { id } = useParams();
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

          {/* Detalles del libro */}
          <div className="col-md-6">
            <h2 className="text-primary">{bookData.title}</h2>
            <p><strong>Autor: </strong>{bookData.author}</p>
            <p><strong>Género:</strong> {bookData.genre}</p>
            <p><strong>Editorial:</strong> {bookData.publisher}</p>
            <p><strong>Descripción: </strong>{bookData.descripcion || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>

            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-success">Agregar al carrito</button>
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

        <hr className="my-5" />

        {/* Información adicional */}
        <div className="row">
          <div className="col-md-6">
            <h4>Sobre este libro</h4>
            <p>{bookData.sinopsis || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
          </div>
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
