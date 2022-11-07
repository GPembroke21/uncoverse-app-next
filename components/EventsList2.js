import * as React from 'react'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Image from 'next/image'
import FavoriteButton from './buttons/FavoriteButton'
import { platformLogos } from '../src/static/StaticVariables'
import InfoPane from './InfoPane'
import { useFiltersPlatformsContext, useEventsContext, useFiltersCategoriesContext, useFavoritesContext, useFiltersFavoritesContext, useFiltersSearchContext } from './ContextProvider'

const currentTime = new Date();

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => { setOpen(false); };


  const dateTimeStart = new Date(row.dateTimeStart);
  const dateTimeEnd = new Date(row.dateTimeEnd);
  const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const dateStyled = (dateTimeStart < currentTime) ? "Active" : (formattedStartDate + ", " + formattedStartTime)
  const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ending " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)

  // if (dateTimeStart > currentTime) { console.log ("Upcoming", row.name, dateTimeStart, currentTime)}

  const platLogo = platformLogos[row.platformId]
  const favoritesBtn = <FavoriteButton eventId={row.id} sx={{ cursor: 'pointer' }} />

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <Box position="relative" width="clamp(0.8rem, 1.8vw, 1.2rem)" height="clamp(0.8rem, 1.8vw, 1.2rem)" maxWidth="3rem" maxHeight="3rem" marginRight="-0.4rem">
            <Image src={platLogo} alt={row.platformId} layout="fill" objectFit="contain" unoptimized={true} />
          </Box>
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.name}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {dateStyled}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.category}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {row.totalAttendees}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          <a href={row.url} target="_blank" rel="noreferrer noopener">
            {row.locator}
          </a>
        </TableCell>
        <TableCell align="right">
          {favoritesBtn}
        </TableCell>
      </TableRow>
      <InfoPane handleCloseFunction={handleClose} row={row} dateStyled={dateStyledInfo} openState={open} favoritesBtn={favoritesBtn} />
    </React.Fragment>
  );
}

export default function EventsList2() {
  const eventsContext = useEventsContext()
  const filtersPlatformsContext = useFiltersPlatformsContext()
  const filtersCategoriesContext = useFiltersCategoriesContext()
  const filtersFavoritesContext = useFiltersFavoritesContext()
  const filtersSearchContext = useFiltersSearchContext()
  const favoritesContext = useFavoritesContext()

  const filteredArray = array => {
    if (filtersSearchContext && filtersSearchContext.length !== 0) {
      if (array.name.toLowerCase().includes(filtersSearchContext)) { return array}
      else { return }
    }
    if (filtersFavoritesContext && favoritesContext && !favoritesContext.includes(array.id)) return
    if (array.dateTimeEnd < currentTime.toISOString()) { return }
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
  }

  return (
    <TableContainer style={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 200, borderTop: "1px solid #2e2e2e", borderSpacing: "0px 0.1rem" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "none" }}>
            <TableCell style={{ width: "2%" }}></TableCell>
            <TableCell align="left" style={{ width: "35%" }}>Name</TableCell>
            <TableCell align="left" style={{ width: "15%" }}>Date</TableCell>
            <TableCell align="left" style={{ width: "15%" }}>Category</TableCell>
            <TableCell align="left" style={{ width: "4%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Users</TableCell>
            <TableCell align="left" style={{ width: "8%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Location</TableCell>
            <TableCell style={{ width: "2%" }}></TableCell>
          </TableRow>
        </TableHead>
        {(!eventsContext.length == 0) ?
          <TableBody sx={{ backgroundColor: "transparent" }}>
            {eventsContext
              .filter(array => filteredArray(array))
              .sort((a, b) => a.dateTimeStart < b.dateTimeStart ? -1 : 1)
              .map((row, i) => (
                <Row
                  key={row.id}
                  row={row}
                  ind={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                />
              ))}
          </TableBody> :
          <TableBody />
        }
      </Table>
    </TableContainer>
  )
}