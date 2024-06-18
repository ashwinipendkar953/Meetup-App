import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-5">
      <div className="row ">
        <div className="col-md-6 py-5">
          <h1 className="display-5 py-3 fw-bolder">
            The people platform—Where interests become friendships
          </h1>
          <p>
            Whatever your interest, from hiking and reading to networking and
            skill sharing, there are thousands of people who share it on Meetup.
            Events are happening every day—sign up to join the fun.
          </p>
          <Link type="button" className="btn-blue" to="/">
            Join Meetup
          </Link>
        </div>

        <div className="col-md-6 py-5">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/irl_event.svg?w=384"
            alt="Hero image"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
