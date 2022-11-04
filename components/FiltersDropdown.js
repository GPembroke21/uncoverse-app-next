import React from 'react'
import {useState} from 'react'
import { styled } from "@mui/system"
import ProfileDropdown from './buttons/ProfileDropdown'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import CategoriesDropdown from './CategoriesDropdown'
import PlatformDropdown from './PlatformDropdown'

const Wrapper = styled("div")(({ theme }) => ({
  width: "calc(100%)",
  padding: "0rem 1rem",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
}));

const FiltersContainer = styled("div")(({ theme }) => ({
  margin: "0.6rem 0rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const FilterButton = styled(Button)(({ theme }) => ({
  color: "white", 
  backgroundColor: "#252425", 
  fontSize: "clamp(8px, 1vw, 14px)", 
  borderRadius: '7px',
  marginRight: '10px',
  height: "2.5em",
  width: "11em",
  "&:hover": {
    color: "#dd00ff",
  },
}));

const FiltersDropdown = () => {
  const [isShown, setIsShown] = useState(false);
  const [buttonColor, setButtonColor] = useState("white");
  const [isShown2, setIsShown2] = useState(false);
  const [buttonColor2, setButtonColor2] = useState("white");

  const handleClick = event => {
    setIsShown(current => !current);
    buttonColor === "white" ? setButtonColor("#dd00ff") : setButtonColor("white");
    setIsShown2(false);
    setButtonColor2("white");
  };

  const handleClick2 = event => {
    setIsShown2(current => !current);
    buttonColor2 === "white" ? setButtonColor2("#dd00ff") : setButtonColor2("white");
    setIsShown(false);
    setButtonColor("white");
  };

  return (
    <ThemeProvider>
    <Wrapper>
    <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
        <FiltersContainer>
          <FilterButton 
            onClick={handleClick2} 
            style={{color: buttonColor2, backgroundColor: "#252425"}}
          >
            Platform
          </FilterButton>
          <FilterButton 
            onClick={handleClick} 
            style={{color: buttonColor, backgroundColor: "#252425"}}
          >
            Category
          </FilterButton>
        </FiltersContainer>
        {isShown && (<CategoriesDropdown/>)}
        {isShown2 && (<PlatformDropdown/>)}
    </Wrapper>
    </ThemeProvider>
  )
}

export default FiltersDropdown