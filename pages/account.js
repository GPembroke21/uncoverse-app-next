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
import Filters from '../components/Filters'
import EventsList2 from '../components/EventsList2'
import AdBar from '../components/AdBar'
import Box from "@mui/material/Box"

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled("div")(({ theme }) => ({
  minHeight: "100vh", 
  color: "#ffffff",
  margin: "4vw 2em"
}));

const EditButton = styled("button")(({ theme }) => ({
  fontFamily: "Helvetica Neue",
  fontSize: "0.5rem",
  fontWeight: "500",
  textAlign: "center",
  color: "white",
  backgroundColor: "transparent",
  border: "1px solid white",
  borderRadius: "0.4rem",
  width: "3rem",
  padding: "0.46rem",
  cursor: "pointer",
  marginTop: "0.5rem",
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
        <Main>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            >
            <Box position="relative" width="max(30vw, 0.8rem)" height="max(30vw, 0.8rem)" marginRight="10vw">
              <Image src='/profile.svg' layout="fill" objectFit="contain" unoptimized={true} />
            </Box>
            <Box>
              <Typography>Guest</Typography>
              <Typography sx={{fontSize: '3vw', color: '#2e2e2e'}}>@guest69</Typography>
              <Typography sx={{fontSize: '1.8vw'}}>Joined Uncoverse December 2022</Typography>
              <EditButton>Edit</EditButton>
            </Box>
          </Grid>
            <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px", marginTop: "4vw"}} />
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}