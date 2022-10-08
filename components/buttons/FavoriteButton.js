import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';

export default function FavoriteButton() {

  const [fav, setFav] = React.useState(false);

  return (
    <Stack direction="row" spacing={0}>
        {!fav && 
        <IconButton aria-label="delete"
        onClick={() => { setFav(!fav) }} 
        style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
            <StarBorderRoundedIcon 
            style={{height: "max(min(2vw, 2rem), 0.8rem)", width: "max(min(2vw, 2rem), 0.8rem)"}}
            />
        </IconButton>
        }
        {fav &&
        <IconButton aria-label="delete"
        onClick={() => { setFav(!fav) }} 
        style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
            <StarRoundedIcon 
            style={{height: "max(min(2vw, 2rem), 0.8rem)", width: "max(min(2vw, 2rem), 0.8rem)"}}
            />
        </IconButton>
        }
    </Stack>
  );
}