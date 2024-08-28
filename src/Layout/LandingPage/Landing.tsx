import Contact from "../../page/Contact/Contact";
import Hero from "../../page/Hero/Hero";
import Login from "../../page/Login/Login";
import Testimonial from "../../page/Testimonial/Testimonial";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Login />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Landing;
