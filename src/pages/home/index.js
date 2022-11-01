import React from "react";

import Hero from "../../components/Hero"
import Carousel from "../../components/Carousel"
import About from "../../components/About";

const Home = () => {
  return (
    <div>
      <Hero />
      <Carousel />
      <About />
    </div>
  );
};

export default Home;
