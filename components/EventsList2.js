import * as React from 'react'
import {useEffect, useState, useCallback} from 'react'
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
import TableSortLabel from '@mui/material/TableSortLabel'
import FilterListIcon from '@mui/icons-material/FilterList'
import { styled } from "@mui/system"
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

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
  const imageLoader=({src})=>`${row.image}`;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const date = new Date(row.start_at);
const formattedDate = date.toLocaleDateString('en-US', {
  day: 'numeric', month: 'short'
})

const time = new Date(row.start_at);
const formattedTime = date.toLocaleTimeString('en-US', {
  timeZone: 'EST', timezoneName: 'short', timeStyle: 'short'
})

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <Box position="relative" width="0.8rem" height="0.8rem" marginRight="-0.4rem">
            <Image src="/DCLD_logo.png" alt='DCLD Logo' layout="fill" objectFit="contain" />
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
        <TableCell align="left" onClick={() => setOpen(!open)}>{formattedDate}, {formattedTime}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)}>{row.categories}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' } }}>
          {row.total_attendees}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'revert' } }}>
          {row.coordinates}
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
            {row.start_at}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.categories}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.total_attendees}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.coordinates}
          </DialogContentText>
          <Divider />
          <br />
          <DialogContentText 
            id="alert-dialog-slide-description" 
            sx={{ fontSize: '1rem', color: 'white' }} 
            style={{maxHeight: 200, overflow: 'auto'}}>
              {row.description}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

const rows = [
  createData('Event1', "June 9th", "10:00 AM", 6, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event2', "June 9th", "11:00 AM", 36, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event3', "June 9th", "12:00 PM", 216, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event4', "June 9th", "1:00 PM", 1296, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event5', "June 9th", "2:00 PM", 7776, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event6', "June 9th", "3:00 PM", 46656, "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
  createData('Event7', "June 9th", "4:00 PM", "279K", "Circle Jerk", "img", "Decentraland 69, 420", "Description goes here"),
];

export default function EventsList2() {

  const [eventlist, setEventList] = useState([]);

  const getFunction = useCallback(async () => {
      try {
          const response = await fetch('https://events.decentraland.org/api/events')
          const events = await response.json()
          return setEventList(events.data)
      } catch (error) {
          console.log("Error loading API:", error)
      }
  }, [])

  useEffect(() => {
      getFunction()
  }, [getFunction])

  return (
    <TableContainer style={{overflowX: 'auto'}}>
      <Table sx={{ minWidth: 200, borderTop: "1px solid #2e2e2e", borderSpacing: "0px 0.1rem"}} aria-label="simple table">
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
        <TableBody sx={{ backgroundColor: "black" }}>
          {eventlist.map((row) => (
            <Row
              key={row.name}
              row={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}