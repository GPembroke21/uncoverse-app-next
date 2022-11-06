import '../styles/globals.css'
import ThemeProvider from '../Theme'
import { ContextProvider } from '../components/ContextProvider';
import React from "react";
import { Box, Divider, CssBaseline } from "@mui/material";
import { styled } from "@mui/system"
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import Footer from '../components/Footer'
import LanderPopup from '../components/LanderPopup'
      
Amplify.configure({ ...awsExports, ssr: true })
const Wrapper = styled("div")(({ theme }) => ({ maxWidth: 1600, margin: "0 auto" }));

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ContextProvider>
        <CssBaseline />
        <LanderPopup/>
        <Wrapper>
          <Box
            paddingY={0}
            paddingX={0}
            px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
          >
            <Header />
            <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
            <HeaderBottom />
            <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
            <Component {...pageProps} />
            <Footer/>
          </Box>
        </Wrapper>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
