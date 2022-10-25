import * as React from 'react'
import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Image from 'next/image'
import FavoriteButton from './buttons/FavoriteButton'
import Slide from '@mui/material/Slide'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Divider from "@mui/material/Divider"
import { platformLogos } from '../src/static/StaticVariables'
import { styled } from "@mui/system"
import InfopaneButtons from "./buttons/InfopaneButtons"
import InfoPane from './InfoPane'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const imageLoader = ({ src }) => `${row.image}`;
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => { setOpen(false); };

  const currentTime = new Date();
  const dateTimeStart = new Date(row.dateTimeStart);
  const dateTimeEnd = new Date(row.dateTimeEnd);
  const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedEndDate = dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const dateStyled = formattedStartDate + ", " + { formattedStartTime }

  // if (dateTimeStart > currentTime) { console.log ("Upcoming", row.name, dateTimeStart, currentTime)}

  const platLogo = platformLogos[row.platformId]

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <Box position="relative" width="clamp(0.8rem, 1.8vw, 1.2rem)" height="clamp(0.8rem, 1.8vw, 1.2rem)" maxWidth="3rem" maxHeight="3rem" marginRight="-0.4rem">
            <Image src={platLogo} alt={row.platformId} layout="fill" objectFit="contain" unoptimized={true} />
          </Box>
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          maxWidth: '1rem',
          overflow: 'hidden',
          cursor: 'pointer'
        }}
        >
          {row.name}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden', cursor: 'pointer' }}>
          {formattedStartDate}, {formattedStartTime}
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
          <FavoriteButton eventId={row.id} ind={props.ind} sx={{ cursor: 'pointer' }} />
        </TableCell>
      </TableRow>

      <InfoPane handleCloseFunction={handleClose} row={row} dateStyled={dateStyled} openState={open} />
    </React.Fragment>
  );
}

export default function EventsList2(props) {

  // const eventList = GetEvents()

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
        {props.eventList.data ?
          <TableBody sx={{ backgroundColor: "transparent" }}>
            {props.eventList.data
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