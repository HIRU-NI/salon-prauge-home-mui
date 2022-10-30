import "./App.css";
import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

import { ThemeProvider, createTheme, Container } from "@mui/material";

import Services from "./pages/service";
import Home from "./pages/home";

import themeObject from "./assets/styles/theme";

const theme = createTheme(themeObject);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
