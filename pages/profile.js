import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ThemeProvider from "../Theme"
import Link from 'next/link'
import CssBaseline from '@mui/material/CssBaseline'
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled(Grid)(({ theme }) => ({
//   minHeight: "100vh",
  maxHeight: '50em',
  color: "#ffffff",
  margin: "4vw 2em",
  flexDirection: "row",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "left",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
      paddingRight: "60px",
    },
  },
}));

const EditButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "0.8rem",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "4px",
    padding: "0.46rem",
    cursor: "pointer",
    margin: "12px 0px",
    width: "min(40vw, 200px)",
    height: "55px",
    "&:hover": {
      border: "1px solid #dd00ff",
      color: "#dd00ff",
    }
}));

const SaveButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "0.8rem",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "4px",
    padding: "0.46rem",
    cursor: "pointer",
    margin: "40px 0px",
    // width: "min(40vw, 200px)",
    height: "55px",
    "&:hover": {
      border: "1px solid #dd00ff",
      color: "#dd00ff",
    }
}));

const TextFields = styled(TextField)(({ theme }) => ({
    caretColor: "white",
    '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      "& .MuiInputLabel-root": {
        color: 'white', 
      },
}));

export default function Test() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Wrapper>
        <Header/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <HeaderBottom/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <Main container>
            <Grid
            // justifyContent="center"
            // alignItems="flex-start"
            // flexDirection="column"
            marginRight="25px"
            >
                <Grid item position="relative" width="min(40vw, 200px)" height="min(40vw, 200px)" marginBottom="13px">
                    <Image src='/profile.svg' layout="fill" objectFit="contain" unoptimized={true} />
                </Grid>
                <Grid item>
                    <EditButton>Edit Avatar</EditButton>
                </Grid>
            </Grid>
            {/* <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px", marginTop: "4vw"}} /> */}
            <Grid
            alignItems="flex-start"
            flexDirection="column"
            >
                <Grid item marginBottom={1} marginTop={0}>
                    <Typography>Display Name</Typography>
                </Grid>
                <Grid item>
                    <TextFields
                        placeholder="Guest" 
                        fullWidth 
                        required 
                        inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                        sx={{ input: { color: 'white' } }}
                    />
                </Grid>
                <Grid item marginBottom={1} marginTop={1}>
                    <Typography>UserName</Typography>
                </Grid>
                <Grid item>
                    <TextFields
                        placeholder="@guest69" 
                        fullWidth 
                        required 
                        inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                        sx={{ input: { color: 'white' } }}
                    />
                </Grid>
                <Grid item marginBottom={1} marginTop={1}>
                    <Typography>Email</Typography>
                </Grid>
                <Grid item>
                    <TextFields
                        placeholder="guest69@gmail.com" 
                        fullWidth 
                        required 
                        inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                        sx={{ input: { color: 'white' } }}
                    />
                </Grid>
                <Grid item>
                    <SaveButton fullWidth>Save</SaveButton>
                </Grid>
            </Grid>
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}