import React from 'react'
import {useState} from 'react'
import { styled } from "@mui/system"
import PlatformFilter from './buttons/PlatformFilter'
import CategoryFilter from './buttons/CategoryFilter'
import ClearFilters from './buttons/ClearFilters'
import ThemeProvider from "../Theme"
import Searchbar from './Searchbar'
import FavoritesButton from './buttons/FavoritesButton'
import FiltersDropdown from './FiltersDropdown'
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button'

const FiltersContainer = styled("div")(({ theme }) => ({
  margin: "14px 0px",
  padding: "0px 10px 0px 14px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const FiltersButton = styled(Button)(({ theme }) => ({
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

const Filters = () => {
  const [isShown, setIsShown] = useState(false);
  const [buttonColor, setButtonColor] = useState("white");

  const handleClick = event => {
    setIsShown(current => !current);
    buttonColor === "white" ? setButtonColor("#dd00ff") : setButtonColor("white");
  };

  return (
    <ThemeProvider>
      <FiltersContainer>
        <Searchbar />
        {/* <PlatformFilter />
        <CategoryFilter /> */}
        <FiltersButton 
          onClick={handleClick}
          endIcon={<TuneIcon sx={{ width: '0.6em', height: '0.6em'}}/>}         
          style={{backgroundColor: "#252425", color: buttonColor}}>
            Filters
        </FiltersButton>
        <FavoritesButton />
      </FiltersContainer>
      {isShown && (<FiltersDropdown/>)}
    </ThemeProvider>
  )
}

export default Filters