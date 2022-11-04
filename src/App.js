import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Routes, Route, useLocation } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

import Navbar from "./components/Navbar";

import Services from "./pages/service";
import Home from "./pages/home";
import Booking from "./pages/booking";
import Success from "./pages/success";

import { useRef } from "react";
import { useLayoutEffect } from "react";

import themeObject from "./assets/styles/theme";

const theme = createTheme(themeObject);

const Wrapper = ({ children }) => {
  const location = useLocation();
  const { targetId } = location.state || {};
  useLayoutEffect(() => {
    if (!targetId) document.documentElement.scrollTo(0, 0);
  }, [location.pathname, targetId]);
  return children;
};

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home aboutRef={aboutRef} servicesRef={servicesRef} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </ThemeProvider>
    </Wrapper>
  );
}

export default App;
