import React from "react";
import { Auth } from 'aws-amplify';
import { Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import ThemeProvider from "../../Theme";

const SignInButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white", backgroundColor: "transparent", border: "1px solid white",
    borderRadius: "0.4rem", padding: "0.46rem", cursor: "pointer", margin: "12px 0px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff", backgroundColor: "transparent" }
}));

const TextFields = styled(TextField)(({ theme }) => ({
    caretColor: "white", '& label.Mui-focused': { color: 'white' }, '& .MuiInput-underline:after': { borderBottomColor: 'white' }, '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' }
    }, "& .MuiInputLabel-root": { color: 'white' }
}));


export const SignInForm = (props) => {
    const [username, setUsername] = React.useState("")
    const [forgotPassword, setForgotPassword] = React.useState(false)
    const [forgotPasswordConfirm, setForgotPasswordConfirm] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState(() => null)

    async function signIn(props) { try { await Auth.signIn(props.un, props.pw); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error signing in', error) } }
    async function forgotPd(props) { try { await Auth.forgotPassword(props.un); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error with forgot password', error) } }
    async function submitForgotPassword(props) { try { Auth.forgotPasswordSubmit(props.un, props.code, props.new_pw); setErrorMsg(null) } catch (error) { setErrorMsg(error.message) } } //; console.log('error forgot password submit', error) } }
    const handleSubmit = (event) => { signIn({ un: event.target[0].value, pw: event.target[2].value }).then(response => props.closeMenu); event.preventDefault() }
    const handleReset = (event) => { event.preventDefault(); forgotPd({ un: event.target[0].value }).then(respnse => setForgotPasswordConfirm(true)) }
    const handleResetConfirm = (event) => { submitForgotPassword({ un: event.target[0].value, code: event.target[2].value, new_pw: event.target[4].value }).then(response => (setForgotPasswordConfirm(false), setForgotPassword(false))); event.preventDefault() }

    const paperStyle = { padding: 20, height: 'auto', width: '25rem', maxWidth: '90vw', border: "2px solid #2e2e2e", borderRadius: "15px" }
    const gridStyle = { backgroundColor: "#120C18" }
    const buttonStyle = { margin: '1rem 0', color: "#120C18" }

    return (
        <ThemeProvider>
            <Grid style={gridStyle} sx={{ borderRadius: "15px" }}>
                {/* <Paper elevation={10} style={paperStyle}> */}
                {!forgotPassword ?
                    <div>
                        <Grid align='center'>
                            <Typography color="white" fontSize="clamp(24px, 4vw, 36px)" fontWeight="bold">Sign In</Typography>
                        </Grid>
                        <form onSubmit={handleSubmit}>
                            <TextFields style={buttonStyle} placeholder="Enter email" fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
                            <TextFields style={buttonStyle} placeholder="Enter password" type='password' fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
                            <SignInButton type='submit' variant='contained' fullWidth>Sign In</SignInButton>
                        </form>
                        <Typography>
                            <Link onClick={() => setForgotPassword(true)} color="inherit" sx={{ '&:hover': { color: '#dd00ff' } }}>
                                Forgot password?
                            </Link>
                        </Typography>
                    </div>

                    :

                    <div>
                        <Grid align='center'>
                            <Typography color="white" variant="h2">Reset password</Typography>
                        </Grid>
                        {!forgotPasswordConfirm ?
                            <form onSubmit={handleReset}>
                                <TextFields
                                    style={buttonStyle}
                                    placeholder="Enter email"
                                    fullWidth
                                    required
                                    inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                                    sx={{ input: { color: 'white' } }}
                                />
                                <SignInButton type='submit' variant='contained' fullWidth>Reset Password</SignInButton>
                            </form> :
                            <form onSubmit={handleResetConfirm}>
                                <TextFields
                                    style={buttonStyle}
                                    // label="Email"
                                    placeholder="Enter email"
                                    fullWidth
                                    required
                                    inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                                    sx={{ input: { color: 'white' } }}
                                />
                                <TextFields
                                    // style={buttonStyle}
                                    placeholder="Enter confirmation code"
                                    fullWidth
                                    required
                                    inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                                    sx={{ input: { color: 'white' } }}
                                />
                                <TextFields
                                    style={buttonStyle}
                                    // label="New password"
                                    placeholder="Enter new password"
                                    type='password'
                                    fullWidth
                                    required
                                    inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                                    sx={{ input: { color: 'white' } }}
                                />
                                <SignInButton type='submit' variant='contained' fullWidth>Reset Password</SignInButton>
                            </form>
                        }
                    </div>

                }
                <Typography style={{ margin: '0.5rem 0' }} color='white'>
                    Don&apos;t have an account? &nbsp;
                    <Link href="#" onClick={props.signUpForm} color="inherit" sx={{ '&:hover': { color: '#dd00ff' } }}>Sign up here</Link>
                </Typography>
                {errorMsg &&
                    <Grid item marginBottom={1} marginTop={1}>
                        <Typography sx={{ color: "#FF0000" }}> {errorMsg} </Typography>
                    </Grid>
                }
                {/* </Paper> */}
            </Grid>
        </ThemeProvider>
    )
}
