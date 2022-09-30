import React from 'react'
import { styled } from "@mui/system"
import PlatformFilter from './buttons/PlatformFilter'
import CategoryFilter from './buttons/CategoryFilter'
import ClearFilters from './buttons/ClearFilters'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Searchbar from '../components/Searchbar'

const Wrapper = styled("div")(({ theme }) => ({
  padding: "0px 10px 0px 14px",
}));

const FiltersContainer = styled("box")(({ theme }) => ({
  margin: "-2rem 0rem 1rem 0rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const Filters = () => {
  return (
    <ThemeProvider>
        <Wrapper>
            <FiltersContainer>
                <Searchbar/>
                <PlatformFilter/>
                <CategoryFilter/>
            </FiltersContainer>
        </Wrapper>
    </ThemeProvider>
  )
}

export default Filters