import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Searchbar from './Searchbar'
import FiltersDropdown from './FiltersDropdown'
import TuneIcon from '@mui/icons-material/Tune';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { useAppContext, useAppContextUpdate } from './ContextProvider';
import AuthPopup from './AuthPopup'
import ListTabs from './ListTabs2'

const FiltersBarContainer = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }));
const FiltersContainer = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const AnalyticsContainer = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const FiltersButton = styled(Button)(({ theme }) => ({ color: theme.palette.button.text, background: theme.palette.button.main, fontSize: "clamp(8px, 1vw, 14px)", borderRadius: '7px', marginRight: '10px', height: "2.5em", width: "11em", "&:hover": { color: theme.palette.button.hovertext, background: theme.palette.button.main } }));

export default function FiltersBar() {
  const [isShown, setIsShown] = useState(false);
  const appContextUpdate = useAppContextUpdate()
  const favoritesFilter = useAppContext().filtersFavorites
  const loginCreds = useAppContext().loginCreds
  const [authOpen, setAuthOpen] = useState(false)

  const handleClick = () => {
    if (!loginCreds.signedIn && !authOpen) {
      setAuthOpen(true)
    } else {
      appContextUpdate.toggleFavorites()
    }
  }

  return (
    <ThemeProvider>
      <FiltersBarContainer sx={{margin: {xs: "-16px 0px 0px 0px", sm: "7px 0px 5px 0px"}}}>
      <FiltersContainer>
        {/* <Searchbar /> */}
        <FiltersButton
          onClick={() => setIsShown(!isShown)}
          endIcon={<TuneIcon sx={{ width: '0.6em', height: '0.6em' }} />}
          sx={{ color: isShown ? (theme) => theme.palette.button.hovertext : (theme) => theme.palette.button.text }}>
          Filters
        </FiltersButton>
        <FiltersButton
          variant="contained"
          endIcon={<FavoriteIcon sx={{ width: '0.6em', height: '0.6em' }} />}
          sx={{ color: favoritesFilter ? (theme) => theme.palette.button.hovertext : (theme) => theme.palette.button.text }}
          onClick={handleClick}
        >
          Favorites
        </FiltersButton>
      </FiltersContainer>
      <AnalyticsContainer>
        <ListTabs/>
      </AnalyticsContainer>
      </FiltersBarContainer>
      {isShown && (<FiltersDropdown />)}
      {!loginCreds.signedIn &&
        <AuthPopup open={authOpen} setOpen={() => setAuthOpen(false)} />
      }
    </ThemeProvider>
  )
}