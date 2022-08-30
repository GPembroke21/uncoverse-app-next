import * as React from 'react'
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

function createData(icon, name, date, category, attendees) {
    return {
        icon,
        name, 
        date, 
        category, 
        attendees,
        details: [
            {
              picture: 'img',
              location: '69, 420',
              description: 'an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers, an event for peens and peen lovers',
            },
        ], 
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} /*onClick={() => setOpen(!open)}*/>
            <TableCell component="th" scope="row" sx={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10}} onClick={() => setOpen(!open)}>
              <Box position="relative" width="2vw" height="2vw" marginRight="-0.4rem">
                <Image src="/DCLD_logo.png" alt='DCLD Logo' layout="fill" objectFit="contain"/>
              </Box>
            </TableCell>
            <TableCell align="left" onClick={() => setOpen(!open)}>{row.name}</TableCell>
            <TableCell align="left" onClick={() => setOpen(!open)}>{row.date}</TableCell>
            <TableCell align="right" onClick={() => setOpen(!open)}>{row.category}</TableCell>
            <TableCell align="right" onClick={() => setOpen(!open)}>{row.attendees}</TableCell>
            <TableCell sx={{borderBottomRightRadius: 10, borderTopRightRadius: 10}}>
              <FavoriteButton/>
            </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{borderBottomLeftRadius: 10, borderTopLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10}}>
            <Slide direction="left" in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="details">
                  <TableBody>
                    {row.details.map((detailsRow) => (
                      <TableRow key={detailsRow.picture} sx={{ backgroundColor: "rgba(40, 43, 47, 0.4)", borderBottom: "none" }}>
                        <Grid>
                            <TableCell component="th" scope="row">
                            {detailsRow.picture}
                            </TableCell>
                            <TableCell>{detailsRow.location}</TableCell>
                        </Grid>
                            <TableCell align="left">{detailsRow.description}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Slide>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
const rows = [
    createData("i", 'Event1', "June 9th, 10:00 AM", "A", 6),
    createData("i", 'Event2', "June 9th, 11:00 AM", "B", 36),
    createData("i", 'Event3', "June 9th, 12:00 PM", "C", 216),
];

export default function EventsList2() {
    return (
      <TableContainer>
        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent= "flex-start"
          paddingLeft={0}
          wrap="nowrap"
          marginTop="0.2rem"
          >
              <Image src="/ActiveEvents.png" alt="" width="13rem" height="13rem"/>
              <Typography variant="h5" color="white" fontWeight="bold" marginLeft="0.5rem">Active</Typography>
          </Grid>
          <Table sx={{ minWidth: 200, borderCollapse: "separate", borderSpacing: "0px 0.1rem" }} aria-label="simple table">
            <colgroup>
                <col width="2%" />
                <col width="28%" />
                <col width="30%" />
                <col width="8%" />
                <col width="5%" />
                <col width="2%" />
            </colgroup>
              <TableHead>
                  <TableRow sx={{ borderBottom: "none" }}>
                      <TableCell></TableCell>
                      <TableCell align="left">Name</TableCell>
                      <TableCell align="left">Date</TableCell>
                      <TableCell align="right">Category</TableCell>
                      <TableCell align="right">Users</TableCell>
                      <TableCell></TableCell>
                  </TableRow>
              </TableHead>
              <TableBody sx={{ backgroundColor: "rgba(40, 43, 47, 0.4)"}}>  
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

