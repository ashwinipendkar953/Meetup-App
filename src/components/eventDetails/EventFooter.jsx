import { Link } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";
import { getDateAndTime } from "../../utils/dateTimeFormatter";

const EventFooter = ({ event }) => {
  const {
    eventStartDateTime,
    eventTitle,
    isEventFree,
    eventCost,
    isEventshareable,
  } = event;
  return (
    <div className="container py-3">
      <div className=" d-lg-flex justify-content-between align-items-center">
        <div>
          <p className="mb-0">{getDateAndTime(eventStartDateTime)}</p>
          <p className="fw-bold mb-0">{eventTitle}</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          {isEventFree ? (
            <p className="fw-bold mb-0">Free</p>
          ) : (
            <div className="d-flex mx-2">
              <BiRupee className="icon-large" />
              <p className="mb-0">{eventCost}</p>
            </div>
          )}
          {
            <Link
              type="button"
              className="btn border-blue blue-text fw-semibold mx-4 py-3 px-5"
            >
              Share <MdIosShare className="icon-large ms-2" />
            </Link>
          }
          <Link type="button" className="btn btn-peach py-3 px-5">
            Attend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventFooter;
