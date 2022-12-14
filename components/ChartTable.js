import React from 'react'
import { useState } from 'react'
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
  const [selected, setSelected] = useState(null)

  const handleSelectRow = (rowIndex) => {
    setSelected(rowIndex);
  }

  return (
    <ChartTable component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow selected={selected === 0} onClick={() => handleSelectRow(0)} sx={{height: "40px", "&.Mui-selected, &.Mui-selected:hover": {backgroundColor: "transparent"}}}>
            <TableCell sx={{fontWeight: 700}}>Platforms</TableCell>
            <TableCell align="right">Users</TableCell>
            <TableCell align="right">Events</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.name}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 } ,
                '&:last-child': { borderBottom: 'none' },
                "&:hover": {backgroundColor: (theme) => theme.palette.button.hover},
                cursor: "pointer",
                "&.Mui-selected, &.Mui-selected:hover": {
                  backgroundColor: "transparent",
                  "& > .MuiTableCell-root": {
                    color: "#dd00ff"
                  }
                }
              }}
              selected={selected === index + 1}
              onClick={() => handleSelectRow(index + 1)}
            >
              <TableCell component="th" scope="row">
                {row.platform}
              </TableCell>
              <TableCell align="right">{row.users}</TableCell>
              <TableCell align="right">{row.events}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartTable>
  );
}
