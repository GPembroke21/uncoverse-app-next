import * as React from 'react'
import Button from '@mui/material/Button'
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Link from 'next/link'
import ThemeProvider from "../../Theme"
import { styled } from "@mui/system"

const WatchlistButton = styled(Button)(({ theme }) => ({
    color: theme.palette.button.text, 
    backgroundColor: "transparent", 
    fontSize: "clamp(8px, 1vw, 12px)", 
    borderRadius: '6px',
    padding: "0rem",
    marginRight: '10px',
    // width: "11em",
    // height: "1rem",
    "&:hover": {
        color: theme.palette.button.hovertext,
        backgroundColor: "transparent"
    },
    "&:active": {
      color: theme.palette.button.hovertext,
      backgroundColor: "transparent"
    },
}));

export default function BasicButtons() {
  return (
    <WatchlistButton 
    variant="contained"
    endIcon={<ShowChartIcon sx={{ width: '0.5em', height: '0.5em', marginLeft: '-5px' }}/>}
    >
      <Link href="/analytics">
        Analytics
      </Link>
    </WatchlistButton>
  );
}
