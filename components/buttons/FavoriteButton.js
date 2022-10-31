import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CreateInteraction, StoreInteraction } from '../../src/requests/CreateInteraction'
import { favoriteEvents } from '../../src/static/StaticVariables'


export default function FavoriteButton(props) {

  const [fav, setFav] = React.useState(favoriteEvents[props.eventId])

  return (
    <Stack direction="row" spacing={0}>
      {(!fav || !fav['s']) &&
        <IconButton aria-label="delete"
          onClick={() => { setFav({'i': props.ind, 's': true}), StoreInteraction({ eventId: props.eventId, index: props.ind, state: true }) }}
          style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
          <FavoriteBorderIcon
            style={{ height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)" }}
          />
        </IconButton>
      }
      {fav && fav['s'] &&
        <IconButton aria-label="delete"
          onClick={() => { setFav({'i': props.ind, 's': false}), StoreInteraction({ eventId: props.eventId, index: props.ind, state: false }) }}
          style={{ padding: 0, marginLeft: "-0.4rem" }}
        >
          <FavoriteIcon
            style={{ height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)" }}
          />
        </IconButton>
      }
    </Stack>
  );
}