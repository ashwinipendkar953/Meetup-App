import { CgCalendarDates } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { HiOutlineTicket } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BiRupee } from "react-icons/bi";
import { getDateAndTime } from "../utils/dateTimeFormatter";
import { useState } from "react";

const EventCardDisplay = () => {
  const { data, loading } = useFetch(
    "https://meetup-api-psi.vercel.app/api/events"
  );

  const [selectedEventType, setSelectedEventType] = useState("");

  const filteredEventData =
    selectedEventType === ""
      ? data
      : data.filter((event) => event.eventType === selectedEventType);

  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center align-items-center">
          <div
            className="spinner-border text-primary me-2 spinner-border-sm"
            aria-hidden="true"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></div>
          <p className="mb-0" role="status">
            Loading events...
          </p>
        </div>
      )}

      {data && (
        <section className="py-2">
          <div className=" d-md-flex justify-content-between">
            <h2 className="display-6 fw-bold">Meetup Events</h2>

            <form className="d-flex w-25" role="search">
              <select
                className="form-select height-40"
                onChange={(event) => setSelectedEventType(event.target.value)}
              >
                <option value="">Select Event Type</option>
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </select>
            </form>
          </div>

          <div className="row g-4 p-4">
            {filteredEventData?.map((event) => {
              const {
                eventTitle,
                eventImageUrl,
                eventStartDateTime,
                eventAttendeeCount,
                isEventFree,
                eventType,
                eventCost,
                eventAddress,
                hostedBy,
              } = event;
              return (
                <div className="col-lg-4 col-sm-6" key={event._id}>
                  <Link
                    to={`/events/${event._id}`}
                    className="text-decoration-none"
                  >
                    <div className="card border-0 h-100">
                      <img
                        src={eventImageUrl}
                        alt={eventTitle}
                        className="card-img-top img-fluid"
                        style={{ height: "230px" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{eventTitle}</h5>
                        <p className="card-text text-secondary">
                          Hosted by: {hostedBy}
                        </p>
                        <p className="card-text ">
                          <CgCalendarDates className="icon-large text-secondary" />{" "}
                          {getDateAndTime(eventStartDateTime)}
                        </p>
                        <p className="card-text ">
                          <span>
                            <FaRegCheckCircle className="icon-large text-secondary" />{" "}
                            {eventAttendeeCount}
                          </span>
                          <span className="mx-4">
                            <HiOutlineTicket className="icon-large text-secondary" />{" "}
                            {isEventFree ? (
                              "Free"
                            ) : (
                              <>
                                <BiRupee style={{ fontSize: "1.2em" }} />
                                {eventCost}
                              </>
                            )}
                          </span>
                        </p>
                        <p>
                          {eventType === "Online" ? (
                            <span className="fw-semibold ">Online</span>
                          ) : (
                            <>
                              <GrLocation className="icon-large text-secondary" />{" "}
                              {eventAddress}
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default EventCardDisplay;
