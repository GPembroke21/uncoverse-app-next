import * as React from 'react';
import Image from 'next/image'
import { styled } from "@mui/system"
import ThemeProvider from "../Theme"
import Grid from "@mui/material/Grid"
import CssBaseline from '@mui/material/CssBaseline'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const Wrapper = styled("div")(({ theme }) => ({
  // height: "100vh",
  overflow: "hidden",
  padding: "0 0",
  background: "#000000",
}));

const Main = styled(Grid)(({ theme }) => ({
  // minHeight: "100vh", 
  color: "#ffffff",
  justifyContent: "center",
  alignItems: "top",
  direction: "column",
  marginTop: "4px",
}));


export default function HighlightsBar() {
  return (
    <ThemeProvider>
    <CssBaseline />
      <Wrapper sx={{ display: { xs: 'none', sm: 'revert' } }}>
        <Main container>
          <Grid item flexGrow={1} padding={'0em 0.25em 0em 0.9em'} sx={{margin: "auto"}}>
            <Card sx={{ 
            width: 1,
            color: "white",
            borderRadius: "12px",
            border: '1px solid #40454d',
            }}>
                <CardHeader sx={{height: "20px"}}
                    avatar={
                        <Image src="/trendingevents.svg" alt='Top Events' width="15rem" height="15rem" />
                    }
                    title="Trending Events"
                    titleTypographyProps={{ fontSize: 'clamp(10px, 1.25vw, 13px)' }}
                />
                <Divider sx={{background:'#40454d'}}/>
                <CardContent>
                    <Grid container marginTop={-1} marginBottom={-1.5}>
                        <Grid item marginRight={2}>
                            <Typography variant="body2" fontSize="clamp(10px, 1.25vw, 13px)">
                                1<br/>2<br/>3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                Event_Name<br/>Event_Name<br/>Event_Name
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>
          <Grid item flexGrow={1} padding={'0em 0.25em 0em 0.25em'} sx={{margin: "auto"}}>
            <Card sx={{ 
            width: 1,
            color: "white",
            borderRadius: "12px",
            border: '1px solid #40454d',
            }}>
                <CardHeader sx={{height: "20px"}}
                    avatar={
                        <Image src="/topcreators.svg" alt='Top Creators' width="15rem" height="15rem" />
                    }
                    title="Top Creators"
                    titleTypographyProps={{ fontSize: 'clamp(10px, 1.3vw, 14px)' }}
                />
                <Divider sx={{background:'#40454d'}}/>
                <CardContent>
                    <Grid container marginTop={-1} marginBottom={-1.5}>
                        <Grid item marginRight={2}>
                            <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                1<br/>2<br/>3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                Creator_Name<br/>Creator_Name<br/>Creator_Name
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>
          <Grid item flexGrow={1} padding={'0em 0.9em 0em 0.25em'} sx={{margin: "auto"}}>
            <Card sx={{ 
            width: 1,
            color: "white",
            borderRadius: "12px",
            border: '1px solid #40454d',
            }}>
                <CardHeader sx={{height: "20px"}}
                    avatar={
                        <Image src="/topcategories.svg" alt='Top Categories' width="15rem" height="15rem" />
                    }
                    title="Top Categories"
                    titleTypographyProps={{ fontSize: 'clamp(10px, 1.3vw, 14px)' }}
                />
                <Divider sx={{background:'#40454d'}}/>
                <CardContent>
                    <Grid container marginTop={-1} marginBottom={-1.5}>
                        <Grid item marginRight={2}>
                            <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                1<br/>2<br/>3
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" fontSize="clamp(10px, 1.3vw, 14px)">
                                Category<br/>Category<br/>Category
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
          </Grid>
        </Main>
      </Wrapper>
    </ThemeProvider>
  )
}