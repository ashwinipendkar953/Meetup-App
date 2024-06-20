import { FiClock } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import EventSpeakers from "./EventSpeakers";
import { getDateAndTime } from "../../utils/dateTimeFormatter";

const EventQuickInfo = ({ event }) => {
  const {
    eventStartDateTime,
    eventEndDateTime,
    eventAddress,
    eventCost,
    speakers,
  } = event;
  return (
    <div className="col-lg-4 offset-lg-1">
      <div className="card border-0 rounded-top-4">
        <div className="card-body p-4 ">
          <div className="d-flex align-items-start mb-3">
            <FiClock className="icon-large text-secondary" />
            <div className="ml-3 ps-3">
              <p className="mb-0">{getDateAndTime(eventStartDateTime)} to</p>
              <p className="mb-0">{getDateAndTime(eventEndDateTime)}</p>
              <Link
                className="text-decoration-none text-success"
                target="_blank"
                to="https://calendar.google.com/"
              >
                Add to calendar
              </Link>
            </div>
          </div>
          <div className="d-flex align-items-start mb-3">
            <GrLocation className="icon-large text-secondary" />
            <div className="ml-3 ps-3">
              <p className="mb-0">{eventAddress}</p>
            </div>
          </div>
          <div className="d-flex text-secondary">
            <BiRupee className="icon-large " />
            <p className="mb-0">3000</p>
          </div>
        </div>
      </div>
      <hr />
      {/* speakers */}
      <EventSpeakers speakers={speakers} />
    </div>
  );
};

export default EventQuickInfo;
