import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import EventCardDisplay from "./components/EventCardDisplay";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid px-5">
        <HeroSection />
        <EventCardDisplay />
      </main>
      <Footer />
    </>
  );
};

export default App;
