import * as React from 'react'
import {useEffect, useState, useCallback} from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import FavoriteButton from './buttons/FavoriteButton'
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from "@mui/material/Divider"

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} /*onClick={() => setOpen(!open)}*/>
        <TableCell component="th" scope="row" onClick={() => setOpen(!open)}>
          <Box position="relative" width="0.8rem" height="0.8rem" marginRight="-0.4rem">
            <Image src="/DCLD_logo.png" alt='DCLD Logo' layout="fill" objectFit="contain" />
          </Box>
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)}>{row.name}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)}>{row.date}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)}>{row.time}</TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ display: { xs: 'none', sm: 'block' } }}>
            {row.category}
        </TableCell>
        <TableCell align="right" onClick={() => setOpen(!open)}>{row.users}</TableCell>
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
            <Image src="/adbar2.jpg" alt='Adbar2' width="600rem" height="300rem" />
          </DialogContentText>
          <br />
          <DialogContentText sx={{ color: 'white' }}>
            {row.date}, {row.time}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.category}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.users}
          </DialogContentText>
          <Divider />
          <DialogContentText sx={{ color: 'white' }}>
            {row.location}
          </DialogContentText>
          <Divider />
          <br />
          <DialogContentText id="alert-dialog-slide-description" sx={{ color: 'white' }}>
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
  return (
    <TableContainer>
      <Table sx={{ minWidth: 200, borderTop: "1px solid #2e2e2e", borderSpacing: "0px 0.1rem" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: "none" }}>
            <TableCell style={{ width: "5%" }}></TableCell>
            <TableCell align="left" style={{ width: "30%" }}>Name</TableCell>
            <TableCell align="left" style={{ width: "20%" }}>Date</TableCell>
            <TableCell align="left" style={{ width: "18%" }}>Time</TableCell>
            <TableCell align="left" style={{ width: "12%" }} sx={{ display: { xs: 'none', sm: 'block' } }}>Category</TableCell>
            <TableCell align="right" style={{ width: "5%" }}>Users</TableCell>
            <TableCell style={{ width: "5%" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ backgroundColor: "black" }}>
          {rows.map((row) => (
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