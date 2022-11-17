import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AuthPopup from '../AuthPopup';
import { useLoginContext, useFavoritesContext, useFavoritesContextUpdate } from '../ContextProvider';

export default function FavoriteButton(props) {
  const loginCreds = useLoginContext()
  const favoritesContext = useFavoritesContext()
  const favoritesContextUpdate = useFavoritesContextUpdate()
  const [authOpen, setAuthOpen] = React.useState(false)

  const handleClick = () => {
    if (!loginCreds.signedIn && !authOpen) {
      setAuthOpen(true)
    } else if (favoritesContext && loginCreds.signedIn) {
      if (!favoritesContext.includes(props.eventId)) {
        favoritesContextUpdate.addFavorite(props.eventId)
      } else if (favoritesContext.includes(props.eventId)) {
        favoritesContextUpdate.removeFavorite(props.eventId)
      }
    }
  }

  return (
    <Stack direction="row" spacing={0}>
      <IconButton aria-label="delete" component={'span'}
        onClick={handleClick}
        style={{ padding: 0, marginLeft: "-0.4rem" }}
      >
        {
          (favoritesContext && favoritesContext.includes(props.eventId)) ?
            <FavoriteIcon
              style={{ height: "clamp(0.8rem, 4vw, 2rem)", width: "clamp(0.8rem, 4vw, 2rem)" }}
            />:
            <FavoriteBorderIcon
              style={{ height: "clamp(0.8rem, 4vw, 2rem)", width: "clamp(0.8rem, 4vw, 2rem)" }}
            />
        }
        {!loginCreds.signedIn &&
          <AuthPopup open={authOpen} setOpen={() => setAuthOpen(false)} />
        }
      </IconButton>
    </Stack>
  );
}