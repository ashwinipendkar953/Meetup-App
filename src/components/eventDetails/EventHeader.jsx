const EventHeader = () => {
  return (
    <section className="container pt-3">
      <h1 className="display-6 fw-bolder fs-2">
        AI Insights & Frontend Explorations
      </h1>
      <div className="d-flex align-items-center mt-3">
        <img
          src="https://secure.meetupstatic.com/photos/member/b/a/1/8/highres_319667640.jpeg"
          className="rounded-circle img-fluid"
          width={"48px"}
          alt="host image"
        />
        <div className="ml-3 ps-3">
          <p className="mb-0">Hosted by</p>
          <p className="mb-0 fw-bold">Sivaprasad E V. and 2 others</p>
        </div>
      </div>
    </section>
  );
};

export default EventHeader;
