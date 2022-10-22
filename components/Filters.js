import React from 'react'
import { styled } from "@mui/system"
import PlatformFilter from './buttons/PlatformFilter'
import CategoryFilter from './buttons/CategoryFilter'
import ClearFilters from './buttons/ClearFilters'
import ThemeProvider from "../Theme"
import Searchbar from '../components/Searchbar'
import WatchlistButton from './buttons/WatchlistButton'

const FiltersContainer = styled("div")(({ theme }) => ({
  margin: "14px 0px",
  padding: "0px 10px 0px 14px",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const Filters = () => {
  return (
    <ThemeProvider>
      <FiltersContainer>
        <Searchbar />
        <PlatformFilter />
        <CategoryFilter />
        <WatchlistButton />
      </FiltersContainer>
    </ThemeProvider>
  )
}

export default Filters