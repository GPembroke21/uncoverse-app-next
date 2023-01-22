import React from 'react'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Typography from "@mui/material/Typography"
import { useEventsContext, useAppContext, useAppContextUpdate } from './ContextProvider'
import AnalyticsButton from './buttons/AnalyticsButton'
import Link from 'next/link'

const Wrapper = styled("div")(({ theme }) => ({ width: "calc(100%)", padding: "0px 10px 0px 0px", display: "flex", alignItems: "center", justifyContent: "space-between" }));
const TickerContainer = styled("div")(({ theme }) => ({ margin: "0.5rem 1rem", display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center", cursor: 'default' }));
const currentTime = new Date();

const Header = () => {
  const eventsContext = useEventsContext()
  const appContextUpdate = useAppContextUpdate()
  const activeUpcomingContext = useAppContext().filtersActiveUpcoming
  const activeEvents = eventsContext.filter(array => { if ((array.dateTimeEnd > currentTime.toISOString()) && (array.dateTimeStart < currentTime.toISOString())) { return array } }).length
  const allEvents = eventsContext.filter(array => { if ((array.dateTimeEnd > currentTime.toISOString())) { return array } }).length


  const handleClick = item => activeUpcomingContext == item ? appContextUpdate.updateActiveUpcoming("") : appContextUpdate.updateActiveUpcoming(item)
  const activeStyle = activeUpcomingContext == "A" ? { color: "#dd00ff", cursor: 'pointer' } : { color: "white", cursor: 'pointer' }
  const upcomingStyle = activeUpcomingContext == "U" ? { color: "#dd00ff", paddingLeft: "1rem", cursor: 'pointer' } : { color: "white", paddingLeft: "1rem", cursor: 'pointer' }

  return (
    <ThemeProvider>
      <Wrapper>
        <TickerContainer>
          <Typography variant="h4" onClick={() => handleClick("A")} style={activeStyle}>Active Events:</Typography>
          <Typography variant="h4" sx={{ color: "#5794f7" }}>&nbsp;{activeEvents}</Typography>
          <Typography variant="h4" onClick={() => handleClick("U")} style={upcomingStyle}>Upcoming Events:</Typography>
          <Typography variant="h4" sx={{ color: "#5794f7" }}>&nbsp;{allEvents - activeEvents}</Typography>
        </TickerContainer>
        <AnalyticsButton />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Header