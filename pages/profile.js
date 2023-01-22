import { useState } from 'react'
import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link'
import TextField from "@mui/material/TextField"
import { signOut } from '../src/auth/SignOut'
import React from 'react'
import { Auth } from "aws-amplify"
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider"
import GetUser from "../src/auth/GetUser";

const Wrapper = styled(Grid)(({ theme }) => ({
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%"
  }))

const Header = styled(Grid)(({ theme }) => ({ 
    justifyContent: "center",
}))

const Field = styled(Grid)(({ theme }) => ({ 
    width: "14rem",
  }))

const FieldHeader = styled(Grid)(({ theme }) => ({ 
}))

const SignOutButton = styled(Button)(({ theme }) => ({
  color: theme.palette.button.text, 
  backgroundColor: theme.palette.button.main, 
  fontSize: "clamp(8px, 1vw, 12px)", 
  borderRadius: '6px',
  padding: "0.46rem",
  marginRight: '10px',
  height: "2rem",
  width: "14rem",
  "&:hover": {
      color: theme.palette.button.hovertext,
      backgroundColor: theme.palette.button.hover,
  },
  "&:active": {
    color: theme.palette.button.hovertext,
    backgroundColor: theme.palette.button.active
  },
}));

const CancelButton = styled(Button)(({ theme }) => ({
    color: theme.palette.button.text, 
    backgroundColor: "transparent", 
    fontSize: "clamp(8px, 1vw, 12px)", 
    borderRadius: '6px',
    border: "1px solid white",
    padding: "0.46rem",
    height: "2rem",
    "&:hover": {
        color: "red",
        backgroundColor: "transparent",
        borderColor: "red"
    },
    "&:active": {
        color: "red",
        backgroundColor: "transparent",
        borderColor: "red"
    },
}));

const SaveButton = styled(Button)(({ theme }) => ({
  color: theme.palette.button.text, 
  backgroundColor: theme.palette.button.main, 
  fontSize: "clamp(8px, 1vw, 12px)", 
  borderRadius: '6px',
  padding: "0.46rem",
  height: "2rem",
  "&:hover": {
      color: theme.palette.button.hovertext,
      backgroundColor: theme.palette.button.hover
  },
  "&:active": {
    color: theme.palette.button.hovertext,
    backgroundColor: theme.palette.button.active
  },
}));

const ConnectButton = styled(Button)(({ theme }) => ({
    color: theme.palette.button.text, 
    backgroundColor: "transparent", 
    fontSize: "clamp(8px, 1vw, 12px)",
    border: "1px solid white", 
    borderRadius: '6px',
    padding: "0.46rem",
    height: "2rem",
    "&:hover": {
        color: theme.palette.button.hovertext,
        borderColor: theme.palette.button.hovertext,
    },
    "&:active": {
        color: theme.palette.button.hovertext,
        borderColor: theme.palette.button.hovertext,
    },
  }));


const DeleteButton = styled(Button)(({ theme }) => ({
    color: "red", 
    backgroundColor: "transparent", 
    fontSize: "clamp(8px, 1vw, 12px)",
    border: "1px solid red", 
    borderRadius: '6px',
    padding: "0.46rem",
    height: "2rem",
}));

const TextFields = styled(TextField)(({ theme }) => ({ 
  marginBottom: "-12px",
  width: "14rem",
  caretColor: "white", 
  '& label.Mui-focused': { 
    color: 'white' 
  }, 
  '& .MuiInput-underline:after': { 
    borderBottomColor: 'white' 
  }, 
  '& .MuiOutlinedInput-root': { 
    '& fieldset': { borderColor: 'white' }, 
    '&:hover fieldset': { borderColor: 'white' }, 
    '&.Mui-focused fieldset': { borderColor: 'white' } 
  }, 
  "& .MuiInputLabel-root": { 
    color: 'white' 
  } 
}))

const ButtonContainer = styled(Grid)(({ theme }) => ({ 
}));


export default function Profile(props) {
  const [changed, setChanged] = React.useState(false)
  const request = GetUser(changed)
  const [editName, setEditName] = React.useState(() => false)
  const [editEmail, setEditEmail] = React.useState(() => false)
  const [editEmailConfirm, setEditEmailConfirm] = React.useState(() => false)
  const [errorMsg, setErrorMsg] = React.useState(() => null)
  const handleCloseAndSignOut = () => signOut()
  const [email, setEmail] = React.useState(() => null)
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  React.useEffect(() => {
    if (!request || !request.attributes.email) return
    setEmail(request.attributes.email)
  }, [request])

  async function addAttribute(name) {
    try {
      await Auth.updateUserAttributes(request, { 'name': name });
      setEditName(false); setChanged(!changed); setErrorMsg(null)
    } catch (err) {
      setErrorMsg(err.message)
      console.log('error adding attributes:', err)
    }
  }

  async function updateUserEmail(newEmail) {
    await Auth.updateUserAttributes(request, { 'email': newEmail }).then(() => {
      console.log('a verification code is sent to', newEmail);
      setEditEmailConfirm(true); setErrorMsg(null);
    }).catch((e) => {
      setErrorMsg(e.message)
      console.log('failed with error 2... ', e);
    });
  }

  async function verifyEmailValidationCode(code, email) {
    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', code)
      console.log('email verified');
      setEditEmailConfirm(false)
      setEditEmail(false)
      setErrorMsg(null)
      setEmail(email)
    } catch (err) {
      setErrorMsg(err.message)
      console.log('failed with error 1...', code, err.message);
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (editName) {
      addAttribute(event.target[0].value)
    } else if (editEmailConfirm) {
      verifyEmailValidationCode(event.target[2].value, event.target[0].value)
    } else if (editEmail) {
      updateUserEmail(event.target[0].value)
      console.log("changing email..", event.target[0].value)
    }
  };

  const handleEditName = () => { setEditEmail(false); setEditEmailConfirm(false); setEditName(!editName); setShow(!show), iconColor1 === "white" ? setIconColor1("#dd00ff") : setIconColor1("white") }
  const handleEditEmail = () => { setEditName(false); setEditEmail(!editEmail); setShow(!show), iconColor2 === "white" ? setIconColor2("#dd00ff") : setIconColor2("white") }

  const [show, setShow] = useState(true);
  const [iconColor1, setIconColor1] = useState("white");
  const [iconColor2, setIconColor2] = useState("white");

  const hideButton = () => {
    setShow(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ overflow: "hidden", padding: "0 0", background: "transparent" }}>
        <Wrapper container>
          <Header sx={{margin: {xs: "4vw 0vw 0vw 0vw", sm: "2vw 0vw 0vw 0vw"} }}>
            <Typography sx={{ fontWeight: "700", fontSize: "2rem" }}>User Settings</Typography>
          </Header>
          <Divider sx={{margin:"1rem 0rem 1.5rem 0rem", width: "17rem"}}/>
          <Field>
            <FieldHeader item marginBottom={1} marginTop={0}>
                <Typography sx={{ fontWeight: "700" }}>Wallet</Typography>
            </FieldHeader>
            <Grid item marginBottom={0} marginTop={0}>
                <ConnectButton fullWidth onMouseEnter={handleHover} onMouseLeave={handleHover}>{hover ? 'Coming Soon' : 'Connect Wallet'}</ConnectButton>
            </Grid>
          </Field>
          <Divider sx={{margin:"2rem 0rem 1.5rem 0rem", width: "17rem"}}/>
          <Field>
            <FieldHeader item marginBottom={1} marginTop={0}>
                <Typography onClick={() => console.log(email, request)} sx={{ fontWeight: "700" }}>Username</Typography>
            </FieldHeader>
            <Grid item marginBottom={1} marginTop={1}>
                {/* {(editName || !request || !request.attributes.name) ? */}
                <TextFields placeholder="{request.attributes.name}" required inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' }}} />
                {/* :
                <Typography>{request.attributes.name}</Typography>
                } */}
            </Grid>
          </Field>
          <Field>
            <FieldHeader item marginBottom={1} marginTop={2}>
                <Typography sx={{ fontWeight: "700" }}>Email &nbsp;</Typography>
            </FieldHeader>
            <Grid item marginBottom={2} marginTop={1}>
                {/* {(editEmail || !request) ? */}
                <TextFields placeholder={email} fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' } }} />
                {/* :
                <Typography>{email}</Typography>
                } */}
            </Grid>
            {editEmailConfirm &&
                <Grid item marginBottom={2} marginTop={1}>
                <TextFields placeholder="Enter confirmation code..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
                </Grid>
            }

            {/* {(editEmail || editEmailConfirm || editName || !request || !request.attributes.name) &&
                <Grid item marginBottom={1} marginTop={3}>
                <SaveButton type='submit' fullWidth>Save</SaveButton>
                </Grid>
            } */}
            {errorMsg &&
                <Grid item marginBottom={1} marginTop={1}>
                <Typography sx={{ color: "#FF0000" }}> {errorMsg} </Typography>
                </Grid>
            }
            <ButtonContainer container marginBottom={0} marginTop={3} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <Grid item marginRight={1}>
                    <CancelButton type='cancel' fullWidth>Cancel</CancelButton>
                </Grid>
                <Grid item marginLeft={1}>
                    <SaveButton type='submit' fullWidth>Save</SaveButton>
                </Grid>
            </ButtonContainer>
            <Grid item marginBottom={0} marginTop={2}>
                {show &&
                <Link href="/">
                    <SignOutButton fullWidth onClick={handleCloseAndSignOut}>Sign Out</SignOutButton>
                </Link>
                }
            </Grid>
          </Field>
          <Divider sx={{margin:"2rem 0rem 1.5rem 0rem", width: "16rem"}}/>
          <Field sx={{marginBottom: {xs: "8vw", sm: "4vw"} }}>
            <FieldHeader item marginBottom={0} marginTop={0}>
                <Typography sx={{ fontWeight: "700" }}>Data</Typography>
            </FieldHeader>
            <Grid item marginBottom={1}>
                <Typography sx={{ fontWeight: "300", fontSize: "10px" }}>Requests may take a few days to process.</Typography>
            </Grid>
            <Grid item marginBottom={1} marginTop={1}>
                <DeleteButton fullWidth >Delete Account</DeleteButton>
            </Grid>
          </Field>
        </Wrapper>
    </form>
  )
}