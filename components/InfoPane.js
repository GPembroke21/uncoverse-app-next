import React from 'react';
import {useState} from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card, } from '@mui/material'; //Popper, Fade, ClickAwayListener 
import Image from 'next/image'
import { styled } from "@mui/system"
import FavoriteButton from './buttons/FavoriteButton';

const urlBase = "https://master.db4mjp2e43zo9.amplifyapp.com/event?id="

const InfopaneRow = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const InfopaneHead = styled(Grid)(({ theme }) => ({ marginBottom: "15px"}));
const InfopaneImage = styled(Card)(({ theme }) => ({ position: 'relative'}));
const FavoriteButtonContainer = styled("div")(({ theme }) => ({ position: 'absolute', top: '1em', right: '1em' }));
const InfopaneInfo = styled(Grid)(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', marginTop: '15px', padding: '5px 10px' }));
const InfopaneDescription = styled('div')(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', margin: '15px 0px 0px 0px', padding: '5px 10px', height: 'auto', overflow: 'auto' }));
const ButtonContainer = styled(Grid)(({ theme }) => ({ [theme.breakpoints.down("xs")]: { flexDirection: "column", "> div": { marginLeft: 0, marginRight: 0 }, }, }));
// const InfopaneButton = styled(Button)(({ theme }) => ({
//   fontFamily: "Inter", 
//   fontSize: "min(2vw, 12px)", 
//   fontWeight: "500", 
//   textAlign: "center", 
//   color: "white", 
//   background: "transparent",
//   border: "1px solid white", 
//   borderRadius: "0.4rem", 
//   padding: "0.46rem", 
//   cursor: "pointer", 
//   "&:hover": { 
//     border: "1px solid #dd00ff", 
//     color: "#dd00ff", 
//     background: "transparent" },
//   "&:active": { 
//     color: "#dd00ff", 
//     backgroundColor: "#000000" },
// }));

const InfopaneButton = styled(Button)(({ theme }) => ({
  color: "#f5f3f7", 
  backgroundColor: '#21172a', 
  fontSize: "clamp(8px, 1vw, 14px)", 
  borderRadius: '6px',
  padding: "0.46rem",
  marginRight: '10px',
  "&:hover": {
      color: "#dd00ff",
      backgroundColor: "#1c1425"
  },
  "&:active": {
    color: "#dd00ff",
    backgroundColor: "#120C18"
  },
}));

// const LinkCopiedPopper = styled(Popper)(({ theme }) => ({ zIndex:"1500", backgroundColor: "transparent", color: "white", fontSize: "12px" }));

const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="right" ref={ref} {...props} /> })

export default function InfoPane(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(()=> { setOpen(false); return () => {}},[props.openState])
  if (!props.info) return
  const row = props.info
  const imageLoader = ({ src }) => `${row.image}`
  
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const initialText = 'Share Event';
  // const [buttonText, setButtonText] = useState(initialText)

  const handleClick = () => {
    // setAnchorEl(event.currentTarget);
    setOpen(true);
    navigator.clipboard.writeText(urlBase + row.id);
    // setButtonText('Link Copied');
    // setTimeout(() => setAnchorEl(null), 3000);
  };

  // setTimeout(() => {
  //   setButtonText(initialText);
  // }, 1000);

  // const handleClickAway = () => {
  //   setOpen(false);
  // };

  // const canBeOpen = open && Boolean(anchorEl);
  // const id = canBeOpen ? 'transition-popper' : undefined;
  
  const currentTime = new Date();
  const dateTimeStart = new Date(row.dateTimeStart);
  const dateTimeEnd = new Date(row.dateTimeEnd);
  const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
  const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ending " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)

  return (
    <Dialog
      open={props.openState}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleCloseFunction}
      aria-describedby="alert-dialog-slide-description"
      sx={{
        opacity: "100",
        backgroundColor: "#120C18",
        width: { xs: '100vw', sm: '75vw', md: '50vw', lg: '50vw', xl: '25vw' },
        maxWidth: { xs: '100vw', sm: '1000px' },
        height: '100vh',
        borderRight: '1px solid #2e2e2e',
      }}
      PaperProps={{ elevation: 0, sx: { margin: { xs: '24px 24px', sm: '0px 24px' } }, backgroundColor: "#120C18" }}
      // BackdropProps={{style: {backgroundColor: "#120C18"}}}
      hideBackdrop="true"
    >
      <DialogContent sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "#120C18" }}>
        <InfopaneHead>
          <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: '900', mb: '10px', mt: '0px', lineHeight: '100%' }}>{row.name}</DialogTitle>
          <DialogContentText component={'span'} sx={{ mb: '10px' }}>
            <InfopaneImage>
              <Image loader={imageLoader} src={row.image} alt={row.name} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'pointer' }} position='relative' />
              <FavoriteButtonContainer>
                <FavoriteButton eventId={row.id} sx={{ cursor: 'pointer' }} />
              </FavoriteButtonContainer>
            </InfopaneImage>
          </DialogContentText>
        </InfopaneHead>
        <ButtonContainer container>
          <Grid item marginRight={1} sx={{ flex: '1 0 40%' }}>
            <InfopaneButton fullWidth variant="contained">
              <a href={row.url} target="_blank" rel="noreferrer noopener">
                Jump to Event
              </a>
            </InfopaneButton>
          </Grid>
          {/* <ClickAwayListener onClickAway={handleClickAway}> */}
            <Grid item marginLeft={1} sx={{ flex: '1 0 40%' }}>
              <InfopaneButton fullWidth aria-describedby="infopane-link-button" variant="contained" onClick={handleClick}>
                {open ? "Link copied" : "Share Event"}
              </InfopaneButton>
              {/* <LinkCopiedPopper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Box sx={{ border: 1, p: 1 , bgcolor: 'black', color: "white", border: "1px solid white", borderRadius: "0.4rem", mt: '15px'}}>
                      Link Copied
                    </Box>
                  </Fade>
                )}
              </LinkCopiedPopper> */}
            </Grid>
          {/* </ClickAwayListener> */}
        </ButtonContainer>
        <InfopaneInfo>
          <DialogContentText component={'span'} sx={{ mt: '15px', cursor: 'pointer' }}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/creator.svg" alt='Creator' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.createdByUser}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'} sx={{ mt: '15px', cursor: 'pointer' }}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/date.svg" alt='Date' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {dateStyledInfo}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.category}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.totalAttendees}
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'}>
            <InfopaneRow>
              <Box sx={{ marginRight: '10px' }}>
                <Image src="/location.svg" alt='Location' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.platformId}
              {row.locator}
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
            style={{ flex: 1, overflow: 'auto' }}
          >
            {row.description}
          </DialogContentText>
        </InfopaneDescription>
      </DialogContent>
    </Dialog>
  );
}