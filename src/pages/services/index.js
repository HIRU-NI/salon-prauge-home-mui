import React from "react";

import { Box, Grid, Button } from "@mui/material";

const image = require("../../assets/images/services/haircut.png");

const Services = () => {
  return (
    <div>
      <Box >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <h1>Haircut</h1>
            <p>
              At Prauge we are passionate about making people feel good while
              looking their best. Attending advanced education allows us to keep
              up with the latest trends and provide each guest with a unique &
              customizable result. For your convenience, Schedule your
              reservation today!
            </p>
            <Button sx={{ bgcolor: "button.primary", color: "#fff", textTransform: 'capitalize'}}>
              Make a Reservation
            </Button>
          </Grid>
          <Grid item xs={6}>
            <img src={image} alt="serviceImage" style={{maxHeight: "80%"}}/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Services;
