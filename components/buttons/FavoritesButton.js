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
            backgroundColor: "#252425", 
            fontSize: "clamp(8px, 1vw, 14px)", 
            borderRadius: '25px',
            // padding: '0px 10px 0px 10px',
            marginRight: '10px',
            height: "2.5em",
            width: "11em",
            "&:hover": {
              color: "#dd00ff",
            },
          }}
          style={{
            backgroundColor: "#252425", 
          }}
        >
            Favorites
        </Button>
    </Stack>
  );
}
