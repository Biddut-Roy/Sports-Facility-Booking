import Contact from "../../page/Contact/Contact";
import Featured from "../../page/Featured/Featured";
import Hero from "../../page/Hero/Hero";
import Testimonial from "../../page/Testimonial/Testimonial";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Landing;
