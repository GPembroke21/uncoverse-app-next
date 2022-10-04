import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NextRequest } from "next/server";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
  },
  primary: {
    main: "#000000",
  },
  secondary: {
    main: "#ffffff",
    mainGradient: "linear-gradient(to right, tomato, cyan)",
  },
  },
  typography: {
    fontFamily: [
      "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue"
    ].join(","),
    h1: {
      font: "Helvetica Neue",
      fontSize: "min(3vw, 70px)",
      fontWeight: "bold",
      lineHeight: "1.15",
    },
    h2: {
      font: "Helvetica Neue",
      fontSize: "min(3vw, 26.25px)",
      fontWeight: "200",
      lineHeight: "1.5",
    },
    h3: {
      font: "Helvetica Neue",
      fontSize: "min(3vw, 20px)",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    h4: {
      font: "Helvetica Neue",
      fontSize: "min(2vw, 10px)",
      fontWeight: "300",
      lineHeight: "1.5",
    },
    h5: {
      font: "Helvetica Neue",
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
    h6: {
      font: "Helvetica Neue",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "1.5",
    },
    h7: {
      font: "Helvetica Neue",
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  components: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:"",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transitionDuration: "0s",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          margin: "0.86rem 0rem 0rem 0rem",
        },
        list: {
          backgroundColor: "black",
          border: "1px solid #282b2f",
          borderRadius: 5,
          padding: "0",
          width: "10.1rem",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "transparent",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "0.8rem",
          backgroundColor: "transparent",
          color: "white",
          '&:hover': {
            backgroundColor: "#282b2f",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: "0rem 1rem",
          backgroundColor: "black",
          color: "white",
          '&:hover': {
            backgroundColor: "black",
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        secondary: {
          fontSize: '0.75rem',
          color: "white",
          '&:hover': {
            color: "#d203fc",
          },
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(0, 0, 0)",
          border: "none",
          padding: "0em 1em 0em 1em",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "rgb(0, 0, 0)",
          /*borderSpacing: "0.1rem",
          borderCollapse: "separate",*/
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "min(2vw, 12px)",
          color: "white",
          borderBottom: "1px solid #2e2e2e",
          padding: "10px 5px",
        },
        head: {
          padding: "0px 5px",
          fontSize: "min(2vw, 12px)",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: "white",
          /*height: "0rem",*/
          /*'&:last-child td, &:last-child th': {
            borderRadius: "0px 10px 10px 0px"},
            '&:first-child td, &:first-child th': {
            borderRadius: "10px 0px 0px 10px"},*/
          /*borderBottom: "5px solid rgb(15, 15, 15)",*/
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "transparent",    
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "white",
          disableRipple: "true",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        scrollPaper: {
          alignItems: "flex-start",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          overflowY: "hidden",
        },
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
        caption: {
          color: "white",
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#2e2e2e",
        },
      },
    },
    MuiImageListItemBar: {
      styleOverrides: {
        title: {
          color: "#737373",
          fontSize: "min(2.9vw, 13px)",
          margin: "-0.2rem 0rem 0rem 0rem"
        },
        subtitle: {
          color: "white",
          fontSize: "min(2.6vw, 13px)",
          margin: "-0.2rem 0rem 0rem 0rem"
        },
      },
    },
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}