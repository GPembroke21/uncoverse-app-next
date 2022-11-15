import React from 'react'
import { styled } from "@mui/system"
// import ProfileButton from './buttons/ProfileButton'
import Button from '@mui/material/Button'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import AuthPopup from './AuthPopup'
import WatchlistButton from './buttons/WatchlistButton'
import { Auth } from 'aws-amplify'
import { useLoginContext, useFiltersContextUpdate, useFiltersPlatformsContext, useFiltersCategoriesContext, useFiltersSearchContext, useAppContext } from './ContextProvider'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between"}))
const LogoContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const Logo = styled("div")(({ theme }) => ({ objectFit: "contain", marginLeft: "-0.1rem", marginRight: "-0.5rem"}))
const RightContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0.9rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const ConnectButtonStyled = styled("button")(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white",
  backgroundColor: "transparent", border: "1px solid white", borderRadius: "0.4rem", width: "7rem", padding: "0.46rem", cursor: "pointer", marginRight: '-10px',
  "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" }}));
const ProfileButton = styled("button")(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "black", border: "0px solid #282b2f", borderRadius: "0.4rem", width: "2rem", padding: "0.46rem", cursor: "pointer", backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)", backgroundSize: '200%', transition: "0.4s", "&:hover": { backgroundPosition: "right", } }))

const Header = (props) => {
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const loginCreds = useAppContext().loginCreds
  const searchFilter = useFiltersSearchContext()

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
          {/* <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={eventsUpdate}/> */}
          {/* <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => clearFilters.clearFilters()}/> */}
          <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => console.log("")} />
        </LogoContainer>
        <RightContainer>
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
                  G
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