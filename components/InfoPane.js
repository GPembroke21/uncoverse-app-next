import React from 'react';
import { Dialog, DialogContent, DialogContentText, DialogTitle, Slide, Divider, Box, Grid, Button, Card, Typography } from '@mui/material';
import Image from 'next/image'
import { styled } from "@mui/system"
import FavoriteButtonLarge from './buttons/FavoriteButtonLarge';
import { platformsDict } from '../src/static/StaticVariables';
// import IosShareIcon from '@mui/icons-material/IosShare';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const urlBase = "https://uncoverse.com/event?id="

const InfopaneRow = styled("div")(({ theme }) => ({ display: "flex", alignItems: "flex-start", flexDirection: "row", alignItems: "center" }));
const InfopaneHead = styled(Grid)(({ theme }) => ({ marginBottom: "8px" }));
const InfopaneImage = styled("div")(({ theme }) => ({ position: 'relative' }));
const ImageOverlayContainer = styled("div")(({ theme }) => ({ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: "20em", height: "10em" }));
const FavoriteButtonContainer = styled("div")(({ theme }) => ({ position: 'absolute', top: '1em', right: '1em' }));
const InfopaneInfo = styled(Grid)(({ theme }) => ({ backgroundColor: theme.palette.card.secondary, borderRadius: '6px', marginTop: '15px', padding: '5px 10px', cursor: 'default' }));
const InfopaneDescription = styled('div')(({ theme }) => ({ backgroundColor: theme.palette.card.secondary, borderRadius: '6px', margin: '15px 0px 0px 0px', padding: '5px 10px', height: 'auto', overflow: 'auto', msOverflowStyle: "none", '&::-webkit-scrollbar': { display: 'none' }, scrollbarWidth: "none" }));
const ButtonContainer = styled(Grid)(({ theme }) => ({ [theme.breakpoints.down("xs")]: { flexDirection: "column", "> div": { marginLeft: 0, marginRight: 0 }, }, }));
const InfopaneButton = styled(Button)(({ theme }) => ({ color: "#f5f3f7", backgroundColor: '#21172a', fontSize: "clamp(8px, 1vw, 14px)", borderRadius: '6px', padding: "0.46rem", marginRight: '10px', boxShadow: "none", "&:hover": { color: "#dd00ff", backgroundColor: "#1c1425", boxShadow: "none" }, "&:active": { color: "#dd00ff", backgroundColor: "#120C18", boxShadow: "none" } }));
const Transition = React.forwardRef(function Transition(props, ref) { return <Slide direction="right" ref={ref} {...props} /> })

export default function InfoPane(props) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); return () => { } }, [props.openState])
  if (!props.info) return
  const row = props.info
  const imageLoader = ({ src }) => `${src}`
  const handleClick = () => { setOpen(true); navigator.clipboard.writeText(urlBase + row.id); };

  const currentTime = new Date();

  const dateStyled = rowItem => {
    const dateTimeStart = new Date(rowItem.dateTimeStart);
    const dateTimeEnd = new Date(rowItem.dateTimeEnd);
    const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
    const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US')
    const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US')
    const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ends " + (formattedEndDate + " @ " + formattedEndTime + ")")) : (formattedStartDate + " @ " + formattedStartTime + " - " + formattedEndDate + " @ " + formattedEndTime)
    return dateStyledInfo
  }

  const dateStyledShort = rowItem => {
    const dateTimeStart = new Date(rowItem.dateTimeStart);
    const dateTimeEnd = new Date(rowItem.dateTimeEnd);
    const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
    const formattedEndDate = (dateTimeEnd.toLocaleDateString('en-US', { year: 'numeric' }) == currentTime.toLocaleDateString('en-US', { year: 'numeric' })) ? dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }) : dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
    const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US')
    const formattedEndTime = dateTimeEnd.toLocaleTimeString('en-US')
    const dateStyledInfo = (dateTimeStart < currentTime) ? ("Active (ends " + formattedEndDate + ")") : (formattedStartDate + " @ " + formattedStartTime)
    return dateStyledInfo
  }

  return (
    <Dialog
      id="dialog-infopane"
      open={props.openState}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.handleCloseFunction}
      aria-describedby="alert-dialog-slide-description"
      sx={{ opacity: "100", backgroundColor: "#120C18", width: { xs: '100vw', sm: '40vw', md: '40vw', lg: '40vw', xl: '25vw' }, maxWidth: { xs: '100vw', sm: '1000px' }, height: '100vh', borderRight: '1px solid #2e2e2e', }}
      PaperProps={{ elevation: 0, sx: { margin: { xs: '24px 24px', sm: '0px 24px' } } }}
      hideBackdrop={true}
    >
      <DialogContent sx={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "#120C18" }}>
        <InfopaneHead>
          <DialogContentText component={'span'}>

            {/* ############################################## IMAGE ############################################## */}
            <InfopaneImage>
              <Image src={row.image} alt={row.name} width="600rem" height="300rem" unoptimized={true} style={{ borderRadius: '8px', cursor: 'default' }} position='relative' />
              {row.imageOverlay &&
                <ImageOverlayContainer>
                  <Image src={row.imageOverlay} layout="fill" objectFit="contain" alt={row.name} unoptimized={true} style={{ borderRadius: '8px', cursor: 'default', zIndex: '1' }} position='relative' />
                </ImageOverlayContainer>
              }
              <FavoriteButtonContainer>
                <FavoriteButtonLarge eventId={row.id} sx={{ cursor: 'pointer', zIndex: '2' }} />
              </FavoriteButtonContainer>
            </InfopaneImage>
          </DialogContentText>

          {/* ########################################### DATE / TITLE ############################################ */}
          <DialogContentText component={'span'} sx={{ cursor: 'pointer', color: (theme) => theme.palette.text.secondary }}>
            <InfopaneRow sx={{ fontSize: "10px", fontWeight: "300" }}>
              {dateStyled(row)}
            </InfopaneRow>
          </DialogContentText>
          <DialogTitle sx={{ padding: '0px 0px', fontSize: '20px', fontWeight: '900', lineHeight: '100%' }}>{row.name}</DialogTitle>
          <DialogContentText component={'span'}>
            <InfopaneRow sx={{ fontSize: "10px", fontWeight: "500", color: (theme) => theme.palette.text.secondary }}>
              {platformsDict[row.platformId]}
              &nbsp;
              &#x2022;
              &nbsp;
              {row.locator}
            </InfopaneRow>
          </DialogContentText>
        </InfopaneHead>

        {/* ############################################### BUTTONS ############################################### */}
        <ButtonContainer container>
          <Grid item marginRight={1} sx={{ flex: '1 0 40%' }}>
            <a href={row.url} target="_blank" rel="noreferrer noopener">
              <InfopaneButton fullWidth variant="contained" sx={{ backgroundImage: "linear-gradient(300deg, #b300ff, #6a02fa, #02fafa)", backgroundSize: '200%', transition: "0.4s", "&:hover": { backgroundPosition: "right", color: "white" } }}>
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

        {/* ###################################### CREATOR / USERS / CATEGORY ###################################### */}
        <InfopaneInfo>
          <DialogContentText component={'span'} sx={{ cursor: 'default' }}>
            <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
              <Box sx={{ marginRight: '10px', mt: '3px' }}>
                <Image src="/creator.svg" alt='Creator' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>Created by</Typography>
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "500" }}>{row.createdByUser}</Typography>
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'}>
            <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
              <Box sx={{ marginRight: '10px', mt: '3px' }}>
                <Image src="/users.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{row.totalAttendees}</Typography>
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>total users</Typography>
              &nbsp;
              &#x2022;
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{row.totalAttendees}</Typography>
              &nbsp;
              <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>active users</Typography>
            </InfopaneRow>
          </DialogContentText>
          <Divider sx={{ margin: '3px 0px' }} />
          <DialogContentText component={'span'}
          // onClick={() => console.log(row)}
          >
            <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500" }}>
              <Box sx={{ marginRight: '10px', mt: '3px' }}>
                <Image src="/category.svg" alt='Category' width="12rem" height="12rem" unoptimized={true} />
              </Box>
              {row.category}
            </InfopaneRow>
          </DialogContentText>
        </InfopaneInfo>

        {/* ########################################### DESCRIPTION ############################################ */}
        <InfopaneDescription>
          <DialogContentText
            id="alert-dialog-slide-description"
            className='non_select'
            sx={{
              lineHeight: '150%',
              cursor: 'default',
              width: '100%',
              overflow: "auto",
              fontSize: "12px",
              fontWeight: "500",
              overflowWrap: "break-word",
            }}
          >
            {row.description}
          </DialogContentText>
        </InfopaneDescription>

        {/* ########################################### CHILD EVENTS ############################################ */}
        {row.childEvents &&
          <nav>
            <DialogTitle sx={{ marginTop: '15px', padding: '0px 10px', fontSize: '13px', fontWeight: '700', lineHeight: '100%' }}>Associated Events</DialogTitle>
            <InfopaneInfo sx={{ marginTop: '5px' }}>
              {props.getAssociatedEvents(row.childEvents)
                .map((childRow, i) => (
                  <nav key={i}>
                    {i !== 0 && <Divider sx={{ margin: '3px 0px' }} />}
                    <DialogContentText component={'span'} onClick={() => props.setInfoPaneRow(childRow.id)}>
                      <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500", cursor: 'pointer', color: (theme) => theme.palette.text.secondary }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{childRow.name}</Typography>
                        &nbsp;
                        &#x2022;
                        &nbsp;
                        <Typography sx={{ fontSize: "12px", fontWeight: "300", color: (theme) => theme.palette.text.secondary }}>{dateStyledShort(childRow)}</Typography>
                      </InfopaneRow>
                    </DialogContentText>
                  </nav>
                ))}
            </InfopaneInfo>
          </nav>
        }

        {/* ########################################### PARENT EVENT ############################################ */}
        {row.parentEvent &&
          <nav>
            <DialogTitle sx={{ marginTop: '15px', padding: '0px 10px', fontSize: '13px', fontWeight: '700', lineHeight: '100%' }}>Main Event</DialogTitle>
            <InfopaneInfo sx={{ marginTop: '5px' }}>
              {props.getAssociatedEvents([row.parentEvent])
                .map((parentRow, i) => (
                  <nav key={i}>
                    {i !== 0 && <Divider sx={{ margin: '3px 0px' }} />}
                    <DialogContentText component={'span'} onClick={() => props.setInfoPaneRow(parentRow.id)}>
                      <InfopaneRow sx={{ fontSize: "12px", fontWeight: "500", cursor: 'pointer', color: (theme) => theme.palette.text.secondary }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: "300" }}>{parentRow.name}</Typography>
                        &nbsp;
                        &#x2022;
                        &nbsp;
                        <Typography sx={{ fontSize: "12px", fontWeight: "300", color: (theme) => theme.palette.text.secondary }}>{dateStyledShort(parentRow)}</Typography>
                      </InfopaneRow>
                    </DialogContentText>
                  </nav>
                ))}
            </InfopaneInfo>
          </nav>
        }
      </DialogContent>
    </Dialog>
  );
}