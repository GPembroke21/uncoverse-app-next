import '../styles/globals.css'
import Box from "@mui/material/Box";
import Home from "./home.js";

function MyApp() {
  return (
      <Box 
      paddingY={0} 
      paddingX={0}
      px={{xs:0, sm:0, md:6, lg:8, xl:10}}
      >
        <Home />
      </Box>
  );
}

export default MyApp
