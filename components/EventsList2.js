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
import GetEvents from '../src/requests/GetEvents'
import { platformLogos } from '../src/static/StaticVariables'
import { styled } from "@mui/system"
import InfopaneButtons from "./buttons/InfopaneButtons"

const InfopaneRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const InfopaneInfo = styled(Grid)(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  marginTop: '15px',
  padding: '5px 10px'
}));

const InfopaneDescription = styled(Grid)(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  marginTop: '15px',
  padding: '5px 10px',
  // maxHeight: '100%',
}));

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
        }}
        >
          {row.name}
        </TableCell>
        <TableCell align="left" onClick={() => setOpen(!open)} sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '1rem', overflow: 'hidden' }}>
          {formattedStartDate}, {formattedStartTime}
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
          <FavoriteButton eventId={row.id} ind={props.ind}/>
        </TableCell>
      </TableRow>


      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        direction="column"
        sx={{
          opacity: "100",
          backgroundColor: "black",
          width: { xs: '100vw', sm: '75vw', md: '50vw', lg: '50vw', xl: '25vw' },
          maxWidth: { xs: '100vw', sm: '1000px' },
          height: '100vh',
          borderRight: '2px solid #2e2e2e',
        }}
      // PaperProps={{ sx: { position: "fixed", top: 0, m: 0 } }}
        PaperProps={{ sx: {margin: { xs: '24px 24px', sm: '0px 24px' }} }}
      >
        <DialogContent sx={{ fontSize: '10px', color: 'white', mb: '-34px', mt: '-10px' }}>Metaverse_name</DialogContent>
        <DialogTitle sx={{ fontSize: '20px', fontWeight: 'bold', mb: '-5px', lineHeight: '100%' }}>{row.name}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: '10px' }}>
            <Image loader={imageLoader} src={row.image} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px' }} />
          </DialogContentText>
          <InfopaneButtons/>
          {/* <br /> */}
          <InfopaneInfo>
          <DialogContentText component={'span'} sx={{mt: '15px' }}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/date.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {formattedStartDate}, {formattedStartTime}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.category}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.totalAttendees}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/location.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              <a href={row.url} target="_blank" rel="noreferrer noopener">
                {row.locator}
              </a>
            </InfopaneRow>
          </DialogContentText>
          </InfopaneInfo>
          {/* <br /> */}
          <InfopaneDescription>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ lineHeight: '150%'}}
              style={{ maxHeight: 60, overflow: 'auto' }}>
              {row.description}
            </DialogContentText>
          </InfopaneDescription>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}

export default function EventsList2(props) {
  
  // const eventList = GetEvents()
  
  return (
    <TableContainer style={{ overflowX: 'auto' }}> <button onClick={() => console.log(props)}></button>
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
          <TableBody sx={{ backgroundColor: "black" }}>
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