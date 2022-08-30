import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FavoriteButton from './buttons/FavoriteButton'

function createData(name, date, time, users) {
    return {
        name, 
        date,
        time, 
        users,
    };
}

const rows = [
  createData('Event1', "June 9th", "10:00 AM", 6),
  createData('Event2', "June 9th", "11:00 AM", 36),
  createData('Event3', "June 9th", "12:00 PM", 216),
  createData('Event4', "June 9th", "1:00 PM", 1296),
  createData('Event5', "June 9th", "1:00 PM", 7776),
  createData('Event6', "June 9th", "1:00 PM", 46656),
];

export default function EventsList() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 100 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{borderTop: "1px solid #2e2e2e"}}>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><FavoriteButton/></TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.users}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
