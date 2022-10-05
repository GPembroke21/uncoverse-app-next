import React from 'react'
import { styled } from "@mui/system"
import ProfileDropdown from './ProfileDropdown'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import GetPlats from '../src/requests/GetEvents'

const Wrapper = styled("div")(({ theme }) => ({
  width: "calc(100%)",
  padding: "0px 10px 0px 0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const LogoContainer = styled("div")(({ theme }) => ({
  margin: "0.5rem 0",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const Logo = styled("div")(({ theme }) => ({
  objectFit: "contain",
  marginLeft: "-0.1rem",
  marginRight: "-0.5rem",
}));

const RightContainer = styled("div")(({ theme }) => ({
  margin: "0.5rem 0.9rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const ConnectButton = styled("button")(({ theme }) => ({
  fontFamily: "Helvetica Neue",
  fontSize: "0.8rem",
  fontWeight: "500",
  textAlign: "center",
  color: "white",
  backgroundColor: "transparent",
  border: "1px solid white",
  borderRadius: "0.4rem",
  width: "7rem",
  padding: "0.46rem",
  cursor: "pointer",
  marginRight: "1rem",
  /*backgroundImage: "linear-gradient(60deg, #eb6134, #FFC312, #e600ff)",
  backgroundSize: '200%',
  transition: "0.4s",
  "&:hover": {
    backgroundPosition: "right",
  }*/
  "&:hover": {
    border: "1px solid #dd00ff",
    color: "#dd00ff",
  }
}));

const plats = GetPlats()

const Header = () => {
  return (
    <ThemeProvider>
      <Wrapper>
        <LogoContainer>
          <Logo>
            <IconButton disableRipple>
              <Link href="/">
                <Image src="/uv-logo.png" alt='Uncoverse Logo' width="30rem" height="30rem" />
              </Link>
            </IconButton>
          </Logo>
          <Image src="/beta.png" alt='Uncoverse Logo' width="30rem" height="15rem"
            onClick={() => console.log(plats)} />
        </LogoContainer>
        <RightContainer>
          <ConnectButton>Connect</ConnectButton>
          <ProfileDropdown />
        </RightContainer>
      </Wrapper>
    </ThemeProvider>
  )
}

export default Header