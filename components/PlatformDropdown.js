import React from 'react'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { platformsDict } from '../src/static/StaticVariables'
import { useFiltersContext, useFiltersContextUpdate } from './ContextProvider'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0rem 0rem" }));

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
  padding: '0px 10px',
  borderRadius: '7px',
  marginRight: '10px',
  height: "2.5em",
  "&:hover": {
    color: "#dd00ff",
    backgroundColor: "#252425",
  },
}));

export default function PlatformsDropdown() {
  const filtersContext = useFiltersContext()
  const filtersContextUpdate = useFiltersContextUpdate()

  const handleClick = plat => {
    filtersContextUpdate.addPlatform(plat)
  }

  // const styleButton = plat => { return (filtersContext.includes(plat)) ? { color: "#dd00ff" } : { color: "white" } }

  return (
    <ThemeProvider>
      <Wrapper>
        <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
        <PlatformsContainer>
          {Object.keys(platformsDict).map((item, index) => (
            <PlatformButton
              key={index}
              onClick={handleClick(item)}
              // style={styleButton(item)}
              style={{ color: "#dd00ff" }}
            >{platformsDict[item]}</PlatformButton>
          ))}
        </PlatformsContainer>
      </Wrapper>
    </ThemeProvider>
  )
}