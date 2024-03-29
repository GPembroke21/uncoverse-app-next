import React, { useEffect, useState } from "react";
// import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card'
import { styled } from "@mui/system"

const AdBarContainer = styled("div")(({ theme }) => ({ margin: "0rem 1rem 0rem 1rem" }));
const AdBarCard = styled(Card)(({ theme }) => ({ 
  color: "white", 
  borderRadius: "10px", 
  background: theme.palette.card.trending,
  padding: "10px 10px 0px 10px",
}));

const AdBarCardCard = styled(Card)(({ theme }) => ({ 
  color: "white", 
  borderRadius: "10px", 
  background: theme.palette.card.secondary,
  padding: "10px 10px 0px 10px",
}));


export default function TitlebarBelowImageList() {
  const [horizontalScroll, setHorizontalScroll] = useState(0);
  const [scrollWidth, setScrollWidth] = useState();
  const [clientWidth, setClientWidth] = useState();
  // const imageLoader = ({ src }) => `${src}?w=248&fit=crop&auto=format`

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
        gap={18}
        variant='standard'
        rowHeight="auto"
        sx={{
          width: "100%",
          gridAutoFlow: "column",
          gridTemplateColumns: "repeat(auto-fill,minmax(15em, 1fr)) !important",
          gridAutoColumns: "minmax(15em, 1fr)",
          overflowX: 'scroll',
          maskImage:
            horizontalScroll === 0
              ? ["linear-gradient(to right, black calc(100% - 48px), transparent 100%)"] :
              scrollWidth === clientWidth
                ? [""] :
                scrollWidth === (clientWidth + horizontalScroll)
                  ? ["linear-gradient(to left, black calc(100% - 48px), transparent 100%)"] :
                  horizontalScroll > 0
                    ? ["linear-gradient(to left, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)", "linear-gradient(to right, transparent 0%, black 48px, black calc(100% - 48px), transparent 100%)"]
                    : [""],
          scrollbarWidth: "none", "&::-webkit-scrollbar": { display: "none" }
        }}
      >
        {itemData.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noreferrer">
            <AdBarCard style={{ width: '100%', height: '100%' }}>
            <ImageListItem style={{ width: '100%', height: '100%' }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                // width="100%"
                // height="100%"
                style={{ borderRadius: 10 }}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.subtitle}</span>}
                position="below"
              />
            </ImageListItem>
            </AdBarCard>
          </a>
        ))}
      </ImageList>
    </AdBarContainer>
  );
}

const itemData = [
  {
    img: '/AdBar1.png',
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
    img: '/AdBar3.png',
    title: 'Creator café',
    subtitle: 'Exploring content creation',
    link: 'https://medium.com/@uncoverse'
  },
  {
    key: 4,
    img: '/AdBar4.png',
    title: 'Gaming',
    subtitle: 'Road to bridge sports to Web3',
    link: 'https://coinmarketcap.com/community/articles/40774'
  },
  {
    key: 5,
    img: '/AdBar5.png',
    title: 'Where we see growth',
    subtitle: 'What is behind increased activity',
    link: 'https://dappradar.com/blog/the-sandbox-is-crowded-whats-behind-the-metaverse-steep-increase-in-activity'
  },
];