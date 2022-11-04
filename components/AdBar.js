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

  useEffect(() => {
    const imageListEl = document.querySelector("#imageList");

    imageListEl?.addEventListener(
      "scroll",
      () => {
        // console.log("position left is", imageListEl.scrollLeft);
        // console.log("scroll width", imageListEl.scrollWidth);
        // console.log("client width", imageListEl.clientWidth);
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
        : [""],
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
      }}
      gap= {10}
      variant= 'standard'
      rowHeight= "auto"
      >
      {/* {console.log("pos", horizontalScroll)} */}
      {itemData.map((item) => (
        <a key={item.key} href={item.link} target={"_blank"}>
          <ImageListItem>
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
        </a>
      ))}
    </ImageList>
    </AdBarContainer>
  );
}

const itemData = [
  {
    img: '/oldadbar1.jpg',
    title: 'Virtual real estate insights',
    subtitle: 'Who is buying metaverse land?  ',
    link: "https://parcel.so/learn/who-is-buying-virtual-land-in-the-metaverse"
  },
  {
    key: 2,
    img: '/oldadbar1.jpg',
    title: 'Key metrics to consider',
    subtitle: 'How to think about metaverse DAU',
    link: 'https://decentraland.org/blog/announcements/how-many-dau-does-decentraland-have/'
  },
  {
    key: 3,
    img: '/oldadbar1.jpg',
    title: 'Creator café',
    subtitle: 'Exploring content creation',
    link: 'https://medium.com/@uncoverse'
  },
  {
    key: 4,
    img: '/oldadbar1.jpg',
    title: 'Gaming',
    subtitle: 'Road to bridge sports to Web3',
    link: 'https://coinmarketcap.com/community/articles/40774'
  },
  {
    key: 5,
    img: '/oldadbar1.jpg',
    title: 'Where we see growth',
    subtitle: 'What is behind increased activity',
    link: 'https://dappradar.com/blog/the-sandbox-is-crowded-whats-behind-the-metaverse-steep-increase-in-activity'
  },
];