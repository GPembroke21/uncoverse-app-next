import React from 'react'
import { styled } from "@mui/system"
import ProfileDropdown from './buttons/ProfileDropdown'
import ProfileButton from './buttons/ProfileButton'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import AuthPopup from './AuthPopup'
import { signOut } from '../src/auth/SignOut'
import { favoriteEvents } from '../src/static/StaticVariables'
import WatchlistButton from './buttons/WatchlistButton'
import Typography from '@mui/material/Typography'
import { favoriteEventsArray } from '../src/static/StaticVariables'

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

const ConnectButtonStyled = styled("button")(({ theme }) => ({
  fontFamily: "Inter",
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
  // marginRight: "1rem",
  marginRight: '-10px',
  "&:hover": {
    border: "1px solid #dd00ff",
    color: "#dd00ff",
  }
}));


const Header = (props) => {
  const [headerOpen, setHeaderOpen] = React.useState(false)

  return (
    <ThemeProvider>
      <Wrapper>
        <LogoContainer>
          <Link href="/" passHref>
            <Logo>
              <IconButton disableRipple>
                <Image src="/uv-logo.svg" alt='Uncoverse Logo' width="30rem" height="30rem" />
              </IconButton>
            </Logo>
          </Link>
          <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => console.log(favoriteEventsArray)}/>
        </LogoContainer>
        <RightContainer>
          {!props.loginCreds.signedIn ?
            <div>
              <ConnectButtonStyled onClick={() => setHeaderOpen(!headerOpen)}>Connect</ConnectButtonStyled>
              <AuthPopup open={headerOpen} setOpen={() => setHeaderOpen(!headerOpen)} />
            </div>
            :
            <div>
              <WatchlistButton/>
              {/* <Typography variant='h4' sx={{ color: '#40454d', fontWeight: '700' }} >&nbsp;&nbsp;|&nbsp;&nbsp;</Typography> */}
              <ProfileButton confirmClosed={() => setHeaderOpen(false)}/>
            </div>
          }
        </RightContainer>
      </Wrapper>
    </ThemeProvider >
  )
}

export default Header