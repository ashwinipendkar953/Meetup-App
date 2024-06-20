import { FiClock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import EventSpeakers from "./EventSpeakers";

const EventQuickInfo = () => {
  return (
    <div className="col-lg-4 offset-lg-1">
      <div className="card border-0 rounded-top-4">
        <div className="card-body p-4 ">
          <div className="d-flex align-items-start mb-3">
            <FiClock className="icon-large text-secondary" />
            <div className="ml-3 ps-3">
              <p className="mb-0">Saturday, June 29, 2024</p>
              <p className="mb-0">10:00 AM to 1:00 PM IST</p>
              <Link className="text-decoration-none text-success">
                Add to calendar
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-start mb-3">
            <GrLocation className="icon-large text-secondary" />
            <div className="ml-3 ps-3">
              <p className="mb-0">WORKDEN - Old Airport Road</p>
              <p className="mb-0">HAL Old Airport Rd · Bengaluru, Ka</p>
            </div>
          </div>
          <div className="d-flex text-secondary">
            <BiRupee className="icon-large " />
            <p>3000</p>
          </div>
        </div>
      </div>
      <hr />
      {/* speakers */}
      <EventSpeakers />
    </div>
  );
};

export default EventQuickInfo;
