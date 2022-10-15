import React, { useState } from "react"
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { sizeWidth } from '@mui/system';
import Divider from "@mui/material/Divider"
import { signOut } from "../src/auth/SignOut";
import { SignInForm } from "../src/auth/SignIn";
import { SignUpForm } from "../src/auth/SignUp";

export default function Popout(props) {
    const [logIn, setLogIn] = useState(true)
        

    return (
        <div onClick={() => console.log("ABC23")}>
            { logIn ?
                <SignInForm signUpForm={() => setLogIn(false)} closeMenu={props.closeMenu}/>
                :
                <SignUpForm signInForm={() => setLogIn(true)} closeMenu={props.closeMenu}/>
            }
        </div>
    )
}


