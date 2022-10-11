import React from 'react'
import { styled } from "@mui/system"
import ProfileDropdown from './buttons/ProfileDropdown'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"

const Wrapper = styled("div")(({ theme }) => ({
  width: "calc(100%)",
  padding: "0px 10px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const TickerContainer = styled("div")(({ theme }) => ({
  margin: "0.5rem 1rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const Header = () => {
  return (
    <ThemeProvider>
    <Wrapper>
        <TickerContainer>
            <Typography variant="h4">Active Events:</Typography>
            <Typography variant="h4" sx={{color: "#5794f7"}}>&nbsp;10</Typography>
            <Typography variant="h4" style={{paddingLeft: "1rem"}}>Upcoming Events:</Typography>
            <Typography variant="h4" sx={{color: "#5794f7"}}>&nbsp;500</Typography>
        </TickerContainer>
    </Wrapper>
    </ThemeProvider>
  )
}

export default Header