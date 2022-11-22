import React from 'react'
import { useState, useEffect } from 'react'
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
import Cookies from 'universal-cookie';

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  flexDirection: "column",
}));

const UncoverseContainer = styled(Grid)(({ theme }) => ({ 
    margin: "2rem 0rem 0.5rem 0rem", 
    display: "flex", 
    justifyContent: 'flex-start',
    alignItems: "center", 
}));

const UncoverseLogo = styled(Box)(({ theme }) => ({ 
    objectFit: "contain",  
    marginRight: "0.5rem"
}));

const Main = styled(Grid)(({ theme }) => ({
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
}));

const LanderImageContainer = styled(Box)(({ theme }) => ({}));

const LanderTextContainer = styled(Box)(({ theme }) => ({}));

const LogoBar = styled(Grid)(({ theme }) => ({
    // flex: "1",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: '6px 0px 12px 0px'
  }));
  
  const Logo = styled(Box)(({ theme }) => ({
    position: 'relative',
    height: "clamp(2rem, 3.1vw, 3rem)",
    width: "clamp(2rem, 3.1vw, 3rem)",
    border: "1px solid #252425",
    borderRadius: "25px",
    backgroundColor: '#252425',
    marginRight: '6px',
  }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home(props) {
  const [open, setOpen] = useState(false)
  const cookies = new Cookies('registered');

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    if (cookies.get('registered')) {
      setOpen(false);
    } else if (!cookies.get('registered')) {
       cookies.set('registered', 'true', {
        // path: '/',
       });
       setOpen(true);
    }
  },[])

  return (
        <Wrapper>
          <Dialog 
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              maxWidth: "1600px",
              margin: "0 auto",
              overflow: "hidden",
              height: "100vh"
            //   position: "relative",
            }}
            PaperProps= {{
                style: { width: "100vw", height: "100vh"},
                sx: {padding: "0rem 2rem", overflow: "hidden", backgroundColor: (theme) => theme.palette.background.default}
            }}
            hideBackdrop={true}
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
            <UncoverseContainer sx={{mb:"-30px"}}>
                <UncoverseLogo>
                    <Image src="/uv-logo.svg" alt='Uncoverse Logo' width="40vw" height="40vw" />
                </UncoverseLogo>
                <Typography variant="h1" sx={{fontSize: "clamp(36px, 4vw, 48px)", mb: "9px"}}>uncoverse</Typography>
            </UncoverseContainer>

            <Main container flexDirection="row">
            <LanderTextContainer
                sx={{
                    marginTop: {xs: "25vw" , sm: "0px",},
                    marginBottom: {xs: "10vw" , sm: "0px",},
                }}
            >
                <Typography 
                    variant="h1" 
                    sx={{
                        fontSize: {xs: "clamp(24px, 2vw, 56px)" , sm: "clamp(24px, 2vw, 56px)", md: "clamp(24px, 3vw, 72px)", lg: "clamp(24px, 3vw, 72px)", xl: "clamp(24px, 2vw, 56px)"}
                        }}
                >
                Where Metaverses Meet
                </Typography>
                <Typography 
                    variant="h2" 
                    sx={{
                        fontSize: {xs: "clamp(16px, 1vw, 42px)" , sm: "clamp(16px, 1vw, 42px)", md: "clamp(16px, 1.75vw, 56px)", lg: "clamp(16px, 1.75vw, 56px)", xl: "clamp(16px, 1vw, 42px)"}
                        }}>
                Your Virtual Event Discovery Engine
                </Typography>
                <LogoBar>
                    <Logo>
                        <Image src= '/DCLD_logo.png' alt="Decentraland" layout='fill' objectFit="contain" unoptimized={true}/>
                    </Logo>
                    <Logo>
                        <Image src= '/CRVX_logo.png' alt="Voxels" layout='fill' objectFit="contain" unoptimized={true}/>
                    </Logo>
                    <Logo>
                        <Image src= '/SAND_logo.png' alt="Sandbox" layout='fill' objectFit="contain" unoptimized={true}/>
                    </Logo>
                    <Logo>
                        <Image src= '/SOMN_logo.png' alt="Somnium" layout='fill' objectFit="contain" unoptimized={true}/>
                    </Logo>
                    <Logo>
                        <Image src= '/META_logo.png' alt="Meta" layout='fill' objectFit="contain" unoptimized={true}/>
                    </Logo>
                </LogoBar>
            </LanderTextContainer>
            <LanderImageContainer 
                position="relative" 
                display="block"
                sx={{
                    width: {xs: "100vw" , sm: "clamp(1rem, 50vw, 50rem)"}, 
                    height: {xs: "100vw" , sm: "clamp(1rem, 50vw, 50rem)"},            
                    // marginRight: {xs: "0" , sm: "0", md: "20px", lg: "30px", xl: "40px"}
                }}
                >
                <Image src="/landerimage.svg" alt='Lander Image' layout='fill' objectFit="contain" unoptimized={true} priority/>
            </LanderImageContainer>
            </Main>
            </Dialog>
        </Wrapper>
  )
}