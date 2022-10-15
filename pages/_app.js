import '../styles/globals.css'
import Box from "@mui/material/Box"
import { styled } from "@mui/system"
import { Amplify } from 'aws-amplify'
import awsExports from '../src/aws-exports'

Amplify.configure({ ...awsExports, ssr: true })


const Wrapper = styled("div")(({ theme }) => ({
  maxWidth: 1600,
  margin: "0 auto",
  // [theme.breakpoints.down("sm")]: {
  //   maxWidth: "100%",
  // },
}));

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Box
        paddingY={0}
        paddingX={0}
        px={{ xs: 0, sm: 0, md: "3em", lg: "4em", xl: "5em" }}
      >
        <Component {...pageProps} />
      </Box>
    </Wrapper>
  );
}

export default MyApp
