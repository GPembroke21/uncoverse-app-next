import { styled } from "@mui/system"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"
import ThemeProvider from "../Theme"
import Link from 'next/link'
import Image from 'next/image'
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

const Wrapper = styled(Grid)(({ theme }) => ({
  height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
  padding: "1rem 1.2rem",
  flexDirection: "column",
}));

const UncoverseContainer = styled(Grid)(({ theme }) => ({ 
    margin: "0.5rem 0rem", 
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
  flex: "1",
  display: "flex",
  justifyContent: "top",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "8vw"
}));

const LogoBar = styled(Grid)(({ theme }) => ({
  flex: "1",
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
    flex: "1",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "0.2rem 0rem",
    marginTop: "8vw"
}));

const InfoBox = styled(Grid)(({ theme }) => ({
    position: 'relative',
    marginBottom: '2vw',
    width: 'calc(95% * (1/2) + 18px + 0px)',
    [theme.breakpoints.between('xs', 'sm')]: {
        flexGrow: '1',
        width: 'calc(100% * (1) + 0px + 0px)',
        "> div": {
          // marginLeft: 0,
          // marginRight: 0,
        },
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



export default function Home() {
  return (
    <ThemeProvider>
        <Wrapper>
            <UncoverseContainer>
                <UncoverseLogo>
                    <Image src="/uv-logo.svg" alt='Uncoverse Logo' width="40vw" height="40vw" />
                </UncoverseLogo>
                <Typography variant="h1" sx={{fontSize: "clamp(36px, 4vw, 48px)", mb: "8px"}}>uncoverse</Typography>
            </UncoverseContainer>
            <TextContainer>
                <Typography variant="h1" sx={{fontSize: "clamp(24px, 3vw, 48px)"}}>
                Where Metaverses Meet
                </Typography>
                <Typography variant="h2" sx={{fontSize: "clamp(16px, 3vw, 32px)"}}>
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
                        <Typography sx={{fontSize: "clamp(16px, 1.8vw, 18px)", fontWeight:'400'}}>Browse events across all metaverses</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(10px, 1.2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
                <InfoBox>
                    <Title>
                        <LocalActivityIcon style={{color: 'white', width: "25px", height: '25px', marginRight: "6px"}}/>
                        <Typography sx={{fontSize: "clamp(16px, 1.8vw, 18px)", fontWeight:'400'}}>Discover Virtual Events</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(10px, 1.2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
                <InfoBox>
                    <Title>
                        <QueryStatsIcon style={{color: 'white', width: "25px", height: '25px', marginRight: "6px"}}/>
                        <Typography sx={{fontSize: "clamp(16px, 1.8vw, 18px)", fontWeight:'400'}}>Never Miss Another Event</Typography>
                    </Title>
                    <Subtitle>
                        <Typography sx={{fontSize: "clamp(10px, 1.2vw, 14px)", fontWeight:'100'}}>something something something something something something something something</Typography>
                    </Subtitle>
                </InfoBox>
            </InfoBoxContainer>
        </Wrapper>
    </ThemeProvider>
  )
}