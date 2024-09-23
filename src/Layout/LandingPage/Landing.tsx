import Contact from "../../page/Contact/Contact";
import Featured from "../../page/Featured/Featured";
import Gallery from "../../page/Gallery/Gallery";
import Hero from "../../page/Hero/Hero";
import Testimonial from "../../page/Testimonial/Testimonial";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Gallery />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Landing;
