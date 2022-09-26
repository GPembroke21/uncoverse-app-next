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
            style={{height: "0.75rem", width: "0.75rem"}}
            />
        </IconButton>
        }
        {fav &&
        <IconButton aria-label="delete"
        onClick={() => { setFav(!fav) }} 
        style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
            <StarRoundedIcon 
            style={{ height: "0.75rem", width: "0.75rem" }}
            />
        </IconButton>
        }
    </Stack>
  );
}
