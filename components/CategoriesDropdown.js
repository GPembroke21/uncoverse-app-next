// import React from 'react'
// import { styled } from "@mui/system"
// import {useState} from 'react'
// import ProfileDropdown from './buttons/ProfileDropdown'
// import Image from 'next/image'
// import IconButton from '@mui/material/Button'
// import ThemeProvider from "../Theme"
// import Link from 'next/link'
// import Button from "@mui/material/Button"
// import Typography from "@mui/material/Typography"
// import Divider from "@mui/material/Divider"

// const Wrapper = styled("div")(({ theme }) => ({
//   width: "calc(100%)",
//   padding: "0rem 0rem",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "space-between",
// }));

// const CategoriesContainer = styled("div")(({ theme }) => ({
//   margin: "0.6rem 0rem",
//   display: "flex",
//   alignItems: "flex-start",
//   flexDirection: "row",
//   alignItems: "center",
//   width: "100%",
//   overflow: "auto",
//   msOverflowStyle: "none",
//   scrollbarWidth: "none",
//   '&::-webkit-scrollbar': {
//   display: "none",
//   width: 0,
//   },
// }));

// const CategoryButton = styled(Button)(({ theme }) => ({
//   color: "white", 
//   backgroundColor: "#252425", 
//   fontSize: "clamp(8px, 1vw, 14px)", 
//   borderRadius: '7px',
//   marginRight: '10px',
//   height: "2.5em",
//   width: "11em",
//   "&:hover": {
//     color: "#dd00ff",
//     backgroundColor: "#252425",
//   },
// }));

// const CategoriesDropdown = () => {
//   const [buttonColor1, setButtonColor1] = useState("white");
//   const [buttonColor2, setButtonColor2] = useState("white");
//   const [buttonColor3, setButtonColor3] = useState("white");
//   const [buttonColor4, setButtonColor4] = useState("white");
//   const [buttonColor5, setButtonColor5] = useState("white");
//   const [buttonColor6, setButtonColor6] = useState("white");
//   const [buttonColor7, setButtonColor7] = useState("white");
//   const [buttonColor8, setButtonColor8] = useState("white");
//   const [buttonColor9, setButtonColor9] = useState("white");
//   const [buttonColor10, setButtonColor10] = useState("white");
//   const [buttonColor11, setButtonColor11] = useState("white");
//   const [buttonColor12, setButtonColor12] = useState("white");
//   const [buttonColor13, setButtonColor13] = useState("white");
//   const [buttonColor14, setButtonColor14] = useState("white");

//   const handleClick1 = event => {
//     buttonColor1 === "white" ? setButtonColor1("#dd00ff") : setButtonColor1("white");
//   };

//   const handleClick2 = event => {
//     buttonColor2 === "white" ? setButtonColor2("#dd00ff") : setButtonColor2("white");
//   };

//   const handleClick3 = event => {
//     buttonColor3 === "white" ? setButtonColor3("#dd00ff") : setButtonColor3("white");
//   };

//   const handleClick4 = event => {
//     buttonColor4 === "white" ? setButtonColor4("#dd00ff") : setButtonColor4("white");
//   };

//   const handleClick5 = event => {
//     buttonColor5 === "white" ? setButtonColor5("#dd00ff") : setButtonColor5("white");
//   };

//   const handleClick6 = event => {
//     buttonColor6 === "white" ? setButtonColor6("#dd00ff") : setButtonColor6("white");
//   };

//   const handleClick7 = event => {
//     buttonColor7 === "white" ? setButtonColor7("#dd00ff") : setButtonColor7("white");
//   };

//   const handleClick8 = event => {
//     buttonColor8 === "white" ? setButtonColor8("#dd00ff") : setButtonColor8("white");
//   };

//   const handleClick9 = event => {
//     buttonColor9 === "white" ? setButtonColor9("#dd00ff") : setButtonColor9("white");
//   };

//   const handleClick10 = event => {
//     buttonColor10 === "white" ? setButtonColor10("#dd00ff") : setButtonColor10("white");
//   };

//   const handleClick11 = event => {
//     buttonColor11 === "white" ? setButtonColor11("#dd00ff") : setButtonColor11("white");
//   };

//   const handleClick12 = event => {
//     buttonColor12 === "white" ? setButtonColor12("#dd00ff") : setButtonColor12("white");
//   };

//   const handleClick13 = event => {
//     buttonColor13 === "white" ? setButtonColor13("#dd00ff") : setButtonColor13("white");
//   };

//   const handleClick14 = event => {
//     buttonColor14 === "white" ? setButtonColor14("#dd00ff") : setButtonColor14("white");
//   };

//   return (
//     <ThemeProvider>
//       <Wrapper>
//         <Divider style={{ backgroundColor: "#2e2e2e", width: "100%", height: "0.01px" }} />
//           <CategoriesContainer>
//             <CategoryButton onClick={handleClick1} style={{color: buttonColor1}}>Meetup</CategoryButton>
//             <CategoryButton onClick={handleClick2} style={{color: buttonColor2}}>Talks</CategoryButton>
//             <CategoryButton onClick={handleClick3} style={{color: buttonColor3}}>Music</CategoryButton>
//             <CategoryButton onClick={handleClick4} style={{color: buttonColor4}}>Art</CategoryButton>
//             <CategoryButton onClick={handleClick5} style={{color: buttonColor5}}>Info</CategoryButton>
//             <CategoryButton onClick={handleClick6} style={{color: buttonColor6}}>Party</CategoryButton>
//             <CategoryButton onClick={handleClick7} style={{color: buttonColor7}}>Movies</CategoryButton>
//             <CategoryButton onClick={handleClick8} style={{color: buttonColor8}}>Crypto</CategoryButton>
//             <CategoryButton onClick={handleClick9} style={{color: buttonColor9}}>Games</CategoryButton>
//             <CategoryButton onClick={handleClick10} style={{color: buttonColor10}}>Sports</CategoryButton>
//             <CategoryButton onClick={handleClick11} style={{color: buttonColor11}}>Fashion</CategoryButton>
//             <CategoryButton onClick={handleClick12} style={{color: buttonColor12}}>Exhibition</CategoryButton>
//             <CategoryButton onClick={handleClick13} style={{color: buttonColor13}}>Explore</CategoryButton>
//             <CategoryButton onClick={handleClick14} style={{color: buttonColor14}}>NFT</CategoryButton>
//           </CategoriesContainer>
//       </Wrapper>
//     </ThemeProvider>
//   )
// }

// export default CategoriesDropdown