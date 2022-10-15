import { Auth, Hub } from 'aws-amplify';
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";

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
    const paperStyle = { padding: 20, height: '70vh', width: '25rem', maxWidth: '90vw', margin: '3rem auto' }
    const bgColor = {backgroundColor:"#FFFFF5"}
    const avatarStyle = {backgroundColor:"#1bbd7e"}
    const buttonStyle = {margin: '1rem 0'}

    return (
        <Grid style={bgColor}>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}> <LockOutlined /> </Avatar>
                    <h2> Sign up</h2>
                </Grid>
                <TextField style={buttonStyle} label="Email" placeholder="Enter email" fullWidth required></TextField>
                <TextField style={buttonStyle} label="Select password" placeholder="Select password" type='password' fullWidth required></TextField>
                <TextField style={buttonStyle} label="Confirm password" placeholder="Confirm password" type='password' fullWidth required></TextField>
                <Button type='submit' color='primary' variant='contained' style={buttonStyle} fullWidth>Sign Up</Button> 
                <Typography style={{margin: '0.5rem 0'}} color='primary'> Already have an account? <Link href="#" onClick={props.signInForm}>Sign up here</Link>
                </Typography>
            </Paper>
        </Grid>
    );
}
