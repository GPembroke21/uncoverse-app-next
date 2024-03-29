import * as React from 'react'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Link from 'next/link'
import ThemeProvider from "../../Theme"
import { styled } from "@mui/system"

const WatchlistButton = styled(Button)(({ theme }) => ({
    color: theme.palette.button.text, 
    backgroundColor: theme.palette.button.main, 
    fontSize: "clamp(8px, 1vw, 12px)", 
    borderRadius: '6px',
    padding: "0.46rem",
    marginRight: '10px',
    width: "11em",
    height: "2rem",
    "&:hover": {
        color: theme.palette.button.hovertext,
        backgroundColor: theme.palette.button.hover
    },
    "&:active": {
      color: theme.palette.button.hovertext,
      backgroundColor: theme.palette.button.active
    },
}));

export default function BasicButtons() {
  return (
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
  );
}
