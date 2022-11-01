import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

//custom-css
import "../assets/styles/carousel.css";

const CarouselItem = ({ service }) => {
  return (
    <Card key={service.name} className="carousel_item">
      <CardMedia
        component="img"
        height="140"
        image={service.image}
        alt={service.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          {service.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"gutterBottom>
          {service.description}
        </Typography>
        <Button className="carousel_button">MAKE A RESERVATION</Button>
      </CardContent>
    </Card>
  );
};

export default CarouselItem;
