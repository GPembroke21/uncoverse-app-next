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

const ChartTable = styled(TableContainer)(({ theme }) => ({ margin: "0rem 0rem", padding: "0px 0px" }));

export default function BasicTable(props) {
  // const [selected, setSelected] = useState(activeData.showArray)

  const handleSelectRow = rowId => {
    if (props.activeData.showArray.length === 5 && !props.activeData.showArray.includes(rowId)) {
      // alert('Maximum of 5 items can be selected.');
      return;
    } else if (props.activeData.showArray.length === 1 && props.activeData.showArray.includes(rowId)) {
      // alert('Min of 1 item must be selected.');
      return;
    } else if (props.activeData.showArray.includes(rowId)) {
      props.handleSelect(props.activeData.showArray.filter(item => item !== rowId))
    } else {
      props.handleSelect([...props.activeData.showArray, rowId])
    }
  }

  return (
    <ChartTable component={Paper} elevation={0}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow onClick={() => handleSelectRow(0)} sx={{ backgroundColor: "#21172a", height: "40px", "&.Mui-selected, &.Mui-selected:hover": { backgroundColor: "transparent" } }}>
            <TableCell sx={{ fontWeight: 700, paddingLeft: "12px" }}>Platforms</TableCell>
            <TableCell align="right" sx={{ fontWeight: 700, paddingRight: "12px" }}>Users</TableCell>
            {/* <TableCell align="right" sx={{fontWeight: 700, paddingRight: "12px"}}>Events</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:last-child': { borderBottom: 'none' },
                "&:hover": { backgroundColor: (theme) => theme.palette.button.hover },
                cursor: "pointer",
                "&.Mui-selected, &.Mui-selected:hover": {
                  backgroundColor: "transparent",
                  "& > .MuiTableCell-root": {
                    color: row.color,
                    fontWeight: 700,
                  }
                }
              }}
              selected={props.activeData.showArray.includes(row.id)}
              onClick={() => handleSelectRow(row.id)}
            >
              <TableCell component="th" scope="row" sx={{ borderBottom: "1px solid #40454d", paddingLeft: "12px" }}>
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{ borderBottom: "1px solid #40454d", paddingRight: "12px" }}>{row.users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</TableCell>
              {/* <TableCell align="right" sx={{borderBottom: "1px solid #40454d", paddingRight: "12px"}}>{row.events}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartTable>
  );
}