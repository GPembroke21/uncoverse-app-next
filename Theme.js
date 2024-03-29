import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NextRequest } from "next/server";
import Inter from "typeface-inter";


const theme = createTheme({
  palette: {
    background: {
      default: "#120C18",
    },
    button: {
      main: "#21172a",
      hover: "#1c1425",
      active: "#120C18",
      text: "#f5f3f7",
      hovertext: "#dd00ff",
    },
    card: {
      main: "#33283e",
      secondary: "#21172a",
      trending: "#1c1425",
    },
    // divider: {
    //   main: "#2e2e2e"
    // },
    text: {
      primary: "#f5f3f7",
      secondary: "#b9b3ba",
      label: "#7b7a7c",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      font: "Inter",
      fontSize: "min(3vw, 70px)",
      fontWeight: "bold",
      lineHeight: "1.15",
    },
    h2: {
      font: "Inter",
      fontSize: "min(3vw, 26.25px)",
      fontWeight: "200",
      lineHeight: "1.5",
    },
    h3: {
      font: "Inter",
      fontSize: "min(3vw, 20px)",
      fontWeight: "400",
      lineHeight: "1.5",
    },
    h4: {
      font: "Inter",
      fontSize: "min(2vw, 10px)",
      fontWeight: "300",
      lineHeight: "1.5",
    },
    h5: {
      font: "Inter",
      fontSize: "16px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
    h6: {
      font: "Inter",
      fontSize: "12px",
      fontWeight: "bold",
      lineHeight: "1.5",
    },
    h7: {
      font: "Inter",
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "1.5",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1600,
    },
  },
  components: {
    // MuiCssBaseline: {
    //   "@global": {
    //     '@font-face': [Inter],
    //   },
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          transitionDuration: "0s",
          fontFamily: "Inter",
          textTransform: "none",
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
          backgroundColor: "#252425",
          color: "white",
          '&:hover': {
            backgroundColor: "#252425",
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
          backgroundColor: "transparent",
          border: "none",
          padding: "0em 1em 0em 1em",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          /*borderSpacing: "0.1rem",
          borderCollapse: "separate",*/
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: "clamp(14px, 1.1vw, 16px)",
          color: "white",
          borderBottom: "1px solid #2e2e2e",
          padding: "10px 5px",
        },
        head: {
          padding: "0px 5px",
          fontSize: "min(2vw, 12px)",
          cursor: 'default'
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          color: "white",
          borderBottom: "1px solid #2e2e2e",
          /*height: "0rem",*/
          /*'&:last-child td, &:last-child th': {
            borderRadius: "0px 10px 10px 0px"},
            '&:first-child td, &:first-child th': {
            borderRadius: "10px 0px 0px 10px"},*/
          /*borderBottom: "5px solid rgb(15, 15, 15)",*/
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          borderBottom: "none",
        },
        toolbar: {
        },
        spacer: {
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
          color: "#f5f3f7",
          // fontSize: "min(2.9vw, 13px)",
          fontSize: "clamp(12px, 1.45vw, 14px)",
          fontWeight: "200",
          margin: "-0.2rem 0rem 0rem 0rem"
        },
        subtitle: {
          color: "#7b7a7c",
          // fontSize: "min(2.6vw, 13px)",
          fontSize: "clamp(10px, 1.25vw, 14px)",
          fontWeight: "300",
          margin: "0rem 0rem -0.2rem 0rem",
          padding: "0px 0px 1px 0px"
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        avatar: {
          margin: '0px 12px 0px -3px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&:-webkit-autofill": {
            "WebkitBoxShadow": "0 0 0 100px #120C18 inset",
            "WebkitTextFillColor": "white",
          },
        },
      },
    },
    MuiDialogContentText: {
      styleOverrides: {
        root: {
          fontSize: "clamp(10px, 1.5vw, 16px)",
          color: 'white',
        },
      },
    },   
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "clamp(8px, 1.2vw, 14px)",
          textTransform: "none",
        },
      },
    }, 
  },
});

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}