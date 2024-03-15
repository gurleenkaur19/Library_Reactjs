function Banner() {
  return (
    <div>
      <section>
        <div className="banner">
          <div
            className="mx-auto p-5"
            style={{ height: "500px", width: "500px" }}
          >
            <h1 className="font-weight-bold">Our Online Library</h1>

            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-inline-flex p-2 bd-highlight" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for the keyword"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
            <h6 className="font-weight-bold">
              Discover academic journals,articles and books on the seamless
              platform
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
