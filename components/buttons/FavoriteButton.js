import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function FavoriteButton() {

  const [fav, setFav] = React.useState(false);

  return (
    <Stack direction="row" spacing={0}>
        {!fav && 
        <IconButton aria-label="delete"
        onClick={() => { setFav(!fav) }} 
        style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
            <FavoriteBorderIcon 
            style={{height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)"}}
            />
        </IconButton>
        }
        {fav &&
        <IconButton aria-label="delete"
        onClick={() => { setFav(!fav) }} 
        style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
            <FavoriteIcon 
            style={{height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)"}}
            />
        </IconButton>
        }
    </Stack>
  );
}