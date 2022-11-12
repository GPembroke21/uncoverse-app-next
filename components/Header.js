import React from 'react'
import { styled } from "@mui/system"
import ProfileButton from './buttons/ProfileButton'
import Button from '@mui/material/Button'
import Image from 'next/image'
import IconButton from '@mui/material/Button'
import ThemeProvider from "../Theme"
import Link from 'next/link'
import AuthPopup from './AuthPopup'
import WatchlistButton from './buttons/WatchlistButton'
import { Auth } from 'aws-amplify'
import { useLoginContext, useFiltersContextUpdate, useFiltersPlatformsContext, useFiltersCategoriesContext, useFiltersSearchContext } from './ContextProvider'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between"}))
const LogoContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const Logo = styled("div")(({ theme }) => ({ objectFit: "contain", marginLeft: "-0.1rem", marginRight: "-0.5rem"}))
const RightContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 0.9rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center"}))
const ConnectButtonStyled = styled(Button)(({ theme }) => ({ 
  fontSize: "clamp(8px, 1vw, 14px)",  
  fontWeight: "500", 
  textAlign: "center", 
  color: "#f5f3f7", 
  backgroundColor: '#21172a', 
  borderRadius: "0.4rem", 
  width: "7rem", 
  padding: "0.46rem", 
  cursor: "pointer", 
  marginRight: '-10px',
  "&:hover": {
    color: "#dd00ff",
    backgroundColor: "#1c1425"
  },
  "&:active": {
    color: "#dd00ff",
    backgroundColor: "#120C18"
  },
}));


const Header = (props) => {
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const loginCreds = useLoginContext()
  const filtersContext = useFiltersPlatformsContext()
  const catContext = useFiltersCategoriesContext()
  // const eventsDeets = useEventsContext()
  const clearFilters = useFiltersContextUpdate()
  // const favorites = useFavoritesContext()
  // const printCreds = () => Auth.currentCredentials().then(credentials => console.log(credentials))
  const searchFilter = useFiltersSearchContext()

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
          {/* <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => clearFilters.clearFilters()}/> */}
          <Image src="/beta.svg" alt='Beta' width="30rem" height="15rem" onClick={() => console.log(searchFilter)}/>
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