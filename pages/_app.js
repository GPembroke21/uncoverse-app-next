import '../styles/globals.css'
import Box from "@mui/material/Box";
import Home from "./home.js";

function MyApp({ Component, pageProps }) {
  return (
      <Box 
      maxWidth= {1600}
      paddingY={0} 
      paddingX={0}
      px={{xs:0, sm:0, md:"3em", lg:"4em", xl:"5em"}}
      >
        <Component {...pageProps} />
      </Box>
  );
}

export default MyApp
