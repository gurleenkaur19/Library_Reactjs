function Description() {
  return (
    <section>
      <div
        className="desc-backdrop-img"
        style={{
          backgroundImage:
            "url('https://images4.alphacoders.com/132/1326368.png')",
        }}
      >
        <div
          className="d-flex"
          style={{
            WebkitBackdropFilter: "brightness(0.4)",
            color: "white",
          }}
        >
          <div className="col-3">
            <section className="books">
              <img
                src=" https://images-na.ssl-images-amazon.com/images/I/81TXkn53+KL._AC_UL232_SR232,232_.jpg"
                alt="book1"
              />
              <h2>The Green Mile</h2>
              <p>Novel by Stephen King</p>
            </section>
            <button
              className="btn btn-outline-success"
              style={{ marginBottom: "10px" }}
            >
              Not In Library
            </button>
          </div>
          <div className="col">
            <h1>The Green Mile</h1>
            <p>Novel by Stephen King</p>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <p>4.1 average based on 254 reviews.</p>
            <hr style={{ border: "2px solid #f1f1f1" }} />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              eos accusamus ducimus labore culpa, ex asperiores laborum
              repudiandae soluta quos debitis, maxime architecto est reiciendis
              praesentium possimus aspernatur, ad obcaecati? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dignissimos distinctio
              dolore qui, consequuntur aliquam ipsam veritatis earum consequatur
              in quidem quos autem, adipisci, deleniti eaque assumenda nisi
              aspernatur alias vitae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quas accusantium recusandae quisquam at nobis
              vitae dicta optio architecto amet! Sapiente adipisci soluta fuga
              ullam tempora numquam voluptatem corporis fugiat asperiores?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
