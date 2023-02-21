import React from 'react';
import { styled } from "@mui/system"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import FavoriteEventCard from "../components/FavoriteEventCard"
import { useEventsContext, useFavoritesContext } from '../components/ContextProvider';
import Image from 'next/image'
import Link from 'next/link'

const Wrapper = styled("div")(({ theme }) => ({ overflow: "hidden", padding: "0 0", background: "transparent", }));
const Main = styled(Grid)(({ theme }) => ({ color: "#ffffff", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", marginLeft: 0, marginRight: 0, }));
const Item = styled(Grid)(({ theme }) => ({ padding: '0em 1em 0em 1em', marginBottom: -16, width: 'calc(95% * (1/3) + 18px + 0px)', [theme.breakpoints.between('xs', 'sm')]: { flexGrow: '1', width: 'calc(100% * (1) + 0px + 0px)', "> div": {}, }, [theme.breakpoints.between('sm', 'md')]: { width: 'calc(100% * (1/2) + 0px + 0px)', "> div": {}, }, [theme.breakpoints.up('md')]: { width: 'calc(100% * (1/3) + 0px + 0px)', "> div": {}, }, }));
const EmptyStateContainer = styled(Grid)(({ theme }) => ({ color: "#ffffff", display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center", marginLeft: 0, marginRight: 0, marginTop: "15vh" }));
const LinkWrap = styled("a")(({ theme }) => ({ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0'}));

export default function Watchlist(props) {
  const eventsContext = useEventsContext()
  const favoritesContext = useFavoritesContext()

  const getFavoriteEvent = eventId => {
    for (let i = 0; i < eventsContext.length; i++) {
      if (eventsContext[i].id === eventId) return eventsContext[i]
    }
  }
  const favorties = () => {
    const arr = []
    for (let i = 0; i < eventsContext.length; i++) {
      if (favoritesContext.includes(eventsContext[i].id)) arr.push(eventsContext[i])
    }
    return arr
  }

  return (
    <Wrapper>
      {(!favoritesContext || favoritesContext.length == 0 || !eventsContext || eventsContext.length == 0 || favorties().length == 0) ?
        <EmptyStateContainer container>
          <Box position="relative" sx={{ width: { xs: "clamp(5rem, 50vw, 20rem)", sm: "clamp(5rem, 25vw, 12rem)" }, height: { xs: "clamp(5rem, 50vw, 20rem)", sm: "clamp(5rem, 25vw, 12rem)" }, cursor: "pointer" }}>
            <Link href="/">
              <LinkWrap>
                <Image src="/emptystate.svg" alt="empty-state" layout="fill" objectFit="contain" priority/>
              </LinkWrap>
            </Link>
          </Box>
          <Typography variant="h1" sx={{ fontSize: "clamp(30px, 3vw, 70px)" }}>So much empty….</Typography>
          <Typography variant="h2" sx={{ fontSize: "clamp(15px, 2vw, 30px)" }}>Favorite some events to get started</Typography>
        </EmptyStateContainer>
        :
        <Main container>
          {favorties().map((keyName, i) => (
            <Item item key={i}>
              <FavoriteEventCard item={keyName} />
            </Item>
          ))}
          {/* <button onClick={() => console.log(eventsContext[0])}>000</button> */}
        </Main>
      }
    </Wrapper>
  )
}