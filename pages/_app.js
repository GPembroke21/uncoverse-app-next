import '../styles/globals.css'
import Box from "@mui/material/Box"
import { styled } from "@mui/system"
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'
import { Hub } from 'aws-amplify';
import React from "react";

Amplify.configure({ ...awsExports, ssr: true })

const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 1600,
  margin: "0 auto",
  // [theme.breakpoints.down("sm")]: {
  //   maxWidth: "100%",
  // },
}));

function MyApp({ Component, pageProps }) {
  const [logInStatus, setLogInStatus] = React.useState(false)
  
  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        // console.log('user signed in'); 
        setLogInStatus(true); break;
      case 'signUp':
        // console.log('user signed up'); 
        setLogInStatus(false); break;
      case 'signOut':
        // console.log('user signed out'); 
        setLogInStatus(false); break;
      case 'signIn_failure':
        // console.log('user sign in failed'); 
        setLogInStatus(false); break;
      case 'configured':
        // console.log('the Auth module is configured'); 
        setLogInStatus(false);
    }
  });

  return (
    <Wrapper>
      <Box
        paddingY={0}
        paddingX={0}
        px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
      >
        <Component {...pageProps} logInStatus={logInStatus}/>
      </Box>
    </Wrapper>
  );
}

export default MyApp
