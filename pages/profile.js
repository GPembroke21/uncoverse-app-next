import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from 'next/link'
import TextField from "@mui/material/TextField"
import { signOut } from '../src/auth/SignOut'
import { useLoginContext } from "../components/ContextProvider"
import React from 'react'
import { Auth } from "aws-amplify"

const Main = styled(Grid)(({ theme }) => ({
  maxHeight: '50em', color: "#ffffff", margin: "4vw 2em", flexDirection: "row",
  justifyContent: "center", [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "left", "> div": { marginLeft: 0, marginRight: 0, paddingRight: "60px" }
  }
}));

const EditButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white",
  backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem",
  cursor: "pointer", margin: "12px 0px", width: "min(40vw, 200px)",
  height: "55px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" }
}));

const SaveButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white",
  backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem",
  cursor: "pointer", margin: "40px 0px", height: "55px", "&:hover": { border: "1px solid #dd00ff", color: "#dd00ff" }
}));

const SignOutButton = styled(Button)(({ theme }) => ({
  fontFamily: "Inter", fontSize: "0.8rem", fontWeight: "500", textAlign: "center", color: "white",
  backgroundColor: "transparent", border: "1px solid white", borderRadius: "4px", padding: "0.46rem",
  cursor: "pointer", margin: "0px 0px", height: "55px", "&:hover": { border: "1px solid red", color: "red" }
}));

const TextFields = styled(TextField)(({ theme }) => ({
  caretColor: "white", '& label.Mui-focused': { color: 'white' },
  '& .MuiInput-underline:after': { borderBottomColor: 'white' },
  '& .MuiOutlinedInput-root': {
    '& fieldset': { borderColor: 'white' },
    '&:hover fieldset': { borderColor: 'white' },
    '&.Mui-focused fieldset': { borderColor: 'white' },
  },
  "& .MuiInputLabel-root": { color: 'white' },
}));

export default function Profile(props) {
  let loginCreds = useLoginContext()
  const [request, setRequest] = React.useState(() => null)

  const getFunction = React.useCallback(async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      // console.log(user)
      setRequest(user)
    } catch (error) {
      // console.log("Error fetching u_deets:", error)
      setRequest(() => null)
    }
  }, [])

  React.useEffect(() => { getFunction(); return () => { } }, [getFunction])

  async function addAttribute(name) {
    try {
      let result = await Auth.updateUserAttributes(user, { 'name': name });
      console.log(result)
    } catch (err) {
      console.log('error adding attributes:', err)
    }
  }

  const handleCloseAndSignOut = () => {
    signOut();
  };

  const handleSubmit = event => {
    event.preventDefault()
    // addAttribute('Gareth Pem')
  };



  return (
    <form onSubmit={handleSubmit} style={{ overflow: "hidden", padding: "0 0", background: "transparent" }}>
      <Main container>
        {/* <Grid marginRight="25px">
          <Grid item position="relative" width="min(40vw, 200px)" height="min(40vw, 200px)" marginBottom="13px">
            <Image src='/profile.svg' layout="fill" objectFit="contain" unoptimized={true} />
          </Grid>
          <Grid item>
            <EditButton>Edit Avatar</EditButton>
          </Grid>
        </Grid> */}
        {/* <Divider style={{backgroundColor: "#2e2e2e", width:"100%", height: "0.01px", marginTop: "4vw"}} /> */}
        <Grid alignItems="flex-start" flexDirection="column">
          <Grid item marginBottom={1} marginTop={0}>
            <Typography>Display Name</Typography>
          </Grid>
          <Grid item>
            <TextFields
              placeholder="Guest"
              fullWidth
              required
              inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
              sx={{ input: { color: 'white' } }}
            />
          </Grid>
          <Grid item marginBottom={1} marginTop={1}>
            <Typography>UserName</Typography>
          </Grid>
          <Grid item>
            <TextFields
              placeholder="@guest69"
              fullWidth
              required
              inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
              sx={{ input: { color: 'white' } }}
            />
          </Grid>
          <Grid item marginBottom={1} marginTop={1}>
            <Typography>Email</Typography>
          </Grid>
          <Grid item>
            <TextFields
              placeholder="guest69@gmail.com"
              fullWidth
              required
              inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
              sx={{ input: { color: 'white' } }}
            />
          </Grid>
          <Grid item>
            <SaveButton type='submit' fullWidth>Save</SaveButton>
          </Grid>
          <Grid item>
            <Link href="/">
              <SignOutButton fullWidth onClick={handleCloseAndSignOut}>Sign Out</SignOutButton>
            </Link>
          </Grid>
        </Grid>
      </Main>
    </form>
  )
}