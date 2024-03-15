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
              <h2 className="navbar-brand">Bookshelf</h2>
              {/* <a className="navbar-brand" href="#" style="color: #02416b">
              </a> */}
            </div>
            <div className="p-2 bd-highlight" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <a
                    className="nav-link"
                    href="./Signup.html"
                    style="color: #26648e"
                  >
                  </a> */}
                  <button className="btn btn-outline-success">Sign Up</button>
                </li>
                <li className="nav-item">
                  {/* <a
                    className="nav-link"
                    href="./login.html"
                    style="color: #26648e"
                  >
                  </a> */}
                  <button className="btn btn-outline-success">Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
