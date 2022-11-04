import React from "react";

import Grid from "@mui/material/Unstable_Grid2";

import {
  Button,
  Box,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";

import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

import "../../assets/styles/service.css";
import "../../assets/styles/booking.css";

const image = require("../../assets/images/services/haircut.png");

const services = [
  {
    index: 1,
    name: "Haircut",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../../assets/images/services/haircut.png"),
  },
  {
    index: 2,
    name: "Hair Styling",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../../assets/images/services/hair-styling.png"),
  },
  {
    index: 3,
    name: "Makeup",
    description:
      "Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eiusmod tempor incididunt ut.",
    image: require("../../assets/images/services/makeup.png"),
  },
];

const Booking = () => {
  const navigate = useNavigate();

  return (
    <div class="service_main">
      <Grid container>
        <Grid item xs={6} className="service_content">
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            <FormControl size="small" fullWidth>
              <InputLabel id="select-service">Select Service</InputLabel>
              <Select
                className="form_input"
                labelId="select-service"
                id="select-service"
                label="Select Service"
              >
                {services.map((service) => {
                  return (
                    <MenuItem value={service.name}>{service.name}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className="form_input"
                size="small"
                label="First Name*"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                className="form_input"
                size="small"
                label="Last Name*"
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField className="form_input" size="small" label="Email*" />
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Grid container columnSpacing={2}>
                <Grid item sm={6}>
                  <DesktopDatePicker
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                </Grid>

                <Grid item sm={6}>
                  <DesktopTimePicker
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                </Grid>
              </Grid>
            </LocalizationProvider>
            <Typography variant="h6" sx={{ marginTop: "20px" }}>
              Total: USD 25.00
            </Typography>
            <Button
              className="form_button"
              onClick={() => {
                navigate("/success");
              }}
            >
              Pay Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} className="service_image">
          <img src={image} alt="serviceImage" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
