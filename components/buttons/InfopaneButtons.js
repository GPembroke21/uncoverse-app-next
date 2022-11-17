import * as React from 'react'
import { styled } from "@mui/system"
import Grid from '@mui/material/Grid'
import Button from "@mui/material/Button"
import Link from 'next/link'
import FavoriteButton from './FavoriteButton'

const ButtonContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("xs")]: {
    flexDirection: "column",
    "> div": {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}));

const InfopaneButton = styled(Button)(({ theme }) => ({
    fontFamily: "Inter",
    fontSize: "min(2vw, 12px)",
    fontWeight: "500",
    textAlign: "center",
    color: "white",
    backgroundColor: "transparent",
    border: "1px solid white",
    borderRadius: "0.4rem",
    // width: "20vw",
    padding: "0.46rem",
    cursor: "pointer",
    marginRight: "1rem",
    "&:hover": {
      border: "1px solid #dd00ff",
      color: "#dd00ff",
    }
}));

export default function InfopaneButtons() {
    return (
        <ButtonContainer container>
            <Grid item flexGrow={1} marginRight={1}>
                <InfopaneButton 
                  fullWidth 
                  variant="contained"
                  endIcon={<FavoriteButton/>}
                  >
                    Favorite
                </InfopaneButton>
            </Grid>
            <Grid item flexGrow={1} marginLeft={1}>
                <InfopaneButton fullWidth variant="contained">
                  Jump to Event
                </InfopaneButton>
            </Grid>
        </ButtonContainer>
    )
}