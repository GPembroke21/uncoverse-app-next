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

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
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

const Main = styled(Grid)(({ theme }) => ({
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center", 
    // overflow: "hidden",
    // marginLeft: 0,
    // marginRight: 0,
}));

const LanderImageContainer = styled(Box)(({ theme }) => ({
    // position: 'absolute',
    // justifyContent: "flex-end",
    // alignItems: "flex-end",
    // bottom: 0,
    // right: 0,
}));

const LanderTextContainer = styled(Box)(({ theme }) => ({
    // position: 'absolute',
    // justifyContent: "flex-start",
    // alignItems: "flex-start",
    // top: 0,
    // left: 0,
    // marginTop: "-150px"
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
    height: "clamp(2rem, 4vw, 4rem)",
    width: "clamp(2rem, 4vw, 4rem)",
    border: "1px solid #252425",
    borderRadius: "25px",
    backgroundColor: '#252425',
    marginRight: '6px',
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
              backgroundColor: (theme) => theme.palette.background.default,
              padding: "0rem 1rem 0rem 2rem",
              maxWidth: "1600px",
              margin: "0 auto",
              overflow: "hidden",
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

            <Main container flexDirection="row">
            <LanderTextContainer
                sx={{
                    marginTop: {xs: "25vw" , sm: "0px",},
                    marginBottom: {xs: "10vw" , sm: "0px",},
                }}
            >
                <Typography variant="h1" sx={{fontSize: "clamp(24px, 2vw, 56px)"}}>
                Where Metaverses Meet
                </Typography>
                <Typography variant="h2" sx={{fontSize: "clamp(16px, 1vw, 42px)"}}>
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
                // width="clamp(1rem, 50vw, 50rem)" 
                // height="clamp(1rem, 50vw, 50rem)"
                sx={{
                    width: {xs: "100vw" , sm: "clamp(1rem, 50vw, 50rem)"}, 
                    height: {xs: "100vw" , sm: "clamp(1rem, 50vw, 50rem)"},
                }}
                >
                <Image src="/landerimage.svg" alt='Lander Image' layout='fill' objectFit="contain" unoptimized={true}/>
            </LanderImageContainer>
            </Main>
            </Dialog>
        </Wrapper>
  )
}