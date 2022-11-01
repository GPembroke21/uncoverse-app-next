import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useStoreInteraction from '../../src/requests/CreateInteraction'
import { favoriteEvents } from '../../src/static/StaticVariables'
import AuthPopup from '../AuthPopup';
import { useLoginContext } from '../ContextProvider';

export default function FavoriteButton(props) {
  const loginCreds = useLoginContext()
  const [fav, setFav] = React.useState(() => {if (favoriteEvents[props.eventId] && favoriteEvents[props.eventId]['s']) { props.setToggle(true) }; return favoriteEvents[props.eventId]})
  const [authOpen, setAuthOpen] = React.useState(false)

  const handleClick = () => {
    if (!loginCreds.signedIn && !authOpen) {
      setAuthOpen(true)
    } else if (loginCreds.signedIn) {
      if ((!fav || !fav['s']) && !props.toggle) {
        setFav({ 'i': props.ind, 's': true })
        props.setToggle(true)
        useStoreInteraction({ eventId: props.eventId, index: props.ind, state: true, creds: loginCreds })
      } else if ((fav && fav['s']) || props.toggle) {
        setFav({ 'i': props.ind, 's': false })
        props.setToggle(false)
        useStoreInteraction({ eventId: props.eventId, index: props.ind, state: false, creds: loginCreds })
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
          (!props.toggle) ?
            <FavoriteBorderIcon
              style={{ height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)" }}
            /> :
            <FavoriteIcon
              style={{ height: "clamp(0.8rem, 2vw, 1.1rem)", width: "clamp(0.8rem, 2vw, 1.1rem)" }}
            />
        }
        {!loginCreds.signedIn &&
          <AuthPopup open={authOpen} setOpen={() => setAuthOpen(false)} />
        }
      </IconButton>
    </Stack>
  );
}