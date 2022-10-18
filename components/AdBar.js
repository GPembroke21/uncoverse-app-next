import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from "@mui/system"
import { NoEncryption } from '@mui/icons-material';

const AdBarContainer = styled("div")(({ theme }) => ({
  // padding: "0rem 1rem",
  margin: "0rem 1rem -1rem 1rem",
  // margin: "-0.2rem 0rem -2.2rem 0rem",
}));

const scrollDirection = {
  left: 'linear-gradient(to left, black calc(100% - 48px), transparent 100%)',
  right: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)',
}

export default function TitlebarBelowImageList() {
  return (
    <AdBarContainer>
    <ImageList sx={{ 
      width: "100%",
      gridAutoFlow: "column",
      gridTemplateColumns: "repeat(auto-fill,minmax(15em, 1fr)) !important",
      gridAutoColumns: "minmax(15em, 1fr)",
      overflowX:'scroll',
      maskImage: scrollDirection[scroll.status] ?? 'none',
      // maskImage: 'linear-gradient(to left, black calc(100% - 48px), transparent 100%)',
      // maskImage: 'linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)',
      // '&::-webkit-scrollbar':{
      //     width: 0,
      // }
      scrollbarWidth: "none" /* Firefox */,
      "&::-webkit-scrollbar": {
        display: "none"
      } /* Chrome */
      }}
      gap= {10}
      variant= 'standard'
      rowHeight= "auto"
      >
      {itemData.map((item) => (
        <ImageListItem key={item.key}>
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
    key: 1,
    img: '/adbar1.jpg',
    title: 'Most Active Metaverse',
    subtitle: 'Event name goes here',
  },
  {
    key: 2,
    img: '/adbar2.jpg',
    title: 'Creator Cafe',
    subtitle: 'Resources for creators',
  },
  {
    key: 3,
    img: '/adbar1.jpg',
    title: 'Uncoverse Pod',
    subtitle: 'Perspectives on Web3',
  },
  {
    key: 4,
    img: '/adbar2.jpg',
    title: 'Top Categories',
    subtitle: 'Most active categories',
  },
  {
    key: 5,
    img: '/adbar1.jpg',
    title: 'Gaming',
    subtitle: 'Gaming subtitle',
  },
];