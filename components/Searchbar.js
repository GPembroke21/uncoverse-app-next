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
    <Paper
      component="form"
      sx={{ mt: "4px", display: 'flex', alignItems: 'center', width: 200, height: 10 }}
    >
      <InputBase
        sx={{ flex: 1, color: "white", fontSize: "12px", backgroundColor: "#2e2e2e", borderRadius: "25px", height: 20, paddingLeft: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
        endAdornment={ 
          <IconButton type="button" aria-label="search">
            <SearchIcon sx={{ width: '12px', height: '12px' }}/>
          </IconButton>
        }
      />
    </Paper>
  );
}
