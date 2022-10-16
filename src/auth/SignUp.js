import { Auth, Hub } from 'aws-amplify';
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import { styled } from "@mui/system";
import ThemeProvider from "../../Theme";

const SignUpButton = styled(Button)(({ theme }) => ({
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

export async function signUp() {
    try {
        const { user } = await Auth.signUp({
            password,
            attributes: { email },
            autoSignIn: {
                enabled: true,
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}

export function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            // assign user
        } else if (event === 'autoSignIn_failure') {
            // redirect to sign in page
        }
    })
}

export async function confirmSignUp() {
    try {
        await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log('error confirming sign up', error);
    }
}


export async function resendConfirmationCode() {
    try {
        await Auth.resendSignUp(username);
        console.log('code resent successfully');
    } catch (err) {
        console.log('error resending code: ', err);
    }
}

export const SignUpForm = (props) => {
    const paperStyle = { 
        padding: 20, 
        height: '70vh', 
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
                    <Typography color="white" variant="h2">Sign up</Typography>
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
                    label="Select password" 
                    placeholder="Select password" 
                    type='password' 
                    fullWidth 
                    required
                    inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                    sx={{ input: { color: 'white' } }}
                />
                <TextFields 
                    style={buttonStyle} 
                    label="Confirm password" 
                    placeholder="Confirm password" 
                    type='password' 
                    fullWidth 
                    required
                    inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                    sx={{ input: { color: 'white' } }}
                />
                <SignUpButton type='submit' variant='contained' fullWidth>Sign Up</SignUpButton> 
                <Typography style={{margin: '0.5rem 0'}} color='white'> 
                    Already have an account? &nbsp;
                    <Link href="#" onClick={props.signInForm} color="inherit">Sign in here</Link>
                </Typography>
            </Paper>
        </Grid>
    </ThemeProvider>
    );
}
