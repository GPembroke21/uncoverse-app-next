import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function ClearFilters() {

  return (
      <Button
        id="basic-button"
        sx={{
          color: "white", 
          backgroundColor: "#2e2e2e", 
          fontSize: "8px", 
          borderRadius: '25px',
          padding: '3.4px 10px 3.4px 10px',
          marginRight: '10px',
          marginTop: '3.8px'
        }}
        style={{
            backgroundColor: "#2e2e2e", 
        }}
      >
        Clear Filters
      </Button>
  );
}
