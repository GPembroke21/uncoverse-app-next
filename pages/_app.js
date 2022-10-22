import '../styles/globals.css'
import ThemeProvider from '../Theme'
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
  const [logInStatus, setLogInStatus] = React.useState(false)
  const loginCreds = GetAuth({ status: logInStatus })
  const eventList = GetEvents()

  React.useEffect(() => {
    Auth.currentCredentials().then(credentials => setLogInStatus(credentials.authenticated))
    return () => { }
  }, [])

  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        console.log('user signed in1'); 
        setLogInStatus(true); break;
      case 'signUp':
        console.log('user signed up1'); 
        setLogInStatus(false); break;
      case 'signOut':
        console.log('user signed out1'); 
        setLogInStatus(false); break;
      case 'signIn_failure':
        console.log('user sign in failed1'); 
        setLogInStatus(false); break;
    }
  });

  return (
    <ThemeProvider>
      <CssBaseline />
      <Wrapper>
        <Box
          paddingY={0}
          paddingX={0}
          px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
        >
          <Header eventList={eventList} loginCreds={loginCreds} />
          <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
          <HeaderBottom />
          <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
          <Component {...pageProps} eventList={eventList} loginCreds={loginCreds} />
        </Box>
      </Wrapper>
    </ThemeProvider>
  );
}

export default MyApp
