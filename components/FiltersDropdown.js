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
import CategoryFilter from './buttons/CategoryFilter'
import PlatformFilter from './buttons/PlatformFilter'

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

const Header = () => {
  return (
    <ThemeProvider>
    <Wrapper>
    <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
        <FiltersContainer>
            <CategoryFilter/>
            <PlatformFilter/>
        </FiltersContainer>
    </Wrapper>
    </ThemeProvider>
  )
}

export default Header