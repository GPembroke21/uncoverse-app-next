import React from 'react'
import { styled } from "@mui/system"
import {useState} from 'react'
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
  padding: "0rem 0rem",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
}));

const PlatformsContainer = styled("div")(({ theme }) => ({
  margin: "0.6rem 0rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  '&::-webkit-scrollbar': {
  display: "none",
  width: 0,
  },
}));

const PlatformButton = styled(Button)(({ theme }) => ({
  color: "white", 
  backgroundColor: "#252425", 
  fontSize: "clamp(8px, 1vw, 14px)", 
  borderRadius: '7px',
  marginRight: '10px',
  height: "2.5em",
  width: "11em",
  "&:hover": {
    color: "#dd00ff",
    backgroundColor: "#252425",
  },
}));

const PlatformsDropdown = () => {
  const [buttonColor1, setButtonColor1] = useState("white");
  const [buttonColor2, setButtonColor2] = useState("white");
  const [buttonColor3, setButtonColor3] = useState("white");
  const [buttonColor4, setButtonColor4] = useState("white");
  const [buttonColor5, setButtonColor5] = useState("white");
  const [buttonColor6, setButtonColor6] = useState("white");

  const handleClick1 = event => {
    buttonColor1 === "white" ? setButtonColor1("#dd00ff") : setButtonColor1("white");
  };

  const handleClick2 = event => {
    buttonColor2 === "white" ? setButtonColor2("#dd00ff") : setButtonColor2("white");
  };

  const handleClick3 = event => {
    buttonColor3 === "white" ? setButtonColor3("#dd00ff") : setButtonColor3("white");
  };

  const handleClick4 = event => {
    buttonColor4 === "white" ? setButtonColor4("#dd00ff") : setButtonColor4("white");
  };

  const handleClick5 = event => {
    buttonColor5 === "white" ? setButtonColor5("#dd00ff") : setButtonColor5("white");
  };

  const handleClick6 = event => {
    buttonColor6 === "white" ? setButtonColor6("#dd00ff") : setButtonColor6("white");
  };

  return (
    <ThemeProvider>
      <Wrapper>
        <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
          <PlatformsContainer>
            <PlatformButton onClick={handleClick1} style={{color: buttonColor1}}>Decentraland</PlatformButton>
            <PlatformButton onClick={handleClick2} style={{color: buttonColor2}}>Somnium</PlatformButton>
            <PlatformButton onClick={handleClick3} style={{color: buttonColor3}}>CRVX</PlatformButton>
            <PlatformButton onClick={handleClick4} style={{color: buttonColor4}}>Meta</PlatformButton>
            <PlatformButton onClick={handleClick5} style={{color: buttonColor5}}>Sandbox</PlatformButton>
            <PlatformButton onClick={handleClick6} style={{color: buttonColor6}}>Roblox</PlatformButton>
          </PlatformsContainer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default PlatformsDropdown