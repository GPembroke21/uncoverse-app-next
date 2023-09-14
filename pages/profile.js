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

const Wrapper = styled(Grid)(({ theme }) => ({ alignItems: "center", flexDirection: "column", justifyContent: "center", width: "100%" }))
const Header = styled(Grid)(({ theme }) => ({ justifyContent: "center", }))
const Field = styled(Grid)(({ theme }) => ({ width: "14rem", }))
const FieldHeader = styled(Grid)(({ theme }) => ({}))

const StandardButtonClear = styled(Button)(({ theme }) => ({
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

const StandardButtonFilled = styled(Button)(({ theme }) => ({
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

const ButtonContainer = styled(Grid)(({ theme }) => ({}));


export default function Profile(props) {
  const [changed, setChanged] = React.useState(false)
  const request = GetUser(changed)
  const [editUserDetails, setEditUserDetails] = React.useState(() => false)
  const [editEmailConfirm, setEditEmailConfirm] = React.useState(() => false)
  const [showDeleteConfirm, setShowDeleteConfirm] = React.useState(() => false)
  const [errorMsg, setErrorMsg] = React.useState(() => null)
  const [deleteError, setDeleteError] = React.useState(() => "Deleting cannot be revered!")
  const handleCloseAndSignOut = () => signOut()
  const [userDetails, setUserDetails] = React.useState(() => ({ username: null, email: null }))
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  React.useEffect(() => {
    if (!request || !request.attributes.email) return
    if (!request.attributes.name) setUserDetails({ username: null, email: request.attributes.email })
    else setUserDetails({ username: request.attributes.name, email: request.attributes.email })
  }, [request])

  async function addAttribute(name) {
    try {
      await Auth.updateUserAttributes(request, { 'name': name });
      setUserDetails({ ...userDetails, username: name })
      if (!editEmailConfirm) { setEditUserDetails(false); setErrorMsg(null) }
      console.log("updated name:", name)
    } catch (err) {
      setErrorMsg(err.message)
      console.log('error adding attributes:', err)
    }
  }

  async function updateUserEmail(newEmail) {
    await Auth.updateUserAttributes(request, { 'email': newEmail }).then(() => {
      console.log('a verification code is sent to', newEmail);
      setEditEmailConfirm(true); setErrorMsg("Confirmation code sent. Changes to email may take a few minutes to be reflected once confirmed.");
    }).catch((e) => {
      setErrorMsg(e.message)
      console.log('failed with error 2... ', e);
    });
  }

  async function verifyEmailValidationCode(code, email) {
    try {
      await Auth.verifyCurrentUserAttributeSubmit('email', code)
      console.log('email verified. may take a few moments for changes to be reflected');
      setEditUserDetails(false)
      setErrorMsg(null)
      setUserDetails({ ...userDetails, email: email })
      setEditEmailConfirm(false)
    } catch (err) {
      setErrorMsg(err.message == "null" ? "Error! There may already be an account for this email." : err.message)
      if (err.message == "null") setEditEmailConfirm(false)
      console.log('failed with error 1...', code, err);
    }
  }

  async function deleteUser() {
    try {
      const result = await Auth.deleteUser();
      console.log(result);
      setDeleteError('Account deleted...')
    } catch (error) {
      console.log('Error deleting user', error);
      setDeleteError('Error deleting user', error.message)
    }
  }


  const handleSubmit = event => {
    event.preventDefault()
    if (!editUserDetails || !request) return
    if (!editEmailConfirm && event.target[2].value !== userDetails.email && event.target[2].value !== "") {
      updateUserEmail(event.target[2].value)
      console.log("changing email..", event.target[2].value)
      return
    } else if (editEmailConfirm) {
      if (event.target[0].value !== userDetails.username && event.target[0].value !== "") addAttribute(event.target[0].value)
      if (event.target[2].value !== userDetails.email) verifyEmailValidationCode(event.target[4].value, event.target[2].value)
    } else if (event.target[0].value !== userDetails.username && event.target[0].value !== "") {
      addAttribute(event.target[0].value)
    } else {
      setEditUserDetails(false)
      setErrorMsg(null)
      console.log("Closing without edits - save")
    }
  };

  const handleCancel = () => { setErrorMsg(null); setEditUserDetails(false); setEditEmailConfirm(false); console.log("Closing without edits") }
  const handelEditDetailsClick = () => { setEditUserDetails(true) }

  const handleDeleteUser = event => {
    event.preventDefault()
    if (!showDeleteConfirm) setShowDeleteConfirm(true)
    else if (showDeleteConfirm && event.target[2].value == userDetails.email) {
      deleteUser()
    } else if (showDeleteConfirm && event.target[2].value !== userDetails.email) {
      setDeleteError("Email does not match..")
    }
  }

  return (
    <Wrapper container>
      <Header sx={{ margin: { xs: "4vw 0vw 0vw 0vw", sm: "2vw 0vw 0vw 0vw" } }}>
        <Typography sx={{ fontWeight: "700", fontSize: "2rem" }}>User Settings</Typography>
      </Header>
      <Divider sx={{ margin: "1rem 0rem 1.5rem 0rem", width: "17rem" }} />
      <Field>
        <FieldHeader item marginBottom={1} marginTop={0}>
          <Typography sx={{ fontWeight: "700" }}>Wallet</Typography>
        </FieldHeader>
        <Grid item marginBottom={0} marginTop={0}>
          <ConnectButton fullWidth onMouseEnter={handleHover} onMouseLeave={handleHover}>{hover ? 'Coming Soon' : 'Connect Wallet'}</ConnectButton>
        </Grid>
      </Field>
      <Divider sx={{ margin: "2rem 0rem 1.5rem 0rem", width: "17rem" }} />


      <form onSubmit={handleSubmit} style={{ overflow: "hidden", padding: "0 0", background: "transparent" }}>
        <Field>
          <FieldHeader item marginBottom={1} marginTop={0}>
            <Typography sx={{ fontWeight: "700" }}>Username</Typography>
          </FieldHeader>
          <Grid item marginBottom={1} marginTop={1}>
            {(editUserDetails || !request) ?
              <TextFields placeholder={userDetails.username ? userDetails.username : "Enter username..."} inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' } }} />
              :
              <Typography>{userDetails.username ? userDetails.username : "Click edit to update username."}</Typography>
            }
          </Grid>
        </Field>
        <Field>
          <FieldHeader item marginBottom={1} marginTop={2}>
            <Typography sx={{ fontWeight: "700" }}>Email &nbsp;</Typography>
          </FieldHeader>
          <Grid item marginBottom={2} marginTop={1}>
            {(editUserDetails || !request) ?
              <TextFields placeholder={userDetails.email ? userDetails.email : "Enter email..."} fullWidth inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' } }} />
              :
              <Typography>{userDetails.email ? userDetails.email : "Click edit to update email."}</Typography>
            }
          </Grid>
          {editEmailConfirm &&
            <Grid item marginBottom={2} marginTop={1}>
              <TextFields placeholder="Enter confirmation code..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' } }} />
            </Grid>
          }

          {errorMsg &&
            <Grid item marginBottom={1} marginTop={1}>
              <Typography sx={{ color: editEmailConfirm ? "#FFFFFF" : "#FF0000" }}> {errorMsg} </Typography>
            </Grid>
          }
          {(editUserDetails || !request) ?
            <ButtonContainer container marginBottom={0} marginTop={3} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Grid item marginRight={1}>
                <StandardButtonClear onClick={handleCancel} fullWidth>Cancel</StandardButtonClear>
              </Grid>
              <Grid item marginLeft={1}>
                <StandardButtonFilled type='submit' fullWidth>Save</StandardButtonFilled>
              </Grid>
            </ButtonContainer>
            :
            <Grid item marginBottom={0} marginTop={2}>
              <StandardButtonClear fullWidth onClick={handelEditDetailsClick}>Edit details</StandardButtonClear>
            </Grid>
          }
          
        </Field>
      </form>

      <Divider sx={{ margin: "2rem 0rem 1.5rem 0rem", width: "16rem" }} />
      <form onSubmit={handleDeleteUser} style={{ overflow: "hidden", padding: "0 0", background: "transparent" }}>
        <Field sx={{ marginBottom: { xs: "8vw", sm: "4vw" } }}>
          <FieldHeader item marginBottom={0} marginTop={0}>
            <Typography sx={{ fontWeight: "700" }}>Account</Typography>
          </FieldHeader>
          {!showDeleteConfirm ?
            <Grid item marginBottom={1} marginTop={1}>
              <StandardButtonClear type='submit' fullWidth >Delete Account</StandardButtonClear>
            </Grid>
            :
            <ButtonContainer container marginBottom={0} marginTop={1} sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <Grid item marginRight={1}>
                <StandardButtonClear onClick={() => {setShowDeleteConfirm(false); setDeleteError("Deleting cannot be reversed!")}} fullWidth>Cancel</StandardButtonClear>
              </Grid>
              <Grid item marginLeft={1}>
                <StandardButtonFilled type='submit' fullWidth>Confirm Delete</StandardButtonFilled>
              </Grid>
            </ButtonContainer>
          }
        {showDeleteConfirm &&
          <Grid item marginBottom={2} marginTop={2}>
            <TextFields placeholder="Enter email to confirm..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" }, padding: "4px 12px" } }} sx={{ input: { color: 'white' } }} />
            <Typography sx={{ marginTop: "1rem", color: "#FF0000" }}> {deleteError} </Typography>
          </Grid>

        }
        <Grid item marginBottom={0} marginTop={2}>
            <Link href="/">
              <StandardButtonFilled fullWidth onClick={handleCloseAndSignOut}>Sign Out</StandardButtonFilled>
            </Link>
          </Grid>
        </Field>
      </form>
    </Wrapper>

  )
}