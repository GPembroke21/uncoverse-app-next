import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';
import ThemeProvider from "../../Theme"
import { styled } from "@mui/system"

const WatchlistButton = styled(Button)(({ theme }) => ({
    color: "white", 
    backgroundColor: '#252425', 
    fontSize: "clamp(8px, 1vw, 14px)", 
    borderRadius: '6px',
    // border: "1px solid white",
    padding: "0.46rem",
    marginRight: '10px',
    // height: "2.5em",
    width: "11em",
    "&:hover": {
        // border: "1px solid #dd00ff",
        color: "#dd00ff",
        backgroundColor: "#121213"
    },
    "&:active": {
      // border: "1px solid #dd00ff",
      color: "#dd00ff",
      backgroundColor: "#000000"
    },
}));

export default function BasicButtons() {
  return (
    // <Stack spacing={2} direction="row" sx={{display: { xs: 'none', sm: 'revert' }}}>
    <ThemeProvider>
        <WatchlistButton 
        variant="contained"
        endIcon={<FavoriteIcon sx={{ width: '0.5em', height: '0.5em' }}/>}
        >
          <Link href="/watchlist">
            Watchlist
          </Link>
        </WatchlistButton>
    </ThemeProvider>
  );
}
