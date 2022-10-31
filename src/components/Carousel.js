import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

import Slider from "react-slick";

//custom-css
import "../assets/styles/carousel.css";



const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
};

const items = [
  {
    name: "Random Name #1",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "Random Name #2",
    description: "Hello World!",
  },
];

const ServiceCarousel = () => {
  return (
    <div className="carousel_main">
      <Typography variant="h4" className="carousel_title">
        Services
      </Typography>
      <Slider {...settings} className="carousel">
        {items.map((item) => {
          return (
            <Card key={item.name}>
              <CardContent>Hello</CardContent>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
