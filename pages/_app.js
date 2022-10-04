import '../styles/globals.css'
import Box from "@mui/material/Box";
import Home from "./home.js";

function MyApp() {
  return (
      <Box 
      paddingY={0} 
      paddingX={0}
      px={{xs:0, sm:3, md:6, lg:9, xl:0}}
      >
        <Home />
      </Box>
  );
}

export default MyApp
