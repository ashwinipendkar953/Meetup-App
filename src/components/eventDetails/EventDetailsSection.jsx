const EventDetailsSection = () => {
  return (
    <div className="col-lg-7">
      <picture>
        <img
          src="https://secure.meetupstatic.com/photos/event/2/f/4/7/600_521532103.webp?w=750"
          alt=""
          className="img-fluid w-100"
        />
      </picture>
      {/* event details */}
      <section className="mt-4">
        <h3 className="fw-bold">Details:</h3>
        <p>
          <q>AI Insights & Frontend Explorations</q> is a meetup focused on
          integrating artificial intelligence (AI) advancements into frontend
          development practices. This event brings together professionals and
          enthusiasts interested in leveraging AI technologies to enhance user
          interfaces, optimize user experiences, and explore innovative frontend
          design strategies. Participants can expect discussions on cutting-edge
          AI applications, practical insights into implementing AI-driven
          features in web and mobile interfaces, and collaborative explorations
          of how AI can revolutionize frontend development paradigms.
        </p>
      </section>

      {/* event addional info */}
      <section>
        <h3 className="fw-bold">Additional Information:</h3>
        <p className="mb-0">
          <span className="fw-bold">Dress Code:</span> Smart casual
        </p>
        <p>
          <span className="fw-bold">Age Restrictions:</span> 18 and above
        </p>
      </section>

      {/* event tags */}
      <section>
        <h3 className="fw-bold">Event Tags:</h3>
        <div className="py-2">
          <span className="bg-lightBlue rounded-3 me-2 p-2">
            Web Development
          </span>
          <span className="bg-lightBlue rounded-3 me-2 p-2">
            Software Development
          </span>
        </div>
      </section>
    </div>
  );
};

export default EventDetailsSection;
