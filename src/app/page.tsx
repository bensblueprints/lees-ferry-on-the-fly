import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Backhaul from "./components/Backhaul";
import Gallery from "./components/Gallery";
import Captain from "./components/Captain";
import Lodging from "./components/Lodging";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="cinema-bar" />
        <Services />
        <div className="cinema-bar" />
        <Backhaul />
        <div className="cinema-bar" />
        <Gallery />
        <div className="cinema-bar" />
        <Captain />
        <div className="cinema-bar" />
        <Lodging />
        <div className="cinema-bar" />
        <HowItWorks />
        <div className="cinema-bar" />
        <FAQ />
        <div className="cinema-bar" />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
