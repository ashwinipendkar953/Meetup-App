// eslint-disable-next-line react/prop-types
const EventHeader = ({ event }) => {
  const { eventTitle, speakers } = event;
  return (
    <section className="container pt-2">
      <h1 className="display-6 fw-bolder fs-2">{eventTitle}</h1>
      {speakers && speakers.length > 0 && (
        <div className="d-flex align-items-center mt-2">
          <img
            src={speakers[0].imageUrl}
            className="rounded-circle img-fluid"
            style={{ width: "56px", height: "56px" }}
            alt="host image"
          />
          <div className="ml-3 ps-3">
            <p className="mb-0">Hosted by</p>
            <p className="mb-0 fw-bold">{speakers[0].name}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventHeader;
