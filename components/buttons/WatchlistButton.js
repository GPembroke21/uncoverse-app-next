import * as React from 'react'
import {useState} from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from 'next/link'
import ThemeProvider from "../../Theme"
import { styled } from "@mui/system"

const WatchlistButton = styled(Button)(({ theme }) => ({
    color: "#f5f3f7", 
    backgroundColor: '#21172a', 
    fontSize: "clamp(8px, 1vw, 12px)", 
    borderRadius: '6px',
    padding: "0.46rem",
    marginRight: '10px',
    width: "11em",
    height: "2rem",
    "&:hover": {
        color: "#dd00ff",
        backgroundColor: "#1c1425"
    },
    "&:active": {
      color: "#dd00ff",
      backgroundColor: "#120C18"
    },
}));

export default function BasicButtons() {
  // const [buttonColor, setButtonColor] = useState("white");

  // const handleClick = event => {
  //   buttonColor === "white" ? setButtonColor("#dd00ff") : setButtonColor("white");
  // };

  // const handleButtonColor = () => {
  //   window.location.href === "http://localhost:3000/watchlist" ? setButtonColor("#dd00ff") : setButtonColor("white");
  // }

  return (
    <ThemeProvider>
        <WatchlistButton 
        variant="contained"
        endIcon={<FavoriteIcon sx={{ width: '0.5em', height: '0.5em' }}/>}
        // onload={handleButtonColor}
        // style= {{color: buttonColor}}
        >
          <Link href="/watchlist">
            Watchlist
          </Link>
        </WatchlistButton>
    </ThemeProvider>
  );
}
