import * as React from 'react';
import { styled } from "@mui/system"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ChartTable = styled(TableContainer)(({ theme }) => ({
    margin: "0rem 0 1rem 0",
    border: "1px solid #2e2e2e",
    borderRadius: "10px",
  }));

function createData(platform, events, users) {
  return { platform, events, users };
}

const rows = [
  createData('Decentraland', 159, "36k"),
  createData('Sandbox', 237, "30k"),
  createData('Somnium', 262, "24k"),
  createData('Voxels', 305, "18"),
];

export default function BasicTable() {
  return (
    <ChartTable component={Paper}>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow sx={{height: "40px"}}>
            <TableCell sx={{fontWeight: 700}}>Platforms</TableCell>
            <TableCell align="right">Events</TableCell>
            <TableCell align="right">Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 } ,
                "&:hover": {backgroundColor: (theme) => theme.palette.button.hover},
                cursor: "pointer"
            }}
            >
              <TableCell component="th" scope="row">
                {row.platform}
              </TableCell>
              <TableCell align="right">{row.events}</TableCell>
              <TableCell align="right">{row.users}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartTable>
  );
}
