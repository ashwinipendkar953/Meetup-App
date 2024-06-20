const EventSpeakers = ({ speakers }) => {
  return (
    <>
      <h3 className="fw-bold">Speakers: ({speakers.length})</h3>
      <div className="row g-3 mt-2">
        {speakers &&
          speakers.length > 0 &&
          speakers.map((speaker) => (
            <div className="col-lg-12 col-md-6 col-12" key={speaker._id}>
              <div className="card h-100">
                <div className="row">
                  <div className="col-5">
                    <img
                      src={speaker.imageUrl}
                      alt={`${speaker.name} image`}
                      className="img-fluid w-100"
                      style={{ height: "120px" }}
                    />
                  </div>
                  <div className="col-7">
                    <div className="card-body">
                      <p className="card-text mb-0 fw-bold">{speaker.name}</p>
                      <p className="card-text mb-0">{speaker.designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default EventSpeakers;
