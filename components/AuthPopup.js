import * as React from 'react';
import { useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring'
import { signOut } from "../src/auth/SignOut";
import { SignInForm } from "../src/auth/SignIn";
import { SignUpForm } from "../src/auth/SignUp";
import { styled } from "@mui/system"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  maxWidth: "90vw",
  bgcolor: '#120C18',
  border: "2px solid #24192e",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function AuthPopup(props) {
    const [logIn, setLogIn] = useState(true)

    return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.setOpen}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
            <Box sx={style}>
                {logIn ?
                    <SignInForm signUpForm={() => setLogIn(false)} closeMenu={props.setOpen} />
                    :
                    <SignUpForm signInForm={() => setLogIn(true)} closeMenu={props.setOpen} />
                }
            </Box>
        </Fade>
      </Modal>
    )
}
