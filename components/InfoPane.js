import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card } from '@mui/material';
import Image from 'next/image'
import FavoriteButton from './buttons/FavoriteButton'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from "@mui/system"

const InfopaneRow = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const InfopaneHead = styled(Grid)(({ theme }) => ({
}));

const InfopaneImage = styled(Card)(({ theme }) => ({
  position: 'relative',
}));

const FavoriteButtonContainer = styled("div")(({ theme }) => ({
  position: 'absolute',
  top: '1em',
  right: '1em',
}));

const InfopaneInfo = styled(Grid)(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  marginTop: '15px',
  padding: '5px 10px'
}));

const InfopaneDescription = styled('div')(({ theme }) => ({
  border: '1px solid white', 
  borderRadius: '12px',
  margin: '15px 0px 0px 0px',
  padding: '5px 10px',
  height: 'auto',
  overflow: 'auto' 
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const InfopaneButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "min(2vw, 12px)",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    // backgroundColor: "#252425",
    border: "1px solid white",
    borderRadius: "0.4rem",
    padding: "0.46rem",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #dd00ff",
      color: "#dd00ff",
      // backgroundColor: "#121213",
    },
    "&:active": {
      color: "#dd00ff",
      backgroundColor: "#000000"
    },
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
        // flexDirection="column"
        sx={{
          opacity: "100",
          backgroundColor: "black",
          width: { xs: '100vw', sm: '75vw', md: '50vw', lg: '50vw', xl: '25vw' },
          maxWidth: { xs: '100vw', sm: '1000px' },
          height: '100vh',
          borderRight: '2px solid #2e2e2e',
        }}
        PaperProps={{ sx: {margin: { xs: '24px 24px', sm: '0px 24px' }} }}
      >
        <DialogContent sx={{height: '100vh', display: 'flex', flexDirection: 'column'}}>
          <InfopaneHead>
            <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: 'bold', mb: '10px', mt: '-10px', lineHeight: '100%' }}>{props.row.name}</DialogTitle>
            <DialogContentText component={'span'} sx={{ mb: '10px' }}>
              <InfopaneImage>
                <Image loader={imageLoader} src={props.row.image} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'pointer' }} position='relative'/>
                <FavoriteButtonContainer>
                  {props.favoritesBtn}
                </FavoriteButtonContainer>
              </InfopaneImage>
            </DialogContentText>
          </InfopaneHead>
          <ButtonContainer container>
            <Grid item marginRight={1} sx={{flex: '1 0 40%'}}>
                <InfopaneButton fullWidth variant="contained">
                <a href={props.row.url} target="_blank" rel="noreferrer noopener">
                  Jump to Event
                </a>
                </InfopaneButton>
            </Grid>
            <Grid item marginLeft={1} sx={{flex: '1 0 40%'}}>
                <InfopaneButton fullWidth variant="contained">
                    Share Event
                </InfopaneButton>
            </Grid>
          </ButtonContainer>
          <InfopaneInfo>
          <DialogContentText component={'span'} sx={{mt: '15px', cursor: 'pointer' }}>
              <InfopaneRow>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/creator.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {props.row.createdByUser}
              </InfopaneRow>
            </DialogContentText>
            <Divider sx={{margin: '3px 0px'}}/>
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
                  {props.row.platformId}
                  {props.row.locator}
              </InfopaneRow>
            </DialogContentText>
          </InfopaneInfo>
          <InfopaneDescription>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ 
                lineHeight: '150%', 
                cursor: 'pointer',
                width: '100%', 
                overflow: "auto",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                '&::-webkit-scrollbar': {
                display: "none",
                width: 0,
                },
              }}
              style={{ flex: 1, overflow: 'auto'}}
              >
              {props.row.description}
            </DialogContentText>
          </InfopaneDescription>
        </DialogContent>
      </Dialog>
  );
}
