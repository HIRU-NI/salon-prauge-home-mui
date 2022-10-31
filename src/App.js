import "./App.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

import Services from "./pages/service";
import Home from "./pages/home";

import themeObject from "./assets/styles/theme";

const theme = createTheme(themeObject);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
