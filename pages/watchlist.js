import * as React from 'react';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image'
=======
>>>>>>> 87604bfa2a6243e9478b2d2bae323c890706606f
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import { styled } from "@mui/system"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import ThemeProvider from "../Theme"
import CssBaseline from '@mui/material/CssBaseline'
<<<<<<< HEAD
import Box from "@mui/material/Box"
=======
>>>>>>> 87604bfa2a6243e9478b2d2bae323c890706606f
import FavoriteEventCard from "../components/FavoriteEvents"

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled(Grid)(({ theme }) => ({
  // minHeight: "100vh", 
  // direction: "column",
  // width: "100%",
  // display: "flex",
  // flexWrap: "wrap",
  color: "#ffffff",
  alignItems: "flex-start",
  flexDirection: "row",
  justifyContent: "flex-start",
}));

const Item = styled(Grid)(({ theme }) => ({
  // flexGrow: '1', 
  padding: '0em 1em 0em 1em', 
  margin: 'auto',
  width: 'calc(95% * (1/3) + 14px + 0px)',
  [theme.breakpoints.between('xs', 'sm')]: {
    flexGrow: '1',
    width: 'calc(100% * (1) + 0px + 0px)',
    "> div": {
      // marginLeft: 0,
      // marginRight: 0,
    },
  },
  [theme.breakpoints.between('sm', 'md')]: {
    flexGrow: '1',
    width: 'calc(100% * (1/2) + 0px + 0px)',
    "> div": {
      // marginLeft: 0,
      // marginRight: 0,
    },
  },
}));


export default function Watchlist() {
  return (
<<<<<<< HEAD
    <ThemeProvider>
    <CssBaseline />
      <Wrapper>
        <Header/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <HeaderBottom/>
          <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px"}} />
        <Main container>
          <Item item>
            <FavoriteEventCard/>
          </Item>
          <Item item>
            <FavoriteEventCard/>
          </Item>
          <Item item>
            <FavoriteEventCard/>
          </Item>
          <Item item>
            <FavoriteEventCard/>
          </Item>
        </Main>
      </Wrapper>
    </ThemeProvider>
=======
    <div>
      <ThemeProvider>
        <CssBaseline />
        <Wrapper>
          <Header />
          <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
          <HeaderBottom />
          <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
          <Main container>
            <Grid item sx={{ margin: "auto" }}>
              <FavoriteEventCard />
            </Grid>
            <Grid item sx={{ margin: "auto" }}>
              <FavoriteEventCard />
            </Grid>
            <Grid item sx={{ margin: "auto" }}>
              <FavoriteEventCard />
            </Grid>
            <Grid item sx={{ margin: "auto" }}>
              <FavoriteEventCard />
            </Grid>
          </Main>
        </Wrapper>
      </ThemeProvider>
    </div>
>>>>>>> 87604bfa2a6243e9478b2d2bae323c890706606f
  )
}