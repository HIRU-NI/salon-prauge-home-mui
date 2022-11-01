import React from "react";

import Slider from "react-slick";

import { Typography } from "@mui/material";

//custom-css
import "../assets/styles/carousel.css";

import CarouselItem from "./CarouselItem";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: (
    <img src={require("../assets/images/next-arrow.png")} alt="nextArrow" />
  ),
  prevArrow: (
    <img src={require("../assets/images/prev-arrow.png")} alt="prevArrow" />
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const items = [
  {
    name: "Haircut",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/haircut.png"),
  },
  {
    name: "Hair Styling",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/hair-styling.png"),
  },
  {
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/makeup.png"),
  },
  {
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/haircut.png"),
  },
  {
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/hair-styling.png"),
  },
  {
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../assets/images/services/makeup.png"),
  },
];

const ServiceCarousel = () => {
  return (
    <div className="carousel_main">
      <Typography variant="h4" className="carousel_title" >
        Services
      </Typography>
      <Slider {...settings} className="carousel">
        {items.map((item) => {
          return <CarouselItem service={item} />;
        })}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
