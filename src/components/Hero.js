import { Typography, Button } from "@mui/material";
import React from "react";

import "../assets/styles/hero.css";

const Hero = () => {
  return (
    <div class="hero_main">
      <div class="hero_background">
        <div class="hero_text">
          <Typography
            gutterBottom
            sx={{ fontFamily: "Playfair Display", fontWeight: 600, fontSize: "35px" }}
          >
            Always make room for beauty in your life
          </Typography>
          <Typography gutterBottom className="hero_subtitle">
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique &
            customizable result. For your convenience, Schedule your reservation
            today!
          </Typography>
          <Button className="hero_button">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
