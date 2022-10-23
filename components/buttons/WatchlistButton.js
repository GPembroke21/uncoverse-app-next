import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from 'next/link';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row" sx={{display: { xs: 'none', sm: 'revert' }}}>
        <Button 
        variant="contained"
        endIcon={<FavoriteIcon sx={{ width: '0.5em', height: '0.5em' }}/>}
        sx={{
            color: "white", 
            backgroundColor: "#2e2e2e", 
            fontSize: "clamp(8px, 1vw, 14px)", 
            borderRadius: '25px',
            // padding: '0px 10px 0px 10px',
            marginRight: '10px',
            height: "2.5em",
            width: "11em",
          }}
          style={{
            backgroundColor: "#2e2e2e", 
          }}
        >
          <Link href="/watchlist">
            Favorites
          </Link>
        </Button>
    </Stack>
  );
}
