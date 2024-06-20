const EventDetailsSection = ({ event }) => {
  const {
    eventTitle,
    eventImageUrl,
    eventDescription,
    eventDressCode,
    eventAgeRestriction,
    eventTags,
  } = event;
  return (
    <div className="col-lg-7 mt-0">
      <picture>
        <img src={eventImageUrl} alt={eventTitle} className="img-fluid w-100" />
      </picture>
      {/* event details */}
      <section className="mt-4">
        <h3 className="fw-bold">Details:</h3>
        <p>{eventDescription}</p>
      </section>

      {/* event addional info */}
      <section>
        <h3 className="fw-bold">Additional Information:</h3>
        <p className="mb-0">
          <span className="fw-bold">Dress Code:</span> {eventDressCode}
        </p>
        <p>
          <span className="fw-bold">Age Restrictions:</span>{" "}
          {eventAgeRestriction}
        </p>
      </section>

      {/* event tags */}
      <section>
        <h3 className="fw-bold">Event Tags:</h3>

        <div className="row py-2">
          {eventTags.map((tag, index) => (
            <span
              key={index}
              className="bg-lightBlue col-3 w-auto mb-2 rounded-3 me-2 py-2 px-3"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventDetailsSection;
