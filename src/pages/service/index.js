import React from "react";

import Grid from "@mui/material/Unstable_Grid2";

import { Button } from "@mui/material";
import "../../assets/styles/service.css";

const image = require("../../assets/images/services/haircut.png");

const Services = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <h1>Haircut</h1>
          <p>
            At Prauge we are passionate about making people feel good while
            looking their best. Attending advanced education allows us to keep
            up with the latest trends and provide each guest with a unique &
            customizable result. For your convenience, Schedule your reservation
            today!
          </p>
          <Button
            sx={{
              bgcolor: "button.primary",
              color: "#fff",
              textTransform: "capitalize",
            }}
          >
            Make a Reservation
          </Button>
        </Grid>
        <Grid item xs={6} className="service_image">
          <img src={image} alt="serviceImage" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;
