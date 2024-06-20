import Footer from "../components/Footer";
import Header from "../components/Header";
import EventHeader from "../components/eventDetails/EventHeader";
import EventDetailsSection from "../components/eventDetails/EventDetailsSection";
import EventQuickInfo from "../components/eventDetails/EventQuickInfo";
import EventFooter from "../components/eventDetails/EventFooter";

const EventDetails = () => {
  return (
    <>
      <Header />
      <main>
        <EventHeader />
        <hr className="mb-0" />
        <div className="bg-light p-0">
          <div className="container py-5">
            <div className="row g-4">
              <EventDetailsSection />
              <EventQuickInfo />
            </div>
          </div>
        </div>

        <EventFooter />
      </main>
      <Footer />
    </>
  );
};

export default EventDetails;
