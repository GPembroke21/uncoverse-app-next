import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function CategoryFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "white", 
          backgroundColor: "#2e2e2e", 
          fontSize: "clamp(8px, 1vw, 14px)", 
          borderRadius: '25px',
          // padding: '0px 10px 0px 10px',
          marginRight: '10px',
          height: "2.5em",
          width: "11em"
        }}
        style={{
            backgroundColor: "#2e2e2e", 
        }}
      >
        Category
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{marginTop: "15px"}}
      >
        <MenuItem onClick={handleClose} sx={{fontSize: "clamp(8px, 1vw, 14px)"}}>Category1</MenuItem>
        <MenuItem onClick={handleClose} sx={{fontSize: "clamp(8px, 1vw, 14px)"}}>Category2</MenuItem>
        <MenuItem onClick={handleClose} sx={{fontSize: "clamp(8px, 1vw, 14px)"}}>Category3</MenuItem>
      </Menu>
    </div>
  );
}