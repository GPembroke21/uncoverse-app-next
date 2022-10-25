import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteButton from './buttons/FavoriteButton';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Image from 'next/image'

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

export default function FavoriteEventCard(props) {
  const { item } = props
  const [expanded, setExpanded] = React.useState(false)
  const handleExpandClick = () => setExpanded(!expanded)

  const dateTimeStart = new Date(item.dateTimeStart);
  const dateTimeEnd = new Date(item.dateTimeEnd);
  const formattedStartDate = dateTimeStart.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedEndDate = dateTimeEnd.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
  const formattedStartTime = dateTimeStart.toLocaleTimeString('en-US', { timeZone: 'EST', timezoneName: 'short', timeStyle: 'short' })
  const dateA = formattedStartDate + " - " + formattedEndDate

  return (
    <Card sx={{
      width: 1,
      backgroundColor: "#282b2f",
      color: "white",
      borderRadius: "15px",
      border: '1px solid #40454d',
      margin: "20px 0px"
    }}>
      <CardMedia
        component="img"
        height="194"
        image={item.image}
      />
      <a href={item.url} target="_blank" rel="noreferrer noopener">
        <CardHeader
          // action={
          //   <Grid margin={'6px 10px 0px 0px'}>
          //     <FavoriteButton />
          //   </Grid>
          // }
          title={item.name}
          titleTypographyProps={{ fontWeight: 'bold' }}
          subheader={dateA}
          subheaderTypographyProps={{ color: 'white' }}
          sx={{ mb: "-5px" }}
        >
        </CardHeader>
      </a>
      <Divider sx={{ background: '#40454d' }} />
      <CardActions disableSpacing sx={{ height: '40px', backgroundColor: '#1a1c1f' }}>
        <Grid marginLeft={'12px'}>
            <FavoriteButton />
        </Grid>
        <Grid
          container
          marginLeft={1.2}
        >
          <Typography variant='h4'>Users: {item.totalAttendees}</Typography>
          <Typography variant='h4' sx={{ color: '#40454d', fontWeight: '700' }} >&nbsp;&nbsp;|&nbsp;&nbsp;</Typography>
          <Typography variant='h4' sx={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '7rem', overflow: 'hidden'}}>{item.category}</Typography>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ backgroundColor: '#1a1c1f' }}>
        <CardContent sx={{ margin: "-20px 0px 0px 0px" }} >
          <Typography variant='h4'>
            {item.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
