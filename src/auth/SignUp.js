import React from "react";
import { Auth, Hub } from 'aws-amplify';
import { Avatar, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { CheckBox, LockOutlined } from "@mui/icons-material";
import { styled } from "@mui/system";
import ThemeProvider from "../../Theme";

const SignUpButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white", backgroundColor: "transparent", border: "1px solid white",
    borderRadius: "0.4rem", padding: "0.46rem", cursor: "pointer", margin: "12px 0px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff", backgroundColor: "transparent" }
}));

const TextFields = styled(TextField)(({ theme }) => ({
    caretColor: "white", '& label.Mui-focused': { color: 'white', }, '& .MuiInput-underline:after': { borderBottomColor: 'white', },
    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white', }, '&:hover fieldset': { borderColor: 'white', }, '&.Mui-focused fieldset': { borderColor: 'white', }, },
    "& .MuiInputLabel-root": { color: 'white' },
}));

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


export const SignUpForm = (props) => {
    const [confirming, setConfirming] = React.useState(false)
    const [username, setUsername] = React.useState("")
    const [errorMsg, setErrorMsg] = React.useState(() => null)

    async function signUp(props) { try { const { user } = await Auth.signUp({ username: props.un, password: props.pw, attributes: { email: props.un }, autoSignIn: { enabled: true } }); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error signing up:', error); } }
    async function confirmSignUp(props) { try { await Auth.confirmSignUp(props.un, props.code); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error confirming sign up', error); } }
    async function resendConfirmationCode(props) { try { await Auth.resendSignUp(props.un); console.log('code resent successfully'); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error resending code: ', error); } }

    const handleChange = (event) => setUsername(event.target.value)
    const handleSubmit = (event) => { if (confirming == false) { signUp({ un: event.target[0].value, pw: event.target[2].value }).then(response => setConfirming(true)) } else if (confirming) { confirmSignUp({ un: event.target[0].value, code: event.target[4].value }).then(response => (props.closeMenu, setConfirming(true))) }; event.preventDefault() }

    const paperStyle = { padding: 20, height: 'auto', width: '25rem', maxWidth: '90vw', border: "2px solid #24192e", borderRadius: "15px", backgroundColor: "#120C18" }
    const bgColor = { backgroundColor: "#120C18" }
    const buttonStyle = { margin: '1rem 0' }

    return (
        <ThemeProvider>
            <Grid style={bgColor} sx={{ borderRadius: "15px" }}>
                {/* <Paper elevation={10} style={paperStyle}> */}
                <Grid align='center'>
                    <Typography color="white" fontSize="clamp(24px, 4vw, 36px)" fontWeight="bold">Sign Up</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextFields
                        style={buttonStyle}
                        placeholder="Enter email"
                        fullWidth
                        required
                        inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                        sx={{ input: { color: 'white' } }}
                        onChange={handleChange}
                    />
                    <TextFields
                        style={buttonStyle}
                        placeholder="Select password"
                        type='password'
                        fullWidth
                        required
                        inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                        sx={{ input: { color: 'white' } }}
                    />
                    {confirming ?
                        <div>
                            <TextFields
                                style={buttonStyle}
                                placeholder="Enter confirmation code"
                                fullWidth
                                required
                                inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                                sx={{ input: { color: 'white' } }}
                            />
                            <Typography style={{ margin: '0.5rem 0' }} color='white'>Confirmation code sent. &nbsp;
                                <Link href="#" color="inherit" sx={{ '&:hover': { color: '#dd00ff' } }}
                                    onClick={() => resendConfirmationCode({ un: username })}>
                                    Resend code?
                                </Link>
                            </Typography>
                        </div> : <div></div>
                    }
                    <SignUpButton type='submit' variant='contained' fullWidth>Sign Up</SignUpButton>
                </form>
                <Typography style={{ margin: '0.5rem 0' }} color='white'>
                    Already have an account? &nbsp;
                    <Link href="#" onClick={props.signInForm} color="inherit" sx={{ '&:hover': { color: '#dd00ff' } }}>Sign in here</Link>
                </Typography>
                {errorMsg &&
                    <Grid item marginBottom={1} marginTop={1}>
                        <Typography sx={{ color: "#FF0000" }}> {errorMsg} </Typography>
                    </Grid>
                }
                {/* </Paper> */}
            </Grid>
        </ThemeProvider >
    );
}
