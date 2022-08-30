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
import EventsList from '../components/EventsList'
import InfoPane2 from '../components/InfoPane'
import AdBar from '../components/AdBar'
import Box from "@mui/material/Box"

const Wrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled("div")(({ theme }) => ({
  minHeight: "100vh", 
  color: "#ffffff",
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "top",
  alignItems: "flex-start",
  color: "#ffffff",
  padding: "25vh 1.2rem 1rem",
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  flex: "1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  color: "#ffffff",
  padding: "0 0.7rem 1rem",
}));

const NavButton = styled("button")(({ theme }) => ({
  fontFamily: "Helvetica Neue",
  fontSize: "0.8rem",
  fontWeight: "500",
  textAlign: "center",
  color: "black",
  border: "0px solid #282b2f",
  borderRadius: "0.4rem",
  width: "10.1rem",
  height: "3rem",
  padding: "0.8rem",
  cursor: "pointer",
  margin: "0rem 0.5rem",
  backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)",
  backgroundSize: '200%',
  transition: "0.4s",
  "&:hover": {
    backgroundPosition: "right",
  }
}));

export default function Lander() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Wrapper>
        <Header/>
        <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <HeaderBottom/>
        <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
          <Main>
            <Box sx={{mb: "12px"}}>
            <Filters/>
            </Box>
            <EventsList/>
            <InfoPane2/>
          </Main>
      </Wrapper>
    </ThemeProvider>
  )
}