import React from 'react'
import { useState } from 'react'
import { styled } from "@mui/system"
import Image from 'next/image'
import { Card, CardHeader, CardContent, CardActions, Collapse, Divider, Grid, IconButton, Typography, Button, Menu, MenuItem, Chip, Stack } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteCategoriesTable from './FavoriteCategoriesTable'

const FavoriteCard = styled(Card)(({ theme }) => ({ 
  color: "white", 
  borderRadius: "10px", 
  background: theme.palette.card.trending, 
  padding: '0px 0px 0px 2px',
//   margin: "12px",
}));

const CategoryButton = styled(Button)(({ theme }) => ({ 
    color: theme.palette.button.text, 
    background: theme.palette.card.trending, 
    fontSize: "clamp(8px, 1vw, 14px)", 
    borderRadius: '7px', 
    marginRight: '10px', 
    height: "2.5em", 
    // width: "11em", 
    "&:hover": { 
        color: theme.palette.button.hovertext, 
        background: theme.palette.button.hover 
    } 
}));


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

  const [showChip, setShowChip] = useState(false);

  const handleCategoryClick = (categories) => {
    setShowChip(true);
    setAnchorEl(null);
    // setSelectedCategory(categories);
    setSelectedCategory(
      typeof categories === 'string' ? categories.split(',') : categories,
    );
  };

  const chipDelete = () => {
    setShowChip(false);
    setSelectedCategory(null);
  };

  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => setExpanded(!expanded)

  return (
    <FavoriteCard>
        <CardHeader
        title="Favorite Categories"
        titleTypographyProps={{ fontWeight: 'bold' }}
        // subheader="Subheader"
        // subheaderTypographyProps={{ color: 'white' }}
        sx={{ mb: "-5px" }}
        >
        </CardHeader>
        {selectedCategory && 
        <Stack direction="row" spacing={1}>
            <Chippy clickable key={selectedCategory} label={selectedCategory} onDelete={chipDelete} />
        </Stack>
        }
        <Divider sx={{ background: '#40454d' }} />
        <CardActions disableSpacing sx={{ height: '40px', backgroundColor: (theme) => theme.palette.card.secondary }}>
            <CategoryButton
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            sx={{
                fontSize: "min(2vw, 10px)",
            }}
            >
            Categories
            </CategoryButton>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
                style: {
                border: "0px solid black",
                }
            }}
            PaperProps={{
                style: {
                    borderRadius: "8px"
                }
            }}
            >
            {categories.map((category) => (
                <MenuItem
                key={category}
                value={category}
                onClick={() => handleCategoryClick(category)}
                sx={{
                    background: (theme) => theme.palette.card.trending, 
                    "&:hover": { 
                        color: (theme) => theme.palette.button.hovertext,
                        backgroundColor: (theme) => theme.palette.card.secondary, 
                    } 
                }}
                >
                {category}
                </MenuItem>
            ))}
            </Menu>
            <Typography variant='h4'>Select a category to get started</Typography>
            <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon />
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ backgroundColor: (theme) => theme.palette.card.secondary }}>
            <CardContent sx={{ margin: "-20px 0px 0px 0px" }} >
            <Divider sx={{ background: '#40454d', marginTop: "4px" }} />
                <FavoriteCategoriesTable/>
            </CardContent>
        </Collapse>
    </FavoriteCard>
  )
}