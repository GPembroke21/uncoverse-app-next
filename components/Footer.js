import React from 'react'
import { styled } from "@mui/system"
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Wrapper = styled("div")(({ theme }) => ({
  margin: "14px 0px 0px 0px",
  padding: "0px 8px 0px 14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  borderTop: '1px solid #252425',
  cursor: 'default',
  // position: "absolute",
  // bottom: 0,
  // width: "100%"
}));

const LogoContainer = styled("div")(({ theme }) => ({
  margin: "0.5rem 0.5rem",
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "row",
  alignItems: "center",
}));

const Logo = styled("div")(({ theme }) => ({
  objectFit: "contain",
  marginLeft: "0rem",
  marginRight: "0.5rem",
}));

const SocialsContainer = styled("div")(({ theme }) => ({
  margin: "0.5rem 0",
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "row",
  alignItems: "center",
}));

const Social = styled("div")(({ theme }) => ({
  objectFit: "contain",
  marginLeft: "0rem",
  marginRight: "0.5rem",
  border: '1px solid #2e2e2e',
  padding: '10px 10px 5px 10px',
  borderRadius: '6px'
}));

const Filters = () => {
  return (
    <Box
    sx={{
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      width: "100%",
      padding: "inherit",
      margin: "inherit",
      height: "72px"
    }}
    >
      <Wrapper>
        <LogoContainer>
          <Logo>
            <Image src="/uv-logo-bw.svg" alt='Uncoverse Logo' width="20rem" height="20rem" />
          </Logo>
          <Typography variant="h3" sx={{fontWeight: '900', mb: '9px'}}>uncoverse</Typography>
        </LogoContainer>
        <SocialsContainer>
          <Social>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <Image src="/twitterlogo.svg" alt="twitter" width="15rem" height="15rem" />
            </a>
          </Social>
          <Social>
            <a href="https://telegram.com" target="_blank" rel="noreferrer">
              <Image src="/telegramlogo.svg" alt="telegram" width="15rem" height="15rem" />
            </a>
          </Social>
          <Social>
            <a href="https://medium.com/@uncoverse" target="_blank" rel="noreferrer">
              <Image src="/mediumlogo.svg" alt="medium" width="15rem" height="15rem" />
            </a>
          </Social>
        </SocialsContainer>
      </Wrapper>
    </Box>
  )
}

export default Filters