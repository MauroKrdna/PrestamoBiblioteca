import React from "react";

const books = [
    {
      title: "1984",
      author: "George Orwell",
      img: "https://images-na.ssl-images-amazon.com/images/I/51N-u8AsmdL._SX329_BO1,204,203,200_.jpg",
      price: "$11.99",
      genre: "Ficción",
      publisher: "Secker & Warburg"
    },
    {
      title: "Crónica de una muerte anunciada",
      author: "Gabriel García Márquez",
      img: "https://www.libreriacasatomada.com/imagenes/9788466/978846635089.GIF",
      price: "$9.50",
      genre: "Novela",
      publisher: "Editorial Sudamericana"
    },
    {
      title: "Los juegos del hambre",
      author: "Suzanne Collins",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0s2-lkDLtQTyBCsZ54a5ZCT75R3B-20xyw&s",
      price: "$13.99",
      genre: "Acción",
      publisher: "Scholastic Press"
    },
    {
      title: "El nombre del viento",
      author: "Patrick Rothfuss",
      img: "https://images.cdn3.buscalibre.com/fit-in/360x360/aa/cc/aacc1e2d359a74f3efb144b8ab8f790f.jpg",
      price: "$14.95",
      genre: "Fantasía",
      publisher: "DAW Books"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      img: "https://images.cdn3.buscalibre.com/fit-in/360x360/b9/8e/b98e2b9a2dfc1b37de9df646c1fbc5d6.jpg",
      price: "$10.99",
      genre: "Ciencia Ficción",
      publisher: "Ballantine Books"
    },
    {
      title: "Rayuela",
      author: "Julio Cortázar",
      img: "https://m.media-amazon.com/images/I/71cy4zKZuFL._AC_UF1000,1000_QL80_.jpg",
      price: "$12.50",
      genre: "Aventura",
      publisher: "Editorial Sudamericana"
    },
    {
      title: "Cien años de soledad",
      author: "Gabriel García Márquez",
      img: "https://www.libreriadelau.com/cdn/shop/products/9789588886581_2048x.jpg?v=1640648020",
      price: "$15.00",
      genre: "Realismo mágico",
      publisher: "Editorial Sudamericana"
    },
    {
      title: "La sombra del viento",
      author: "Carlos Ruiz Zafón",
      img: "https://pictures.abebooks.com/inventory/30992614554.jpg",
      price: "$13.75",
      genre: "Misterio",
      publisher: "Planeta"
    },
  ];
  

export default function BookSection() {
  return (
    <section className="featured-books" id="books">
        <div className="container">
            <h2 className="section-title">Todos los Libros</h2>
            <div className="row g-4">
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
                    <p className="genre"><strong>Género:</strong> {book.genre}</p>
                    <p className="publisher"><strong>Editorial:</strong> {book.publisher}</p>
                    <p className="price"><strong>Precio:</strong> {book.price}</p>
                    <div className="book-footer">
                        <a href="#" className="btn-book">
                        <i className="fas fa-book-open"></i> Solicitar
                        </a>
                        <span className="availability">Disponible</span>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
    </section>

  );
}
