import { Link } from "react-router-dom";

function Card() {
  return (
    <div>
      <div className="col-3">
        <div className="card-block">
          <section className="books">
            <Link to="./Description.html" style={{ color: "#042c46" }}>
              <img
                src=" https://images-na.ssl-images-amazon.com/images/I/81TXkn53+KL._AC_UL232_SR232,232_.jpg"
                alt="book1"
              />
              <h2>The Green Mile</h2>
              <p>Novel by Stephen King</p>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Card;
