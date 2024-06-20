const EventSpeakers = ({ speakers }) => {
  return (
    <>
      <h3 className="fw-bold">Speakers: ({speakers.length})</h3>
      <div className="row g-3 mt-2">
        {speakers &&
          speakers.length > 0 &&
          speakers.map((speaker) => (
            <div className="col-sm-6" key={speaker._id}>
              <div className="card border-0 rounded-4">
                <div className="card-body text-center p-3">
                  <img
                    src={speaker.imageUrl}
                    alt={`${speaker.name} image`}
                    className="img-fluid rounded-circle"
                    style={{ width: "72px", height: "72px" }}
                  />
                  <p className="mb-0 fw-bold">{speaker.name}</p>
                  <p className="mb-0">{speaker.designation}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default EventSpeakers;
