import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { sizeWidth } from '@mui/system';
import Divider from "@mui/material/Divider"
import Image from 'next/image'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function InfoPane() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{color:'white'}}>
        infopane
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
            opacity:"100",
            backgroundColor:"black",
            width: '100vw',
            height: '100vh'
        }}
      >
        <DialogTitle sx={{fontSize:'20px'}}>{"EventName"}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{color:'white'}}>
            Image
          </DialogContentText>
          <br />
          <DialogContentText sx={{color:'white'}}>
            Time
          </DialogContentText>
          <Divider/>
          <DialogContentText sx={{color:'white'}}>
            Category
          </DialogContentText>
          <Divider/>
          <DialogContentText sx={{color:'white'}}>
            Attendees
          </DialogContentText>
          <Divider/>
          <DialogContentText sx={{color:'white'}}>
            Location
          </DialogContentText>
          <Divider/>
          <br />
          <DialogContentText id="alert-dialog-slide-description" sx={{color:'white'}}>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
