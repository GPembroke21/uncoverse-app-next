import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData('Event 1', 'Jan 8, 11:00 PM'),
  createData('Event 2', 'Jan 9, 12:00 PM'),
  createData('Event 3', 'Jan 10, 1:00 PM'),
  createData('Event 4', 'Jan 11, 2:00 PM'),
  createData('Event 5', 'Jan 12, 3:00 PM'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: {xs: "50%", sm: "75%"} }}>Name</TableCell>
            <TableCell align="left" sx={{ width: {xs: "50%", sm: "75%"} }}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}