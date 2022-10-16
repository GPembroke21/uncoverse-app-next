import React from "react";
import { Auth } from 'aws-amplify';
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import { styled } from "@mui/system";
import ThemeProvider from "../../Theme";

const SignInButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "0.8rem",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "0.4rem",
    padding: "0.46rem",
    cursor: "pointer",
    margin: "12px 0px",
    "&:hover": {
      border: "1px solid #dd00ff",
      color: "#dd00ff",
    }
}));

const TextFields = styled(TextField)(({ theme }) => ({
    caretColor: "white",
    '& label.Mui-focused': {
        color: 'white',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'white',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'white',
          
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      "& .MuiInputLabel-root": {
        color: 'white', 
      },
}));


async function signIn(props) {
    try {
        const user = await Auth.signIn(props.username, props.password);
    } catch (error) {
        console.log('error signing in', error);
    }
}

export const SignInForm = (props) => {

    const paperStyle = { 
        padding: 20, 
        height: '35em', 
        width: '25rem', 
        maxWidth: '90vw', 
        margin: '3rem auto',
        border: "2px solid #2e2e2e",
        borderRadius: "15px", 
    }
    const bgColor = {backgroundColor:"black"}
    const avatarStyle = {backgroundColor:"white"}
    const buttonStyle = {margin: '1rem 0'}
    return (
    <ThemeProvider>
        <Grid style={bgColor} sx= {{borderRadius: "15px"}}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlined /> </Avatar>
                    <Typography color="white" variant="h2">Sign In</Typography>
                </Grid>
                <TextFields 
                    style={buttonStyle} 
                    label="Email" 
                    placeholder="Enter email" 
                    fullWidth 
                    required 
                    inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                    sx={{ input: { color: 'white' } }}
                />
                <TextFields 
                    style={buttonStyle} 
                    label="Password" 
                    placeholder="Enter password" 
                    type='password' 
                    fullWidth 
                    required 
                    inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                    sx={{ input: { color: 'white' } }}
                    />
                <FormControlLabel
                    control={
                        <CheckBox
                            name="checkedB"
                            color="primary"
                            style ={{
                                color: "white",
                                marginLeft: "10px",
                                marginRight: "8px"
                              }}
                        />
                    }
                    label="Remember me"
                    color='primary'
                />
                <SignInButton variant='contained' fullWidth>Sign In</SignInButton>
                <Typography>
                    <Link href="#" color="inherit" sx={{'&:hover': {color : '#dd00ff'}}}>
                        Forgot password?
                    </Link>
                </Typography>
                <Typography style={{margin: '0.5rem 0'}} color='white'> 
                    Don't have an account? &nbsp;
                    <Link href="#" onClick={props.signUpForm} color="inherit" sx={{'&:hover': {color : '#dd00ff'}}}>Sign up here</Link>
                </Typography>
            </Paper>
        </Grid>
    </ThemeProvider>
    );
}
