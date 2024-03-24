import { Link } from "react-router-dom";

function Card({ book }) {
  return (
    <div>
      <div className="col-3">
        <div className="card-block">
          <section className="books">
            <Link to="/Description" style={{ color: "#042c46" }}>
              <img src={book.image} alt="book1" />
              <h2>{book.title}</h2>
              <p>{book.author}</p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Card;
