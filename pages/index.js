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
import HighlightsBar from '../components/HighlightsBar'

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled("div")(({ theme }) => ({
  minHeight: "100vh", 
  color: "#ffffff",
}));

export default function Lander(props) {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Wrapper>
        <Header logInStatus={props.logInStatus}/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <HeaderBottom/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <AdBar/>
        <HighlightsBar/>
        <Filters/>
        <EventsList2/>
      </Wrapper>
    </ThemeProvider>
  )
}
