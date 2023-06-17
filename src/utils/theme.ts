// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#40BE01",
    },
    secondary: {
      light: "#F8F9FB",
      main: "#5f6f81",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          elevation: 0,
          backgroundColor: "#40BE01",
          color: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {
      textAlign: "left",
      fontSize: "0.9rem",
      color: "#5F6F81",
      lineHeight: "1.9rem",
    },
    h2: {
      color: "#5F6F81",
      fontWeight: "bold",
    },
    h3: {
      color: "#5F6F81",
      fontWeight: "bold",
    },
    h4: {
      color: "#5F6F81",
      fontWeight: "bold",
    },
    h5: {
      color: "#5F6F81",
      fontWeight: "bold",
    },
    h6: {
      color: "#5F6F81",
    },
  },
});
