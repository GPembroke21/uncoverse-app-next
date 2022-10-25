import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid } from '@mui/material';
import Image from 'next/image'
import FavoriteButton from './buttons/FavoriteButton'
import InfopaneButtons from "./buttons/InfopaneButtons"
import { styled } from "@mui/system"

const InfopaneRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const InfopaneInfo = styled(Grid)(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  marginTop: '15px',
  padding: '5px 10px'
}));

const InfopaneDescription = styled(Grid)(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  marginTop: '15px',
  padding: '5px 10px',
  // maxHeight: '100%',
}));

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="right" ref={ref} {...props} /> })

export default function InfoPane(props) {
//   const [open, setOpen] = React.useState(false)
//   const handleClickOpen = () => { setOpen(true) }
//   const handleClose = () => { setOpen(false) }
  const imageLoader = ({ src }) => `${props.row.image}`

  return (
    <Dialog
        open={props.openState}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleCloseFunction}
        aria-describedby="alert-dialog-slide-description"
        direction="column"
        sx={{
          opacity: "100",
          backgroundColor: "black",
          width: { xs: '100vw', sm: '75vw', md: '50vw', lg: '50vw', xl: '25vw' },
          maxWidth: { xs: '100vw', sm: '1000px' },
          height: '100vh',
          borderRight: '2px solid #2e2e2e'
        }}
        PaperProps={{ sx: {margin: { xs: '24px 24px', sm: '0px 24px' }} }}
      >
        <DialogContent sx={{ fontSize: '10px', color: 'white', mb: '-34px', mt: '-10px', cursor: 'pointer' }}>Metaverse_name</DialogContent>
        <DialogTitle sx={{ fontSize: '20px', fontWeight: 'bold', mb: '-5px', lineHeight: '100%', cursor: 'pointer' }}>{props.row.name}</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ mb: '10px' }}>
            <Image loader={imageLoader} src={props.row.image} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'pointer' }} />
          </DialogContentText>
          <InfopaneButtons/>
          <InfopaneInfo>
          <DialogContentText component={'span'} sx={{mt: '15px', cursor: 'pointer' }}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/date.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {props.dateStyled}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {props.row.category}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {props.row.totalAttendees}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{margin: '3px 0px'}}/>
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/location.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              <a href={props.row.url} target="_blank" rel="noreferrer noopener">
                {props.row.locator}
              </a>
            </InfopaneRow>
          </DialogContentText>
          </InfopaneInfo>
          {/* <br /> */}
          <InfopaneDescription>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ lineHeight: '150%', cursor: 'pointer'}}
              style={{ maxHeight: 60, overflow: 'auto' }}>
              {props.row.description}
            </DialogContentText>
          </InfopaneDescription>
        </DialogContent>
      </Dialog>
  );
}
