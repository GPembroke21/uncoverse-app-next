import React from 'react';
import { styled } from "@mui/system"
import Grid from "@mui/material/Grid"
import FavoriteEventCard from "../components/FavoriteEvents"
import { favoriteEvents } from '../src/static/StaticVariables';

const Wrapper = styled("div")(({ theme }) => ({
  overflow: "hidden",
  padding: "0 0",
  background: "transparent",
}));

const Main = styled(Grid)(({ theme }) => ({
  color: "#ffffff",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  marginLeft: 0,
  marginRight: 0,
}));

const Item = styled(Grid)(({ theme }) => ({
  // margin: 'auto',
  padding: '0em 1em 0em 1em',
  marginBottom: -16,
  width: 'calc(95% * (1/3) + 18px + 0px)',
  [theme.breakpoints.between('xs', 'sm')]: {
    flexGrow: '1',
    width: 'calc(100% * (1) + 0px + 0px)',
    "> div": {
      // marginLeft: 0,
      // marginRight: 0,
    },
  },
  [theme.breakpoints.between('sm', 'md')]: {
    width: 'calc(100% * (1/2) + 0px + 0px)',
    "> div": {
      // marginLeft: 0,
      // marginRight: 0,
    },
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% * (1/3) + 0px + 0px)',
    "> div": {
      // marginLeft: 0,
      // marginRight: 0,
    },
  },
}));


export default function Watchlist(props) {
  return (
    <Wrapper>
      <Main container>
        {Object.keys(favoriteEvents).map((keyName, i) => (
          <Item key={i} item>
            <FavoriteEventCard item={props.eventList.data[favoriteEvents[keyName]['i']]} />
          </Item>
        ))}
          {/* <button onClick={() => console.log(props.eventList.data[0])}>000</button> */}
      </Main>
    </Wrapper>
  )
}