import ApartmentCards from "./components/ApartmentCards";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocationSection from "./components/LocationSection";
import Pricing from "./components/Pricing";
import StickyCta from "./components/StickyCta";
import Testimonials from "./components/Testimonials";
import { apartments, owner, testimonials, unavailableDates } from "./data/siteData";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ApartmentCards apartments={apartments} />
      <Gallery apartments={apartments} />
      <Pricing apartments={apartments} />
      <AvailabilityCalendar bookedDates={unavailableDates} />
      <Testimonials testimonials={testimonials} />
      <LocationSection apartments={apartments} />
      <BookingForm owner={owner} />
      <Footer owner={owner} />
      <StickyCta />
    </div>
  );
}
