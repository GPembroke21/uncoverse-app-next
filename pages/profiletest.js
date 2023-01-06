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

const FavoriteCard = styled(Card)(({ theme }) => ({ 
  color: "white", 
  borderRadius: "10px", 
  background: theme.palette.card.trending, 
  padding: '0px 0px 0px 2px',
  margin: "12px",
}));

const AvatarBox = styled("button")(({ theme }) => ({ 
  fontFamily: "Inter", 
  fontSize: "0.8rem", 
  fontWeight: "500", 
  textAlign: "center", 
  color: "black", 
  border: "0px solid #282b2f", 
  borderRadius: "0.4rem", 
  width: "min(40vw, 240px)",
  height: "min(40vw, 240px)", 
  marginBottom: "13px",
  padding: "0.46rem", 
  cursor: "pointer", 
  backgroundImage: "linear-gradient(60deg, #b300ff, #6a02fa, #02fafa)", 
  backgroundSize: '200%', 
  transition: "0.4s", 
  "&:hover": { backgroundPosition: "right", } 
}));


const TextFields = styled(InputBase)(({ theme }) => ({ 
  marginBottom: "12px",
  border: "1px solid white",
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
  } 
}))

const LinkContainer = styled(Grid)(({ theme }) => ({  
  display: "flex", 
  alignItems: "flex-start", 
  flexDirection: "row", 
  alignItems: "center"
}))

const Chippy = styled(Chip)(({ theme }) => ({
  background: theme.palette.card.secondary ,
  color: theme.palette.button.hovertext,
  margin: "-6px 0px 12px 12px"
}));

const categories = [
  'Category 1',
  'Category 2',
  'Category 3',
];

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Test() {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => setExpanded(!expanded)

  const [showChip, setShowChip] = useState(false);

  const handleCategoryClick = (categories) => {
    setShowChip(true);
    setAnchorEl(null);
    // setSelectedCategory(categories);
    setSelectedCategory(
      typeof categories === 'string' ? categories.split(',') : categories,
    );
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
        <Main container>
            <Grid marginRight="25px" >
                {/* <Grid item position="relative" width="min(40vw, 200px)" height="min(40vw, 200px)" marginBottom="13px">
                    <Image src='/profile.svg' layout="fill" objectFit="contain" unoptimized={true} />
                </Grid> */}
                <AvatarBox
                  disableRipple
                  style={{ backgroundColor: 'transparent' }}
                  disabled
                  cursor="default"
                />
                {/* <Grid item>
                    <EditButton fullWidth>Edit Avatar</EditButton>
                </Grid> */}
                {/* <Grid item marginBottom={1} marginTop={0}>
                    <Typography>Links</Typography>
                </Grid> */}
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
            </Grid>
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