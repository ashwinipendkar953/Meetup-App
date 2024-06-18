import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventListing from "./components/EventListing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid px-5">
        <HeroSection />
        <EventListing />
      </main>
      <Footer />
    </>
  );
};

export default App;
