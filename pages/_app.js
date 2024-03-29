import '../styles/globals.css'
import Head from 'next/head'
import ThemeProvider from '../Theme'
import { ContextProvider } from '../components/ContextProvider'
import React from "react"
import { useEffect } from "react"
import { Box, Divider, CssBaseline } from "@mui/material"
import { styled } from "@mui/system"
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import Header from '../components/Header'
import HeaderBottom from '../components/HeaderBottom'
import Footer from '../components/Footer'
import LanderPopup from '../components/LanderPopup'
import TagManager, { TagManagerArgs } from 'react-gtm-module'
import Script from 'next/script'

Amplify.configure({ ...awsExports, ssr: true })
const Wrapper = styled("div")(({ theme }) => ({ maxWidth: 1600, margin: "0 auto", position: "relative", minHeight: "100vh" }));

function MyApp({ Component, pageProps }) {
  // const tagManagerArgs = {gtmId: 'GTM-NP4XFZG'};

  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  return (
    <ThemeProvider>
      <Head>
        <title>Uncoverse</title>
        <meta property="title" content="Metaverse Search Engine" key="title" />
        <meta property="og:title" content="Metaverse Search Engine" key="title" />
        <meta property="description" content="Discover the Metaverse with Uncoverse – the ultimate search engine and analytics platform for virtual events, gaming, and spaces. Find out what’s happening and explore exciting virtual worlds." key="description" />
        <meta property="keywords" content="Uncoverse, Metaverse, Metaverse search, Metaverse search engine, Metaverse navigation engine, Metaverse navigation, Metaverse analytics, Learn about Metaverse, Metaverse spaces, Metaverse gaming, Gaming, Virtual Events, VR, Virtual Reality, Virtual Reality events, Decentraland, The Sandbox, Somnium Space, Voxels, Analytics" key="keywords" />
        <link rel="shortcut icon" href="/uv-logo.svg" />
      </Head>
      {/* Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-45L3Q5M9BX" />
      <Script id='google-analytics' strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-45L3Q5M9BX');
        `}
      </Script>

      <ContextProvider>
        <CssBaseline />
        <LanderPopup />
        <Wrapper>
          <Box
            paddingY={0}
            paddingX={0}
            px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
            paddingBottom="72px"
          >
            <Header />
            <Divider style={{ width: "100%", height: "0.01px" }} />
            <HeaderBottom />
            <Divider style={{ width: "100%", height: "0.01px" }} />
            <Component {...pageProps} />
            <Footer />
          </Box>
        </Wrapper>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default MyApp
