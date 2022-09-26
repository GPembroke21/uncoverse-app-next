import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from "@mui/system"

const AdBarContainer = styled("div")(({ theme }) => ({
  padding: "0rem 1rem",
  margin: "-1px 0px -35px 0px",
}));

export default function TitlebarBelowImageList() {
  return (
    <AdBarContainer>
    <ImageList sx={{ 
      width: "90vw",
      gridAutoFlow: "column",
      gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr)) !important",
      gridAutoColumns: "minmax(150px, 1fr)",
      overflowX:'scroll',
      '&::-webkit-scrollbar':{
          width: 0,
      }
      }}>
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
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Meta',
    subtitle: 'Subtitle',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Verse',
    subtitle: 'Subtitle',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Crypto',
    subtitle: 'Subtitle',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Test',
    subtitle: 'Subtitle',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Images',
    subtitle: 'Subtitle',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'For',
    subtitle: 'Subtitle',
  },
];
