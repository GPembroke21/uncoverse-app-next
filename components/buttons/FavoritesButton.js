// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Link from 'next/link';
// import { useFiltersFavoritesContext, useFiltersContextUpdate } from '../ContextProvider';

// export default function FavoritesButton() {
//   const filtersUpdate = useFiltersContextUpdate()
//   const favoritesFilter = useFiltersFavoritesContext()

//   return (
//     <Stack spacing={2} direction="row">
//       <Button
//         variant="contained"
//         endIcon={<FavoriteIcon sx={{ width: '0.5em', height: '0.5em' }} />}
//         sx={{backgroundColor: "#252425", fontSize: "clamp(8px, 1vw, 14px)", borderRadius: '7px', marginRight: '10px', height: "2.5em", width: "11em" }}
//         style={favoritesFilter? { color: "#dd00ff" } : { color: "white" } }
//         onClick={() => filtersUpdate.toggleFavorites()}
//       >
//         Favorites
//       </Button>
//     </Stack>
//   );
// }
