import BookingPage from "../../page/Booking/BookingPage";
import Contact from "../../page/Contact/Contact";
import Hero from "../../page/Hero/Hero";
import Testimonial from "../../page/Testimonial/Testimonial";

const Landing = () => {
  return (
    <div>
      <Hero />
      <BookingPage />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Landing;
