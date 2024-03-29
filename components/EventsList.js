import React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Backdrop } from "@mui/material";
import Image from 'next/image'
import FavoriteButton from './buttons/FavoriteButton'
import { platformLogos } from '../src/static/StaticVariables'
import InfoPane from './InfoPane'
import { useAppContext, useEventsContext, useFavoritesContext } from './ContextProvider'
import { animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { max } from 'moment/moment';

const currentTime = new Date();

function Row(props) {
  const { row } = props;
  const handleClick = () => {
    props.setInfoPaneInfoClick(row)
    props.handleInfoPaneOpen()
  }

  const dateTimeStart = new Date(row.dateTimeStart);
  const dateTimeEnd = new Date(row.dateTimeEnd);
  const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const dateStyled = (dateTimeStart < currentTime) ? "Active" : (formattedStartDate + ", " + formattedStartTime)
  const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ending " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)
  const platLogo = platformLogos[row.platformId]

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, "&:hover": { backgroundColor: (theme) => theme.palette.button.hover } }}>
        <TableCell component="th" scope="row" onClick={handleClick}>
          <Box position="relative" width="clamp(0.8rem, 1.8vw, 1.2rem)" height="clamp(0.8rem, 1.8vw, 1.2rem)" maxWidth="3rem" maxHeight="3rem" marginRight="-0.4rem">
            <Image src={platLogo} alt={row.platformId} layout="fill" objectFit="contain" unoptimized={true} />
          </Box>
        </TableCell>
        <TableCell align="left" onClick={handleClick} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.name}
        </TableCell>
        <TableCell align="left" onClick={handleClick} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {dateStyled}
        </TableCell>
        <TableCell align="left" onClick={handleClick} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.category.replace(/;/g, ',').substring(0,row.category.length-1)}
        </TableCell>
        <TableCell align="left" onClick={handleClick} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.totalAttendees}
        </TableCell>
        <TableCell align="left" onClick={handleClick} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          <a href={row.url} target="_blank" rel="noreferrer noopener">
            {row.locator}
          </a>
        </TableCell>
        <TableCell align="right">
          <FavoriteButton eventId={row.id} sx={{ cursor: 'pointer' }} />
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function EventsList() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => { setOpen(false); };
  const [infoPaneInfo, setInfoPaneInfo] = React.useState(null)

  const sortArray = (a, b) => {
    if (a.dateTimeStart < currentTime.toISOString()) a.totalAttendees > b.totalAttendees ? -1 : 1 
  }

  const eventsContext = useEventsContext().filter(array => array.dateTimeEnd > currentTime.toISOString()).sort((a,b) => a.dateTimeStart < b.dateTimeStart ? -1 : 1).sort((a, b) => sortArray(a, b))
  const filtersPlatformsContext = useAppContext().filtersPlatforms
  const filtersCategoriesContext = useAppContext().filtersCategories
  const filtersFavoritesContext = useAppContext().filtersFavorites
  const filtersSearchContext = useAppContext().filtersSearch
  const filtersCreatorsContext = useAppContext().filtersCreators
  const filtersActiveContext = useAppContext().filtersActive
  const favoritesContext = useFavoritesContext()



  const filteredArray = array => {
    // if (array.dateTimeEnd < currentTime.toISOString()) { return }
    if (array.parentEvent) return
    if (filtersSearchContext && filtersSearchContext.length !== 0) {
      if (array.name.toLowerCase().includes(filtersSearchContext)) { return array }
      else { return }
    }
    if (filtersActiveContext == "A" && array.dateTimeStart > currentTime.toISOString()) { return }
    if (filtersActiveContext == "U" && array.dateTimeStart < currentTime.toISOString()) { return }
    if (filtersCreatorsContext.length !== 0 && !filtersCreatorsContext.includes(array.createdByUser)) { return }
    if (filtersFavoritesContext && favoritesContext && !favoritesContext.includes(array.id)) return
    if (filtersPlatformsContext.length === 0 && filtersCategoriesContext.length === 0) {
      return array
    } else if (filtersPlatformsContext.length !== 0 && filtersCategoriesContext.length === 0) {
      if (filtersPlatformsContext.includes(array.platformId)) return array
    } else if (filtersPlatformsContext.length === 0 && filtersCategoriesContext.length !== 0) {
      const catArr = array.category.split(";")
      for (let i = 0; i < catArr.length; i++) { if (filtersCategoriesContext.includes(catArr[i].trim())) return array }
    } else if (filtersPlatformsContext.length !== 0 && filtersCategoriesContext.length !== 0) {
      if (filtersPlatformsContext.includes(array.platformId)) {
        const catArr = array.category.split(";")
        for (let i = 0; i < catArr.length; i++) { if (filtersCategoriesContext.includes(catArr[i].trim())) return array }
      }
    }
    if (filtersCreatorsContext.length !== 0 && filtersCreatorsContext.includes(array.createdByUser)) { return array }
  }

  const bind = useDrag(({ args: [index], down, movement: [mx, my] }) => {
    if (mx < -75) handleClose()
    if (!down && mx > 75) setInfoPaneInfo(priorValue => { return (eventsContext[Math.min(eventsContext.indexOf(priorValue) + 1, eventsContext.length - 1)]) })
  })

  const getAssociatedEvents = associatedEventsArray => {
    const arr = []
    for (let i = 0; i < eventsContext.length; i++) {
      if (associatedEventsArray.includes(eventsContext[i].id)) arr.push(eventsContext[i])
    }
    return arr
  }

  const setInfoPaneRow = rowId => {
    for (let i = 0; i < eventsContext.length; i++) {
      if (eventsContext[i].id == rowId) {
        setInfoPaneInfo(eventsContext[i])
        return
      }
    }
  }

  return (
    <TableContainer style={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 200, borderTop: "1px solid #2e2e2e", borderSpacing: "0px 0.1rem" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "none" }}>
            <TableCell style={{ width: "2%" }}></TableCell>
            <TableCell align="left" style={{ width: "35%" }}>Name</TableCell>
            <TableCell align="left" style={{ width: "15%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Date</TableCell>
            <TableCell align="left" style={{ width: "15%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Category</TableCell>
            <TableCell align="left" style={{ width: "4%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Users</TableCell>
            <TableCell align="left" style={{ width: "8%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Location</TableCell>
            <TableCell style={{ width: "2%" }}></TableCell>
          </TableRow>
        </TableHead>
        {(!eventsContext.length == 0) ?
          <TableBody sx={{ backgroundColor: "transparent" }}>
            {eventsContext
              .filter(array => filteredArray(array))
              // .sort((a, b) => a.dateTimeStart < b.dateTimeStart ? -1 : 1)
              .map((row, i) => (
                <Row
                  key={row.id}
                  row={row}
                  ind={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  setInfoPaneInfoClick={() => setInfoPaneInfo(row)}
                  handleInfoPaneOpen={() => setOpen(!open)}
                />
              ))}
          </TableBody> :
          <TableBody />
        }
      </Table>
      <animated.div {...bind()} >
        <Backdrop open={open} onClick={handleClose} />
        <InfoPane handleCloseFunction={handleClose} info={infoPaneInfo} openState={open} getAssociatedEvents={getAssociatedEvents} setInfoPaneRow={setInfoPaneRow} />
      </animated.div>
    </TableContainer>
  )
}