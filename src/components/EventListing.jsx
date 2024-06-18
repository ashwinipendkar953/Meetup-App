import { CgCalendarDates } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi2";
import { Link } from "react-router-dom";

const EventListing = () => {
  return (
    <section className="py-2">
      <div className="row d-flex justify-content-between">
        <div className="col-md-6">
          <h2 className="display-6 fw-bold">Meetup Events</h2>
        </div>
        <div className="col-md-6">
          <form className="d-flex " role="search">
            <input
              className="form-control me-2 text-secondary height-40"
              type="search"
              placeholder="Search events"
              aria-label="Search"
            />
            <select className="form-select height-40">
              <option value="">Select Event Type</option>
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </form>
        </div>
      </div>

      <div className="row g-4 p-4">
        <div className="col-lg-4 col-sm-6">
          <Link to="/events/1" className="text-decoration-none">
            <div className="card border-0 h-100">
              <img
                src="https://secure.meetupstatic.com/photos/event/8/b/6/2/event_519875682.webp?"
                alt="Women Who Go Meetup #2"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Women Who Go Meetup #2</h5>
                <p className="text-secondary">Hosted by: Women Who Go Pune</p>
                <p>
                  <CgCalendarDates className="icon-large text-secondary" /> SAT,
                  JUN 22 · 11:00 AM IST
                </p>
                <p>
                  <span>
                    <FaRegCheckCircle className="icon-large text-secondary" />{" "}
                    10 going
                  </span>
                  <span className="mx-4">
                    <HiOutlineTicket className="icon-large text-secondary" />{" "}
                    Free
                  </span>
                </p>
                <p>
                  <GrLocation className="icon-large text-secondary" />{" "}
                  InfraCloud Technologies Pvt. Ltd.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-lg-4 col-sm-6">
          <Link to="/events/1" className="text-decoration-none">
            <div className="card border-0 h-100">
              <img
                src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F755002169%2F132353824516%2F1%2Foriginal.20240429-155832?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C70%2C2240%2C1120&s=cd3b29ca5da2800e9d9f08cf0e9d01ab"
                alt="Women Who Go Meetup #2"
                className="card-img-top h-50"
              />
              <div className="card-body">
                <h5 className="card-title">Women Who Go Meetup #2</h5>
                <p className="text-secondary">Hosted by: Women Who Go Pune</p>
                <p>
                  <CgCalendarDates className="icon-large text-secondary" /> SAT,
                  JUN 22 · 11:00 AM IST
                </p>
                <p>
                  <span>
                    <FaRegCheckCircle className="icon-large text-secondary" />{" "}
                    10 going
                  </span>
                  <span className="mx-4">
                    <HiOutlineTicket className="icon-large text-secondary" />{" "}
                    Free
                  </span>
                </p>
                <p>
                  <GrLocation className="icon-large text-secondary" />{" "}
                  InfraCloud Technologies Pvt. Ltd.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventListing;
