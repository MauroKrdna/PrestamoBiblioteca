import { Link } from "react-router-dom";
import { books } from "../../assets/js/booksData";
  

export default function Books() {
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
                        <Link to ={`/books/${book.id}`} className="btn-book">
                        <i className="fas fa-book-open"></i> Solicitar
                        </Link>
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
