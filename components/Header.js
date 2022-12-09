import React from 'react'
import { styled } from "@mui/system"
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import Button from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import AuthPopup from './AuthPopup'
import WatchlistButton from './buttons/WatchlistButton'
import AnalyticsButton from './buttons/AnalyticsButton'
import { useAppContext } from './ContextProvider'
import GetUser from '../src/auth/GetUser'
import Searchbar from './Searchbar'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between"}))
const LogoContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const Logo = styled("div")(({ theme }) => ({ objectFit: "contain", marginLeft: "-0.1rem", marginRight: "-0.5rem"}))
const RightContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0.9rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const ConnectButtonStyled = styled(Button)(({ theme }) => ({
  color: theme.palette.button.text, 
  backgroundColor: theme.palette.button.main, 
  fontSize: "clamp(8px, 1vw, 12px)", 
  borderRadius: '6px',
  padding: "0.46rem",
  marginRight: '-10px',
  width: "11em",
  height: "2rem",
  "&:hover": {
      color: theme.palette.button.hovertext,
      backgroundColor: theme.palette.button.hover
  },
  "&:active": {
    color: theme.palette.button.hovertext,
    backgroundColor: theme.palette.button.active
  },
}));
const ProfileButton = styled("button")(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "black", border: "0px solid #282b2f", borderRadius: "0.4rem", width: "2rem", padding: "0.46rem", cursor: "pointer", backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)", backgroundSize: '200%', transition: "0.4s", "&:hover": { backgroundPosition: "right", } }))

const Header = (props) => {
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const loginCreds = useAppContext().loginCreds
  const appContext = useAppContext()
  const user = GetUser(loginCreds)

  return (
    <ThemeProvider>
      <Wrapper>
        <LogoContainer>
          <Link href="/" passHref>
            <Logo>
              <IconButton disableRipple sx={{'&:hover': {backgroundColor: 'transparent'}}}>
                <Image src="/uv-logo.svg" alt='Uncoverse Logo' width="30rem" height="30rem" />
              </IconButton>
            </Logo>
          </Link>
          <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => console.log("")} />
        </LogoContainer>
        <RightContainer>
          <Searchbar/>
          {/* <AnalyticsButton/> */}
          {!loginCreds.signedIn ?
            <div>
              <ConnectButtonStyled onClick={() => setHeaderOpen(!headerOpen)}>Connect</ConnectButtonStyled>
              <AuthPopup open={headerOpen} setOpen={() => setHeaderOpen(!headerOpen)} />
            </div>
            :
            <div>
              <WatchlistButton />
              <Link href="/profile">
                <ProfileButton disableRipple id="basic-button" sx={{ marginRight: "-9px" }} style={{ backgroundColor: 'transparent' }} onClick={() => setHeaderOpen(false)}>
                  {(user && user.attributes.email) ? user.attributes.email.charAt(0).toUpperCase() : "G"}
                </ProfileButton>
              </Link>
            </div>
          }
        </RightContainer>
      </Wrapper>
    </ThemeProvider >
  )
}

export default Header