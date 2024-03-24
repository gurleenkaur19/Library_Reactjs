export default function Header() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div>
              <img
                src="https://png.pngtree.com/png-clipart/20200710/original/pngtree-books-logo-png-image_4135972.jpg"
                alt="Library Logo"
                width="100px"
                height="100px"
              />
              <h1 className="navbar-brand">Bookshelf</h1>
              {/* <a className="navbar-brand" href="#" style="color: #02416b">
              </a> */}
            </div>
            <div className="p-2 bd-highlight" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item nav-link">
                  <button className="btn btn-outline-success nav-link">
                    Sign Up
                  </button>
                </li>
                <li className="nav-item nav-link">
                  <button className="btn btn-outline-success nav-link">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
