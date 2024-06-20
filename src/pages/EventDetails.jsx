import Footer from "../components/Footer";
import Header from "../components/Header";
import EventHeader from "../components/eventDetails/EventHeader";
import EventDetailsSection from "../components/eventDetails/EventDetailsSection";
import EventQuickInfo from "../components/eventDetails/EventQuickInfo";
import EventFooter from "../components/eventDetails/EventFooter";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();

  const { data, loading, error } = useFetch(
    "https://meetup-api-psi.vercel.app/api/events"
  );

  const event = data && data.find((event) => event._id == eventId);

  return (
    <>
      <Header />
      {loading && (
        <div className="d-flex my-5 justify-content-center align-items-center">
          <div
            className="spinner-border text-primary me-2 spinner-border-sm"
            aria-hidden="true"
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></div>
          <p className="mb-0" role="status">
            Loading Event info...
          </p>
        </div>
      )}
      {event && (
        <main>
          <EventHeader event={event} />
          <hr className="mb-0" />
          <div className="bg-light p-0">
            <div className="container py-5">
              <div className="row g-4">
                <EventDetailsSection event={event} />
                <EventQuickInfo event={event} />
              </div>
            </div>
          </div>

          <EventFooter event={event} />
        </main>
      )}
      <Footer />
    </>
  );
};

export default EventDetails;
