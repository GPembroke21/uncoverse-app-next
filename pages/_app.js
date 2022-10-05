import '../styles/globals.css'
import Box from "@mui/material/Box";
import Home from "./home.js";

function MyApp() {
  return (
      <Box 
      paddingY={0} 
      paddingX={0}
      px={{xs:0, sm:0, md:"3em", lg:"4em", xl:"5em"}}
      >
        <Home />
      </Box>
  );
}

export default MyApp
