import { FiClock } from "react-icons/fi";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import { MdIosShare } from "react-icons/md";

const EventDetails = () => {
  return (
    <>
      <Header />
      <main>
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
        <hr className="mb-0" />
        <div className="bg-light p-0">
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-lg-7">
                <picture>
                  <img
                    src="https://secure.meetupstatic.com/photos/event/2/f/4/7/600_521532103.webp?w=750"
                    alt=""
                    className="img-fluid w-100"
                  />
                </picture>
                <section className="mt-4">
                  <h3 className="fw-bold">Details:</h3>
                  <p>
                    <q>AI Insights & Frontend Explorations</q> is a meetup
                    focused on integrating artificial intelligence (AI)
                    advancements into frontend development practices. This event
                    brings together professionals and enthusiasts interested in
                    leveraging AI technologies to enhance user interfaces,
                    optimize user experiences, and explore innovative frontend
                    design strategies. Participants can expect discussions on
                    cutting-edge AI applications, practical insights into
                    implementing AI-driven features in web and mobile
                    interfaces, and collaborative explorations of how AI can
                    revolutionize frontend development paradigms.
                  </p>
                </section>

                <section>
                  <h3 className="fw-bold">Additional Information:</h3>
                  <p className="mb-0">
                    <span className="fw-bold">Dress Code:</span> Smart casual
                  </p>
                  <p>
                    <span className="fw-bold">Age Restrictions:</span> 18 and
                    above
                  </p>
                </section>

                <section>
                  <h3 className="fw-bold">Event Tags:</h3>
                  <div>
                    <Link
                      type="button"
                      className="btn btn-lightBlue rounded-3 me-2"
                    >
                      Web Development
                    </Link>
                    <Link
                      type="button"
                      className="btn btn-lightBlue rounded-3 me-2"
                    >
                      Software Development
                    </Link>
                  </div>
                </section>
              </div>

              <div className="col-lg-4 offset-lg-1">
                <div className="card border-0 rounded-4 mb-3">
                  <div className="card-body p-4 d-flex align-items-center">
                    <img
                      src="https://secure.meetupstatic.com/photos/event/7/0/4/7/clean_521428743.webp"
                      alt="organizer image"
                      className="img-fluid rounded-2"
                      style={{ width: "56px" }}
                    />
                    <div className="ml-3 ps-3">
                      <p className="mb-0 fw-bold">theconfio</p>
                      <p className="mb-0 text-secondary">Public group</p>
                    </div>
                  </div>
                </div>

                <div className="card border-0 rounded-top-4">
                  <div className="card-body p-4 ">
                    <div className="d-flex text-secondary">
                      <BiRupee className="icon-large " />
                      <p>3000</p>
                    </div>
                    <div className="d-flex align-items-start mb-3">
                      <FiClock className="icon-large text-secondary" />
                      <div className="ml-3 ps-3">
                        <p className="mb-0">Saturday, June 29, 2024</p>
                        <p className="mb-0">10:00 AM to 1:00 PM IST</p>
                        <Link className="text-decoration-none text-success">
                          Add to calendar
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-start">
                      <GrLocation className="icon-large text-secondary" />
                      <div className="ml-3 ps-3">
                        <p className="mb-0">WORKDEN - Old Airport Road</p>
                        <p className="mb-0">
                          HAL Old Airport Rd · Bengaluru, Ka
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link className="text-decoration-none">
                    <img
                      src="https://maps-googleapis.meetup.com/maps/api/staticmap?center=12.961379%2C%2077.63513&zoom=17&size=480x300&format=png&scale=1&key=AIzaSyBhcQiQISkjMBwLAugJj8V78nMPfitnr44&markers=icon%3Ahttps%3A%2F%2Fsecure.meetupstatic.com%2Fnext%2Fimages%2Fevent%2Fmup-custom-google-map-pin.png%7Ccolor%3A0xF65858%7C12.961379%2C%2077.63513"
                      alt="Map image"
                      className="img-fluid w-100"
                    />
                  </Link>
                </div>
                <hr />
                {/* speakers */}
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
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="container py-3">
            <div className=" d-flex justify-content-between align-items-center">
              <div>
                <p className="mb-0">SAT, JUN 29 · 10:00 AM IST</p>
                <p className="fw-bold mb-0">
                  AI Insights & Frontend Explorations
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <BiRupee className="icon-large " />
                  <p className="mb-0">3000</p>
                </div>
                <Link
                  type="button"
                  className="btn border-blue blue-text fw-semibold mx-4 py-3 px-5"
                >
                  Share <MdIosShare className="icon-large ms-2" />
                </Link>
                <Link type="button" className="btn btn-peach py-3 px-5">
                  Attend
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
