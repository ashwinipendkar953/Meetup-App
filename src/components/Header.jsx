import { Link } from "react-router-dom";
import meetupLogo from "../assets/meetup.svg";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <header className="">
      <nav className="navbar navbar-expand-lg fixed-top border-bottom">
        <div className="container-fluid mx-3 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <img
              src={meetupLogo}
              alt="Meetup Logo"
              className="img-fluid"
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
            <div className="mx-lg-5 my-1">
              <form className="d-flex " role="search">
                <div className="input-group ">
                  <input
                    className="form-control text-secondary"
                    type="search"
                    placeholder="Search events"
                    aria-label="Search"
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Neighborhood, city or zip"
                    aria-label="Neighborhood, city or zip"
                    aria-describedby="location"
                  />
                  <button
                    className="btn border-peach btn-peach"
                    type="button"
                    id="location"
                    style={{ width: "50px" }}
                  >
                    <BiSearch size={"1.5em"} />
                  </button>
                </div>
              </form>
            </div>
            <div className="ms-auto">
              <Link
                to="/"
                type="button"
                className="text-decoration-none text-black fw-semibold mx-3"
              >
                Log in
              </Link>
              <Link
                to="/"
                type="button"
                className="text-decoration-none btn-blue"
              >
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
