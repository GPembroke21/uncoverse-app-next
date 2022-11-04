import React, { useEffect, useState } from "react";
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from "@mui/system"
import { NoEncryption } from '@mui/icons-material';
import { categoryList } from "../src/static/StaticVariables";

const AdBarContainer = styled("div")(({ theme }) => ({
  // padding: "0rem 1rem",
  margin: "0rem 1rem -1rem 1rem",
  // margin: "-0.2rem 0rem -2.2rem 0rem",
}));

export default function TitlebarBelowImageList() {
  const [horizontalScroll, setHorizontalScroll] = useState(0);
  const [scrollWidth, setScrollWidth] = useState();
  const [clientWidth, setClientWidth] = useState();
  const imageLoader = ({ src }) => `${src}?w=248&fit=crop&auto=format`

  useEffect(() => {
    const imageListEl = document.querySelector("#imageList");

    imageListEl?.addEventListener(
      "scroll",
      () => {
        console.log("position left is", imageListEl.scrollLeft);
        console.log("scroll width", imageListEl.scrollWidth);
        console.log("client width", imageListEl.clientWidth);
        setHorizontalScroll(imageListEl?.scrollLeft);
        setScrollWidth(imageListEl?.scrollWidth);
        setClientWidth(imageListEl?.clientWidth);
      },
      { passive: true }
    );
  }, [horizontalScroll], [scrollWidth], [clientWidth]);

  return (
    <AdBarContainer>
    <ImageList
      id="imageList"
      sx={{ 
      width: "100%",
      gridAutoFlow: "column",
      gridTemplateColumns: "repeat(auto-fill,minmax(15em, 1fr)) !important",
      gridAutoColumns: "minmax(15em, 1fr)",
      overflowX:'scroll',
      maskImage:
      scrollWidth === clientWidth
        ? [""]
        :
      scrollWidth === (clientWidth + horizontalScroll)
        ? [
            "linear-gradient(to left, black calc(100% - 48px), transparent 100%)",
          ]
        :
      horizontalScroll > 0
        ? [
            "linear-gradient(to left, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)",
            "linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)",
          ]
        :
      horizontalScroll === 0
        ? [
            "linear-gradient(to right, black calc(100% - 48px), transparent 100%)",
          ]
      //   :
      // scrollWidth === (null)
      //   ? [
      //       "none"
      //     ]
        : [""],
      scrollbarWidth: "none" /* Firefox */,
      "&::-webkit-scrollbar": {
        display: "none"
      } /* Chrome */
      }}
      gap= {10}
      variant= 'standard'
      rowHeight= "auto"
      >
      {/* {console.log("pos", horizontalScroll)} */}
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
    img: '/oldadbar1.jpg',
    title: 'Most Active Metaverse',
    subtitle: 'Event name goes here',
  },
  {
    key: 2,
    img: '/oldadbar2.jpg',
    title: 'Creator Cafe',
    subtitle: 'Resources for creators',
  },
  {
    key: 3,
    img: '/oldadbar1.jpg',
    title: 'Uncoverse Pod',
    subtitle: 'Perspectives on Web3',
  },
  {
    key: 4,
    img: '/oldadbar2.jpg',
    title: 'Top Categories',
    subtitle: 'Most active categories',
  },
  {
    key: 5,
    img: '/oldadbar1.jpg',
    title: 'Gaming',
    subtitle: 'Gaming subtitle',
  },
];