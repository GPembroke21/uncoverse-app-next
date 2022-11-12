import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#120C18',
  border: "2px solid #24192e",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

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
        backgroundColor: "transparent",
    }
}));

const TextFields = styled(TextField)(({ theme }) => ({
    caretColor: "white",
    '& label.Mui-focused': { color: 'white' },
    '& .MuiInput-underline:after': { borderBottomColor: 'white' },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: 'white' },
        '&:hover fieldset': { borderColor: 'white' },
        '&.Mui-focused fieldset': { borderColor: 'white' }
    },
    "& .MuiInputLabel-root": { color: 'white' },
}));

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid align='center'>
                <Typography color="white" fontSize="clamp(24px, 4vw, 36px)" fontWeight="bold">Sign In</Typography>
            </Grid>
            <TextFields
                placeholder="Enter email"
                fullWidth
                required
                inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                sx={{ input: { color: 'white' } }}
            />
            <TextFields
                placeholder="Enter password"
                type='password'
                fullWidth
                required
                inputProps={{ sx: { "&::placeholder": { color: "white" } } }}
                sx={{ input: { color: 'white' } }}
            />
            <SignInButton type='submit' variant='contained' fullWidth>Sign In</SignInButton>
            <Typography>
                <Link color="inherit" sx={{ '&:hover': { color: '#dd00ff' } }}>
                    Forgot password?
                </Link>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}