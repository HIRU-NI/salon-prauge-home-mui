
import './App.css';
import Navbar from './components/Navbar'

import {
  ThemeProvider,
  createTheme,
} from "@mui/material";

import themeObject from "./assets/styles/theme";

const theme = createTheme(themeObject);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
    </ThemeProvider>
  );
}

export default App;
