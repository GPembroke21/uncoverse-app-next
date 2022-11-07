import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import Dialog from '@mui/material/Dialog'
import Slide from '@mui/material/Slide';
import Image from 'next/image'
import IconButton from '@mui/material/IconButton';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import CloseIcon from '@mui/icons-material/Close';

const Wrapper = styled(Grid)(({ theme }) => ({
  // height: "100vh",
  // maxWidth: '100%',
  overflow: "hidden",
  background: "#000000",
  // padding: "1rem 1.2rem",
  flexDirection: "column",
}));

const UncoverseContainer = styled(Grid)(({ theme }) => ({ 
    margin: "2rem 0rem 0.5rem 0rem", 
    display: "flex", 
    justifyContent: 'flex-start',
    alignItems: "center", 
    // flexDirection: "row",
}));

const UncoverseLogo = styled(Box)(({ theme }) => ({ 
    objectFit: "contain",  
    marginRight: "0.5rem"
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  // flex: "1",
  display: "flex",
  justifyContent: "top",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "8vw",
  marginBottom: "4vw"
}));

const LogoBar = styled(Grid)(({ theme }) => ({
  // flex: "1",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: '12px 0px 12px 0px'
}));

const Logo = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: "clamp(2rem, 3vw, 3rem)",
  width: "clamp(2rem, 3vw, 3rem)",
  border: "1px solid #252425",
  borderRadius: "25px",
  backgroundColor: '#252425',
  marginRight: '6px',
}));

const InfoBoxContainer = styled(Grid)(({ theme }) => ({
    // flex: "1",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0.2rem 0rem",
    marginTop: "8vw",
    maxWidth: "1400px",
    // [theme.breakpoints.between('xs', 'sm')]: {
    //   flexGrow: '1',
    // },
}));

const InfoBox = styled(Grid)(({ theme }) => ({
    position: 'relative',
    marginBottom: '2vw',
    width: 'calc(95% * (1/2) + 18px + 0px)',
    [theme.breakpoints.between('xs', 'sm')]: {
        flexGrow: '1',
        width: 'calc(100% * (1) + 0px + 0px)',
        marginBottom: "24px",
    },
}));

const Title = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
}));

const Subtitle = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home(props) {
  const [open, setOpen] = useState(true)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
        <Wrapper>
          <Dialog 
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            sx={{
              backgroundColor: "black",
              padding: "0rem 1rem 0rem 2rem",
            }}
            >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: "white",
                paddingRight: '0rem',
              }}
            >
              <CloseIcon />
            </IconButton>
            <UncoverseContainer>
                <UncoverseLogo>
                    <Image src="/uv-logo.svg" alt='Uncoverse Logo' width="40vw" height="40vw" />
                </UncoverseLogo>
                <Typography variant="h1" sx={{fontSize: "clamp(36px, 4vw, 48px)", mb: "8px"}}>uncoverse</Typography>
            </UncoverseContainer>
            <TextContainer>
                <Typography variant="h1" sx={{fontSize: "clamp(24px, 5vw, 56px)"}}>
                Where Metaverses Meet
                </Typography>
                <Typography variant="h2" sx={{fontSize: "clamp(16px, 4vw, 42px)"}}>
                Your Virtual Event Discovery Engine
                </Typography>
            </TextContainer>
            <LogoBar>
                <Logo>
                    <Image src= '/DCLD_logo.png' layout='fill' objectFit="contain" unoptimized={true}/>
                </Logo>
                <Logo>
                    <Image src= '/CRVX_logo.png' layout='fill' objectFit="contain" unoptimized={true}/>
                </Logo>
                <Logo>
                    <Image src= '/SAND_logo.png' layout='fill' objectFit="contain" unoptimized={true}/>
                </Logo>
                <Logo>
                    <Image src= '/SOMN_logo.png' layout='fill' objectFit="contain" unoptimized={true}/>
                </Logo>
                <Logo>
                    <Image src= '/META_logo.png' layout='fill' objectFit="contain" unoptimized={true}/>
                </Logo>
            </LogoBar>
            <InfoBoxContainer>
                <InfoBox>
                    <Title>
                        <EventAvailableIcon style={{color: 'white', width: "25px", height: '25px', marginRight: "6px"}}/>
                        <Typography sx={{fontSize: "clamp(16px, 3vw, 18px)", fontWeight:'400'}}>Browse events across all metaverses</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(12px, 2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
                <InfoBox>
                    <Title>
                        <LocalActivityIcon style={{color: 'white', width: "25px", height: '25px', marginRight: "6px"}}/>
                        <Typography sx={{fontSize: "clamp(16px, 3vw, 18px)", fontWeight:'400'}}>Discover Virtual Events</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(12px, 2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
                <InfoBox>
                    <Title>
                        <QueryStatsIcon style={{color: 'white', width: "25px", height: '25px', marginRight: "6px"}}/>
                        <Typography sx={{fontSize: "clamp(16px, 3vw, 18px)", fontWeight:'400'}}>Never Miss Another Event</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(12px, 2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
            </InfoBoxContainer>
            </Dialog>
        </Wrapper>
  )
}