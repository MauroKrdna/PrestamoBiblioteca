import React from "react";
import { Link } from "react-router-dom"; // Importa Link para navegación interna

const books = [
  {
    title: "1984",
    author: "George Orwell",
    img: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",
  },
  {
    title: "Crónica de una muerte anunciada",
    author: "Gabriel García Márquez",
    img: "https://www.libreriacasatomada.com/imagenes/9788466/978846635089.GIF",
  },
  {
    title: "Los juegos del hambre",
    author: "Suzanne Collins",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0s2-lkDLtQTyBCsZ54a5ZCT75R3B-20xyw&s",
  },
  {
    title: "El nombre del viento",
    author: "Patrick Rothfuss",
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/aa/cc/aacc1e2d359a74f3efb144b8ab8f790f.jpg",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="featured-books" id="featured">
      <div className="container">
        <h2 className="section-title">Libros Destacados</h2>
        <div className="row">
          {books.map((book, i) => (
            <div className="col-md-3" key={i}>
              <div className="book-card">
                <div className="book-img">
                  <img src={book.img} alt={book.title} />
                  <div className="book-badge">Nuevo</div>
                </div>
                <div className="book-body">
                  <h3>{book.title}</h3>
                  <p className="author">{book.author}</p>
                  <div className="book-footer">
                    <a href="#" className="btn-book">
                      <i className="fas fa-book-open"></i> Solicitar
                    </a>
                    <span className="price">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón Ver Más */}
        <div className="text-center mt-4">
          <Link to="/Books" className="btn-book btn-ver-mas">
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}
