import Poppins from "../fonts/Poppins-Regular.ttf";

const themeObject = {
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },

    button: {
      primary: "#000",
      secondary: "#B99A5F",
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
            @font-face {
              font-family:  'Poppins', sans-serif;
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Poppins'), local('Poppins-Regular'), url(${Poppins}) format('ttf');
              unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
            }
          `,
      },
    },
  },
};

export default themeObject;
