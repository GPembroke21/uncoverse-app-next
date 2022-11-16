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
import GetUser from "../src/auth/GetUser";

// const Main = styled(Grid)(({ theme }) => ({ maxHeight: '50em', color: "#ffffff", margin: "4vw 2em", flexDirection: "row", justifyContent: "center", [theme.breakpoints.down("sm")]: { flexDirection: "column", justifyContent: "left", "> div": { marginLeft: 0, marginRight: 0, paddingRight: "60px" } } }))
const Main = styled(Grid)(({ theme }) => ({ color: "transparent", margin: "4vw 2em", flexDirection: "row", justifyContent: "center", [theme.breakpoints.down("sm")]: { flexDirection: "column", justifyContent: "left", "> div": { marginLeft: 0, marginRight: 0, paddingRight: "60px" } } }))
const EditButton = styled(Button)(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white", backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem", cursor: "pointer", margin: "12px 0px", width: "min(40vw, 200px)", height: "55px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" } }))
const SaveButton = styled(Button)(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white", backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem", cursor: "pointer", margin: "40px 0px", height: "55px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" } }))
const SignOutButton = styled(Button)(({ theme }) => ({ fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white", backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem", cursor: "pointer", margin: "0px 0px", height: "55px", "&:hover": { border: "1px solid red", color: "red" } }))
const TextFields = styled(TextField)(({ theme }) => ({ caretColor: "white", '& label.Mui-focused': { color: 'white' }, '& .MuiInput-underline:after': { borderBottomColor: 'white' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'white' }, '&:hover fieldset': { borderColor: 'white' }, '&.Mui-focused fieldset': { borderColor: 'white' } }, "& .MuiInputLabel-root": { color: 'white' } }))

export default function Profile(props) {
  const [changed, setChanged] = React.useState(false)
  const request = GetUser(changed)
  const [editName, setEditName] = React.useState(() => false)
  const [editEmail, setEditEmail] = React.useState(() => false)
  const [editEmailConfirm, setEditEmailConfirm] = React.useState(() => false)
  const [errorMsg, setErrorMsg] = React.useState(() => null)
  const handleCloseAndSignOut = () => signOut()
  const [email, setEmail] = React.useState(() => null)

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

  const handleEditName = () => { setEditEmail(false); setEditEmailConfirm(false); setEditName(!editName) }
  const handleEditEmail = () => { setEditName(false); setEditEmail(!editEmail) }

  return (
    <form onSubmit={handleSubmit} style={{ overflow: "hidden", padding: "0 0", background: "transparent" }}>
      <Main container>
        <Grid alignItems="flex-start" flexDirection="column">
          <Grid item marginBottom={1} marginTop={0}>
            <Typography onClick={() => console.log(email, request)} sx={{ fontWeight: "700" }}>Display Name  &nbsp; <EditIcon sx={{ fontSize: "1rem" }} onClick={handleEditName} /></Typography>
          </Grid>
          <Grid item marginBottom={1} marginTop={1}>
            {(editName || !request || !request.attributes.name) ?
              <TextFields placeholder="Enter name..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
              :
              <Typography>{request.attributes.name}</Typography>
            }
          </Grid>
          <Grid item marginBottom={1} marginTop={3}>
            <Typography sx={{ fontWeight: "700" }}>Email &nbsp; <EditIcon sx={{ fontSize: "1rem" }} onClick={handleEditEmail} /></Typography>
          </Grid>
          <Grid item marginBottom={1} marginTop={1}>
            {(editEmail || !request) ?
              <TextFields placeholder="Enter email..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
              :
              <Typography>{email}</Typography>
            }
          </Grid>
          {editEmailConfirm &&
            <Grid item marginBottom={1} marginTop={1}>
              <TextFields placeholder="Enter confirmation code..." fullWidth required inputProps={{ sx: { "&::placeholder": { color: "white" } } }} sx={{ input: { color: 'white' } }} />
            </Grid>
          }

          {(editEmail || editEmailConfirm || editName || !request || !request.attributes.name) &&
            <Grid item marginBottom={1} marginTop={1}>
              <SaveButton type='submit' fullWidth>Save</SaveButton>
            </Grid>
          }
          {errorMsg &&
            <Grid item marginBottom={1} marginTop={1}>
              <Typography sx={{ color: "#FF0000" }}> {errorMsg} </Typography>
            </Grid>
          }
          <Grid item marginBottom={1} marginTop={3}>
            <Link href="/">
              <SignOutButton fullWidth onClick={handleCloseAndSignOut}>Sign Out</SignOutButton>
            </Link>
          </Grid>
        </Grid>
      </Main>
    </form>
  )
}