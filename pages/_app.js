import '../styles/globals.css'
import ThemeProvider from '../Theme'
import { ContextProvider } from '../components/ContextProvider';
import React from "react";
import { Box, Divider, CssBaseline } from "@mui/material";
import { styled } from "@mui/system"
import { Amplify, Hub, Auth } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import GetAuth from '../src/auth/GetAuth'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import GetEvents from '../src/requests/GetEvents'

Amplify.configure({ ...awsExports, ssr: true })
const Wrapper = styled("div")(({ theme }) => ({ maxWidth: 1600, margin: "0 auto" }));

function MyApp({ Component, pageProps }) {
  const eventList = GetEvents()

  return (
    <ThemeProvider>
      <ContextProvider>
        <CssBaseline />
        <Wrapper>
          <Box
            paddingY={0}
            paddingX={0}
            px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
          >
            <Header eventList={eventList} />
            <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
            <HeaderBottom />
            <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
            <Component {...pageProps} eventList={eventList} />
          </Box>
        </Wrapper>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
