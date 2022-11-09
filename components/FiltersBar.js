import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Searchbar from './Searchbar'
import FiltersDropdown from './FiltersDropdown'
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFiltersFavoritesContext, useFiltersContextUpdate, useLoginContext } from './ContextProvider';
import AuthPopup from './AuthPopup'

const FiltersContainer = styled("div")(({ theme }) => ({ margin: "14px 0px", padding: "0px 10px 0px 14px", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const FiltersButton = styled(Button)(({ theme }) => ({
  color: "white", backgroundColor: "#252425", fontSize: "clamp(8px, 1vw, 14px)", borderRadius: '7px',
  marginRight: '10px', height: "2.5em", width: "11em", "&:hover": { color: "#dd00ff" }
}));

export default function Filters() {
  const [isShown, setIsShown] = useState(false);
  const filtersUpdate = useFiltersContextUpdate()
  const favoritesFilter = useFiltersFavoritesContext()
  const loginCreds = useLoginContext()
  const [authOpen, setAuthOpen] = useState(false)

  const handleClick = () => {
    if (!loginCreds.signedIn && !authOpen) {
      setAuthOpen(true)
    } else {
      filtersUpdate.toggleFavorites()
    }
  }

  return (
    <ThemeProvider>
      <FiltersContainer>
        <Searchbar />
        <FiltersButton
          onClick={() => setIsShown(!isShown)}
          endIcon={<TuneIcon sx={{ width: '0.6em', height: '0.6em' }} />}
          style={{ backgroundColor: "#21172a", color: isShown ? "#dd00ff" : "white" }}>
          Filters
        </FiltersButton>
        <FiltersButton
          variant="contained"
          endIcon={<FavoriteIcon sx={{ width: '0.5em', height: '0.5em' }} />}
          style={{ backgroundColor: "#21172a", color: favoritesFilter ? "#dd00ff" : "white" }}
          onClick={handleClick}
        >
          Favorites
        </FiltersButton>
      </FiltersContainer>
      {isShown && (<FiltersDropdown />)}
      {!loginCreds.signedIn &&
        <AuthPopup open={authOpen} setOpen={() => setAuthOpen(false)} />
      }
    </ThemeProvider>
  )
}