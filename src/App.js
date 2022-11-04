import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "./components/Navbar";

import Services from "./pages/service";
import Home from "./pages/home";
import Booking from "./pages/booking";

import themeObject from "./assets/styles/theme";

const theme = createTheme(themeObject);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
