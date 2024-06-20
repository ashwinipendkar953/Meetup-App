import { Link } from "react-router-dom";
import meetupLogo from "../assets/meetup.svg";

const Header = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg sticky-top border-bottom">
        <div className="container-fluid mx-4 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src={meetupLogo}
              alt="Meetup Logo"
              className="img-fluid px-2"
              style={{ width: "95px", height: "34px" }}
            />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle Navigation"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="d-lg-flex ms-auto align-items-center">
              <form className="d-flex py-1" role="search">
                <input
                  className="form-control me-2 text-secondary height-40"
                  type="search"
                  placeholder="Search by event title and tags"
                  aria-label="Search"
                />
              </form>

              <Link
                to="/"
                type="button"
                className="text-decoration-none text-black fw-semibold me-3"
              >
                Log in
              </Link>
              <Link to="/" type="button" className="btn-blue">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
