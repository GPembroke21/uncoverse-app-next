import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import InputAdornment from '@mui/material/InputAdornment';

export default function CustomizedInputBase() {
  return (
    // <Paper
    //   component="form"
    //   sx={{ 
    //     mt: "3.5px", 
    //     mr: "10px", 
    //     display: 'flex', 
    //     alignItems: 'center', 
    //     // width: '10em', 
    //     // height: '1em' 
    //   }}
    // >
      <InputBase
        sx={{ 
          flex: 1, 
          color: "white", 
          fontSize: "clamp(8px, 1vw, 14px)", 
          backgroundColor: "#252425", 
          borderRadius: "7px", 
          height: "2.5em",
          width: "11em",
          maxWidth: '500px',
          // mt: "3px",
          marginRight: "10px",
          paddingLeft: 1.5,
        }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={ 
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ width: '0.5em', height: '0.5em' }}/>
          </IconButton>
        }
      />
    // </Paper>
  );
}