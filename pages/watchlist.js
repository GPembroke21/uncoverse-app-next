import * as React from 'react';
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import { styled } from "@mui/system"
import Divider from "@mui/material/Divider"
import Grid from "@mui/material/Grid"
import ThemeProvider from "../Theme"
import CssBaseline from '@mui/material/CssBaseline'
import FavoriteEventCard from "../components/FavoriteEvents"

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled(Grid)(({ theme }) => ({
  // minHeight: "100vh", 
  color: "#ffffff",
  justifyContent: "center",
  alignItems: "top",
  direction: "column",
}));


export default function Watchlist() {
  return (
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
  )
}