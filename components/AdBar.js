import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from "@mui/system"

const AdBarContainer = styled("div")(({ theme }) => ({
  padding: "0rem 1rem",
  margin: "-0.2rem 0rem -2.2rem 0rem",
}));

export default function TitlebarBelowImageList() {
  return (
    <AdBarContainer>
    <ImageList sx={{ 
      width: "100%",
      gridAutoFlow: "column",
      gridTemplateColumns: "repeat(auto-fill,minmax(30vw, 1fr)) !important",
      gridAutoColumns: "minmax(30vw, 1fr)",
      overflowX:'scroll',
      '&::-webkit-scrollbar':{
          width: 0,
      }
      }}
      gap= {10}
      variant= 'standard'
      cols= "5"
      rowHeight= "auto"
      >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            style={{borderRadius: 10}}
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>{item.subtitle}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </AdBarContainer>
  );
}

const itemData = [
  {
    img: '/adbar1.jpg',
    title: 'Most Active Metaverse',
    subtitle: 'Event name goes here',
  },
  {
    img: '/adbar2.jpg',
    title: 'Creator Cafe',
    subtitle: 'Resources for creators',
  },
  {
    img: '/adbar1.jpg',
    title: 'Uncoverse Pod',
    subtitle: 'Perspectives on Web3',
  },
  {
    img: '/adbar2.jpg',
    title: 'Top Categories',
    subtitle: 'Most active categories',
  },
  {
    img: '/adbar1.jpg',
    title: 'Gaming',
    subtitle: 'Gaming subtitle',
  },
];