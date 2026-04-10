import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Trips from "./components/Trips";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="copper-divider" />
        <About />
        <div className="copper-divider" />
        <Trips />
        <div className="copper-divider" />
        <Gallery />
        <div className="copper-divider" />
        <Testimonials />
        <div className="copper-divider" />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
