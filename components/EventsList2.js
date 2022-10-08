import * as React from 'react'
import { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
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
import GetEvents from '../src/requests/GetEvents'
import { platformLogos } from '../src/static/StaticVariables'

function createData(name, date, time, users, category, image, location, description) {
  return {
    name,
    date,
    time,
    users,
    category,
    image,
    location,
    description,
  };
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const imageLoader = ({ src }) => `${row.image}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(props)
  const date = new Date(row.dateTimeStart);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric', month: 'short'
  })

  const time = new Date(row.dateTimeStart);
  const formattedTime = date.toLocaleTimeString('en-US', {
    timeZone: 'EST', timezoneName: 'short', timeStyle: 'short'
  })

  const platLogo = platformLogos[row.platformId]

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <Box position="relative" width="max(1.8vw, 0.8rem)" height="max(1.8vw, 0.8rem)" maxWidth="3rem" maxHeight="3rem" marginRight="-0.4rem">
            <Image src={platLogo} alt={row.platformId} layout="fill" objectFit="contain" />
          </Box>
        </TableCell>
        <TableCell
          align="left"
          onClick={() => setOpen(!open)}
          sx={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            // height: '3rem',
            maxWidth: '1rem',
            // display: "-webkit-box",
            // "-webkit-box-orient": "vertical",
            // "-webkit-line-clamp": "2",
            overflow: 'hidden',
            // lineHeight: 'auto',
            // maxHeight: '10rem',
          }}
        >
          {row.name}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden' }}>
          {formattedDate}, {formattedTime}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden' }}>
          {row.category}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden' }}>
          {row.totalAttendees}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' }, whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden' }}>
          <a href={row.url} target="_blank" rel="noreferrer noopener">
            {row.locator}
          </a>
        </TableCell>
        <TableCell align="right">
          <FavoriteButton />
        </TableCell>
      </TableRow>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          opacity: "100",
          backgroundColor: "black",
          width: '100vw',
          height: '100vh'
        }}
      >
        <DialogTitle sx={{ fontSize: '20px' }}>{row.name}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'white' }}>
            <Image loader={imageLoader} src={row.image} width="600rem" height="300rem" />
          </DialogContentText>
          <br />
          <DialogContentText sx={{ color: 'white' }}>
            <Image src="/category.svg" alt='Category' width="12rem" height="12rem"/>
            {formattedDate}, {formattedTime}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.category}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.totalAttendees}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            <a href={row.url} target="_blank" rel="noreferrer noopener">
              {row.locator}
            </a>
          </DialogContentText>
          <Divider />
          <br />
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{ fontSize: '1rem', color: 'white' }}
            style={{ maxHeight: 200, overflow: 'auto' }}>
            {row.description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default function EventsList2() {

  // const [eventList, setEventList] = useState([]);

  // const getFunction = useCallback(async () => {
  //     try {
  //         const response = await fetch('https://events.decentraland.org/api/events')
  //         const events = await response.json()
  //         return setEventList(events.data)
  //     } catch (error) {
  //         console.log("Error loading API:", error)
  //     }
  // }, [])

  // useEffect(() => {
  //     getFunction()
  // }, [getFunction])


  const eventList = GetEvents()


  return (
    <TableContainer style={{ overflowX: 'auto' }}>
      <Table sx={{ minWidth: 200, borderTop: "1px solid #2e2e2e", borderSpacing: "0px 0.1rem" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "none" }}>
            <TableCell style={{ width: "2%" }}></TableCell>
            <TableCell align="left" style={{ width: "35%" }}>Name</TableCell>
            <TableCell align="left" style={{ width: "15%" }}>Date</TableCell>
            <TableCell align="left" style={{ width: "5%" }}>Category</TableCell>
            <TableCell align="left" style={{ width: "4%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Users</TableCell>
            <TableCell align="left" style={{ width: "8%" }} sx={{ display: { xs: 'none', sm: 'revert' } }}>Location</TableCell>
            <TableCell style={{ width: "2%" }}></TableCell>
          </TableRow>
        </TableHead>
        {eventList.data ?
          <TableBody sx={{ backgroundColor: "black" }}>
            {eventList.data
              .sort((a, b) => a.dateTimeStart < b.dateTimeStart ? -1 : 1)
              .map((row) => (
              <Row
                key={row.id}
                row={row}
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