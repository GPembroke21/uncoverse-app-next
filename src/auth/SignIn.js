import React from "react";
import { Auth } from 'aws-amplify';
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";


async function signIn(props) {
    try {
        const user = await Auth.signIn(props.username, props.password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const SignInForm = (props) => {

    const paperStyle = { padding: 20, height: '70vh', width: '25rem', maxWidth: '90vw', margin: '3rem auto' }
    const bgColor = {backgroundColor:"#FFFFF5"}
    const avatarStyle = {backgroundColor:"#1bbd7e"}
    const buttonStyle = {margin: '1rem 0'}
    return (
        <Grid style={bgColor}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlined /> </Avatar>
                    <h2> Sign In</h2>
                </Grid>
                <TextField style={buttonStyle} label="Email" placeholder="Enter email" fullWidth required></TextField>
                <TextField style={buttonStyle} label="Password" placeholder="Enter password" type='password' fullWidth required></TextField>
                <FormControlLabel
                    control={
                        <CheckBox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                    color='primary'
                />
                <Button type='submit' color='primary' variant='contained' style={buttonStyle} fullWidth>SignIn</Button> 
                <Typography>
                    <Link href="#">
                        Forgort password?
                    </Link>
                </Typography>
                <Typography style={{margin: '0.5rem 0'}} color='primary'> Don't have an account? <Link href="#" onClick={props.signUpForm}>Sign up here</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}
