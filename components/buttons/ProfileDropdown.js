import * as React from 'react'
import { styled } from "@mui/system"
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ThemeProvider from "../../Theme"
import Link from 'next/link'
import { signOut } from '../../src/auth/SignOut'

const ProfileButton = styled("button")(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "0.8rem",
  fontWeight: "500",
  textAlign: "center",
  color: "black",
  border: "0px solid #282b2f",
  borderRadius: "0.4rem",
  width: "2rem",
  padding: "0.46rem",
  cursor: "pointer",
  backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)",
  backgroundSize: '200%',
  transition: "0.4s",
  "&:hover": {
    backgroundPosition: "right",
  }
}));

export default function ProfileDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    props.confirmClosed()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAndSignOut = () => {
    setAnchorEl(null);
    signOut();
  };

  return (
    <ThemeProvider>
      <ProfileButton
        disableRipple
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ marginRight: "-9px" }}
        style={{ backgroundColor: 'transparent' }}
      >
        G
      </ProfileButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
        sx={{ marginLeft: "1px" }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={{ borderBottom: "1px solid #282b2f" }} style={{ pointerEvents: 'none' }}>
          <a>Guest</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/watchlist">
            <a>Watchlist</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleCloseAndSignOut}>
          <Link href="/">
            <a>Sign Out</a>
          </Link>
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
}
