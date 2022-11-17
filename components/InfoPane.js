import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card } from '@mui/material'; //Popper, Fade, ClickAwayListener 
import Image from 'next/image'
import { styled } from "@mui/system"
import FavoriteButtonLarge from './buttons/FavoriteButtonLarge';

const urlBase = "https://www.uncoverse.com/event?id="

const InfopaneRow = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const InfopaneHead = styled(Grid)(({ theme }) => ({ marginBottom: "15px" }));
const InfopaneImage = styled(Card)(({ theme }) => ({ position: 'relative' }));
const FavoriteButtonContainer = styled("div")(({ theme }) => ({ position: 'absolute', top: '1em', right: '1em' }));
const InfopaneInfo = styled(Grid)(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', marginTop: '15px', padding: '5px 10px', cursor: 'default' }));
const InfopaneDescription = styled('div')(({ theme }) => ({ border: '1px solid white', borderRadius: '12px', margin: '15px 0px 0px 0px', padding: '5px 10px', height: 'auto', overflow: 'auto', msOverflowStyle: "none", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: "none" }));
const ButtonContainer = styled(Grid)(({ theme }) => ({ [theme.breakpoints.down("xs")]: { flexDirection: "column", "> div": { marginLeft: 0, marginRight: 0 }, }, }));
const InfopaneButton = styled(Button)(({ theme }) => ({ color: "#f5f3f7", backgroundColor: '#21172a', fontSize: "clamp(8px, 1vw, 14px)", borderRadius: '6px', padding: "0.46rem", marginRight: '10px', "&:hover": { color: "#dd00ff", backgroundColor: "#1c1425" }, "&:active": { color: "#dd00ff", backgroundColor: "#120C18" } }));
const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="right" ref={ref} {...props} /> });
const InfopaneRowDescription = styled(InfopaneRow)(({ theme }) => ({ fontSize: "clamp(8px, 2vw, 12px)", fontWeight: "500" }));


const InfopaneInfoTop = styled("div")(({ theme }) => ({ 
  display: "flex", 
  alignItems: "flex-start", 
  flexDirection: "row", 
  alignItems: "center",
  justifyContent: "space-between"
}));

const InfopaneInfoBottom = styled("div")(({ theme }) => ({ 
  display: "flex", 
  alignItems: "flex-start", 
  flexDirection: "row", 
  alignItems: "center",
  justifyContent: "space-between"
}));


export default function InfoPane(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); return () => { } }, [props.openState])
  if (!props.info) return
  const row = props.info
  const imageLoader = ({ src }) => `${row.image}`
  const handleClick = () => { setOpen(true); navigator.clipboard.writeText(urlBase + row.id); };

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
      id="dialog-infopane"
      open={props.openState}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleCloseFunction}
      aria-describedby="alert-dialog-slide-description"
      sx={{ opacity: "100", backgroundColor: "#120C18", width: { xs: '100vw', sm: '75vw', md: '50vw', lg: '50vw', xl: '25vw' }, maxWidth: { xs: '100vw', sm: '1000px' }, height: '100vh', borderRight: '1px solid #2e2e2e', }}
      PaperProps={{ elevation: 0, sx: { margin: { xs: '24px 24px', sm: '0px 24px' } } }}
      hideBackdrop={true}
    >
      <DialogContent sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "#120C18" }}>
        <InfopaneHead>

          <InfopaneInfoTop>
            <DialogContentText component={'span'}>
              <InfopaneRowDescription>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/location.svg" alt='Location' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {row.platformId}
                {row.locator}
              </InfopaneRowDescription>
            </DialogContentText>
            <DialogContentText component={'span'}>
              <InfopaneRowDescription>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {row.category}
              </InfopaneRowDescription>
            </DialogContentText>
          </InfopaneInfoTop>

          <DialogContentText component={'span'} sx={{ mb: '10px' }}>
            <InfopaneImage>
              <Image loader={imageLoader} src={row.image} alt={row.name} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'default' }} position='relative' />
              <FavoriteButtonContainer>
                <FavoriteButtonLarge eventId={row.id} sx={{ cursor: 'pointer' }} />
              </FavoriteButtonContainer>
            </InfopaneImage>
          </DialogContentText>

          <InfopaneInfoBottom>
            <DialogContentText component={'span'} sx={{ cursor: 'default' }}>
              <InfopaneRowDescription>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/creator.svg" alt='Creator' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {row.createdByUser}
              </InfopaneRowDescription>
            </DialogContentText>
            <DialogContentText component={'span'} sx={{ cursor: 'default' }}>
              <InfopaneRowDescription>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/date.svg" alt='Date' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {dateStyledInfo}
              </InfopaneRowDescription>
            </DialogContentText>
            <DialogContentText component={'span'}>
              <InfopaneRowDescription>
                <Box sx={{ marginRight: '10px' }}>
                  <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
                </Box>
                {row.totalAttendees}
              </InfopaneRowDescription>
            </DialogContentText>
          </InfopaneInfoBottom>

        </InfopaneHead>
        <ButtonContainer container>
          <Grid item marginRight={1} sx={{ flex: '1 0 40%' }}>
            <a href={row.url} target="_blank" rel="noreferrer noopener">
              <InfopaneButton fullWidth variant="contained">
                Jump to Event
              </InfopaneButton>
            </a>
          </Grid>
          <Grid item marginLeft={1} sx={{ flex: '1 0 40%' }}>
            <InfopaneButton fullWidth aria-describedby="infopane-link-button" variant="contained" onClick={handleClick}>
              {open ? "Link copied" : "Share Event"}
            </InfopaneButton>
          </Grid>
        </ButtonContainer>
        <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: '900', mb: '10px', mt: '10px', lineHeight: '100%' }}>{row.name}</DialogTitle>
        {/* <InfopaneInfo>
          <Divider sx={{ margin: '3px 0px' }} />
          <Divider sx={{ margin: '3px 0px' }} />
          <Divider sx={{ margin: '3px 0px' }} />
          <Divider sx={{ margin: '3px 0px' }} />
        </InfopaneInfo> */}
        <InfopaneDescription>
          <DialogContentText
            id="alert-dialog-slide-description"
            className='non_select'
            sx={{
              lineHeight: '150%',
              cursor: 'default',
              width: '100%',
              overflow: "auto",
            }}
          >
            {row.description}
          </DialogContentText>
        </InfopaneDescription>
      </DialogContent>
    </Dialog>
  );
}