import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteButton from './buttons/FavoriteButton'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ 
      maxWidth: 336,
      backgroundColor: "#282b2f",
      color: "white",
      borderRadius: "15px",
      border: '1px solid #40454d',
      margin:"20px 0px"
      }}>
      <CardMedia
        component="img"
        height="194"
        image="/adbar2.jpg"
      />
      <CardHeader
        action={
          <IconButton>
            <FavoriteButton/>
          </IconButton>
        }
        title="Event Name"
        subheader="October 10, 2022"
        subheaderTypographyProps={{ color: 'white' }}
        sx={{mb:"-5px"}}
      />
      <Divider sx={{background:'#40454d'}}/>
      <CardActions disableSpacing sx={{height:'40px', backgroundColor: '#1a1c1f'}}>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          marginLeft={1.2}
        >
          <Typography variant='h4'>Users: 69</Typography>
          <Typography variant='h4' sx={{color:'#40454d', fontWeight:'700'}} >&nbsp;&nbsp;|&nbsp;&nbsp;</Typography>
          <Typography variant='h4'>Category</Typography>
        </Grid>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit  sx={{backgroundColor: '#1a1c1f'}}>
        <CardContent sx={{margin: "-20px 0px 0px 0px"}} >
          <Typography variant='h4'>
            Description:
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
