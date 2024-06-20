const EventSpeakers = () => {
  return (
    <>
      <h3 className="fw-bold">Speakers: (2)</h3>
      <div className="row g-3 mt-2">
        <div className="col-6">
          <div className="card border-0 rounded-4">
            <div className="card-body text-center p-3">
              <img
                src="https://secure.meetupstatic.com/photos/event/7/0/4/7/clean_521428743.webp"
                alt="host1"
                className="img-fluid rounded-circle"
                style={{ width: "56px" }}
              />
              <p className="mb-0 fw-bold">theconfio</p>
              <p className="mb-0">Organizer</p>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card border-0 rounded-4">
            <div className="card-body text-center p-3">
              <img
                src="https://secure.meetupstatic.com/photos/member/b/a/1/8/highres_319667640.jpeg"
                alt="host2"
                className="img-fluid rounded-circle"
                style={{ width: "56px" }}
              />
              <p className="mb-0 fw-bold">Sivaprasad</p>
              <p className="mb-0">Co-organizer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSpeakers;
