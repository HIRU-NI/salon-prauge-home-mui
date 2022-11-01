import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

import Slider from "react-slick";

//custom-css
import "../assets/styles/carousel.css";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
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
    image: require("../assets/images/services/haircut.png"),
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
    image: require("../assets/images/services/haircut.png"),
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
    image: require("../assets/images/services/haircut.png"),
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
            <Card key={item.name} className="carousel_item">
              <CardMedia
                component="img"
                height="140"
                image={item.image}
                alt="item.name"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Button>MAKE A RESERVATION</Button>
              </CardContent>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default ServiceCarousel;
