import React from 'react'
import { styled } from "@mui/system"
import ProfileButton from './buttons/ProfileButton'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import AuthPopup from './AuthPopup'
import WatchlistButton from './buttons/WatchlistButton'
import { Auth } from 'aws-amplify'
import { useLoginContext, useEventsContext, useEventsContextUpdate, useFavoritesContext, useFavoritesContextUpdate, useFiltersContext } from './ContextProvider'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between"}))
const LogoContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const Logo = styled("div")(({ theme }) => ({ objectFit: "contain", marginLeft: "-0.1rem", marginRight: "-0.5rem"}))
const RightContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0.9rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const ConnectButtonStyled = styled("button")(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white",
  backgroundColor: "transparent", border: "1px solid white", borderRadius: "0.4rem", width: "7rem", padding: "0.46rem", cursor: "pointer", marginRight: '-10px',
  "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" }}));


const Header = (props) => {
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const loginCreds = useLoginContext()
  const filtersContext = useFiltersContext()
  // const eventsDeets = useEventsContext()
  // const eventsUpdate = useEventsContextUpdate()
  // const favorites = useFavoritesContext()
  // const printCreds = () => Auth.currentCredentials().then(credentials => console.log(credentials))

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
          {/* <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={eventsUpdate}/> */}
          <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => console.log(filtersContext)}/>
        </LogoContainer>
        <RightContainer>
          {!loginCreds.signedIn ?
            <div>
              <ConnectButtonStyled onClick={() => setHeaderOpen(!headerOpen)}>Connect</ConnectButtonStyled>
              <AuthPopup open={headerOpen} setOpen={() => setHeaderOpen(!headerOpen)} />
            </div>
            :
            <div>
              <WatchlistButton/>
              <ProfileButton confirmClosed={() => setHeaderOpen(false)}/>
            </div> 
          }
        </RightContainer>
      </Wrapper>
    </ThemeProvider >
  )
}

export default Header