import React from "react";

import Hero from "../../components/Hero";
import Carousel from "../../components/Carousel";
import About from "../../components/About";

const Home = ({ aboutRef, servicesRef }) => {
  return (
    <div>
      <Hero />
      <Carousel ref={servicesRef} />
      <About ref={aboutRef} />
    </div>
  );
};

export default Home;
