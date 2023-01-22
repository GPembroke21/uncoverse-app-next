import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import Image from 'next/image'
import { Box, InputBase, Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Divider, Grid, IconButton, Typography, Button, Menu, MenuItem, Select, Chip, FormControl, OutlinedInput, Stack } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteCategoriesCard from '../components/FavoriteCategoriesCard'

const Main = styled(Grid)(({ theme }) => ({
  maxHeight: '50em',
  color: "#ffffff",
  margin: "4vw 0em",
  padding: "0em 2em",
  flexDirection: "row",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    // justifyContent: "left",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const InfoGrid = styled(Grid)(({ theme }) => ({
  marginRight: "25px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const AvatarBox = styled("button")(({ theme }) => ({ 
  border: "0px solid #282b2f", 
  borderRadius: "8px", 
  // width: "min(40vw, 240px)",
  // height: "min(40vw, 240px)", 
  marginBottom: "13px",
  padding: "0.46rem", 
  cursor: "default", 
  backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)", 
  backgroundSize: '200%', 
  transition: "0.4s", 
  "&:hover": { backgroundPosition: "right", } 
}));

const Links = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    "> div": {
      marginLeft: 20,
      marginRight: 0,
    },
  },
}));


const TextFields = styled(InputBase)(({ theme }) => ({ 
  marginBottom: "12px",
  border: "0.5px solid white",
  borderRadius: "10px",
  // width: "14rem",
  caretColor: "white", 
  '& label.Mui-focused': { 
    color: 'white' 
  }, 
  '& .MuiInput-underline:after': { 
    borderBottomColor: 'white' 
  }, 
  '& .MuiOutlinedInput-root': { 
    '& fieldset': { borderColor: 'white' }, 
    '&:hover fieldset': { borderColor: 'white' }, 
    '&.Mui-focused fieldset': { borderColor: 'white' } 
  }, 
  "& .MuiInputLabel-root": { 
    color: 'white' 
  },
}))

const LinkContainer = styled(Grid)(({ theme }) => ({  
  // display: "flex", 
  // alignItems: "flex-start", 
  // flexDirection: "row", 
  // alignItems: "center"
}))

export default function Test() {
  return (
        <Main container>
            <InfoGrid>
                {/* <Grid item position="relative" width="min(40vw, 200px)" height="min(40vw, 200px)" marginBottom="13px">
                    <Image src='/profile.svg' layout="fill" objectFit="contain" unoptimized={true} />
                </Grid> */}
                <AvatarBox
                  disableRipple
                  style={{ backgroundColor: 'transparent' }}
                  disabled
                  cursor="default"
                  sx={{
                    width: {xs: "32vw", sm: "min(40vw, 240px)"},
                    height: {xs: "32vw", sm: "min(40vw, 240px)"},
                    minWidth: "125px",
                    minHeight: "125px",
                  }}
                />
                {/* <Grid item>
                    <EditButton fullWidth>Edit Avatar</EditButton>
                </Grid> */}
                {/* <Grid item marginBottom={1} marginTop={0}>
                    <Typography>Links</Typography>
                </Grid> */}
                <Links>
                  <LinkContainer item>
                    <TextFields
                      placeholder="Twitter" 
                      fullWidth 
                      required 
                      inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                      sx={{ input: { color: 'white' } }}
                      startAdornment={
                        <Box position="relative" width="clamp(1rem, 2vw, 1.5rem)" height="clamp(1rem, 2vw, 1.5rem)" margin="0rem 0.5rem">
                          <Image src="twitterlogo.svg" layout="fill" objectFit="contain" unoptimized={true} />
                        </Box>
                      }
                    />
                  </LinkContainer>
                  <LinkContainer item>
                    <TextFields
                      placeholder="Instagram" 
                      fullWidth 
                      required 
                      inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                      sx={{ input: { color: 'white' } }}
                      startAdornment={
                        <Box position="relative" width="clamp(1rem, 2vw, 1.5rem)" height="clamp(1rem, 2vw, 1.5rem)" margin="0rem 0.5rem">
                          <Image src="instagramlogo.svg" layout="fill" objectFit="contain" unoptimized={true} />
                        </Box>
                      }
                    />
                  </LinkContainer>
                  <LinkContainer item>
                    <TextFields
                      placeholder="Facebook" 
                      fullWidth 
                      required 
                      inputProps={{sx: {"&::placeholder": {color: "white"}}}}
                      sx={{ input: { color: 'white' } }}
                      startAdornment={
                        <Box position="relative" width="clamp(1rem, 2vw, 1.5rem)" height="clamp(1rem, 2vw, 1.5rem)" margin="0rem 0.5rem">
                          <Image src="facebooklogo.svg" layout="fill" objectFit="contain" unoptimized={true} />
                        </Box>
                      }
                    />
                  </LinkContainer>
                </Links>
            </InfoGrid>
            <Grid alignItems="center" flexDirection="column" flex={1} container>
                <Grid item width="100%">
                  <FavoriteCategoriesCard/>
                </Grid>
                {/* <Grid item width="100%">
                    <FavoriteCard>
                      Favorite Creators
                    </FavoriteCard>
                </Grid>
                <Grid item width="100%">
                    <FavoriteCard>
                      Favorite Places
                    </FavoriteCard>
                </Grid> */}
            </Grid>
        </Main>
  )
}