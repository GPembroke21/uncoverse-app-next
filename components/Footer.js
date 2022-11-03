import React from 'react'
import { styled } from "@mui/system"
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Wrapper = styled("div")(({ theme }) => ({
  margin: "14px 0px 0px 0px",
  padding: "0px 10px 0px 14px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  borderTop: '1px solid #252425'
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
      <Wrapper>
        <LogoContainer>
          <Logo>
            <Image src="/uv-logo-bw.svg" alt='Uncoverse Logo' width="20rem" height="20rem" />
          </Logo>
          <Typography variant="h3" sx={{fontWeight: '900', mb: '9px'}}>uncoverse</Typography>
        </LogoContainer>
        <SocialsContainer>
          <Social>
            <a href="https://twitter.com" target={"_blank"}>
              <Image src="/twitterlogo.svg" width="15rem" height="15rem" />
            </a>
          </Social>
          <Social>
            <a href="https://telegram.com" target={"_blank"}>
              <Image src="/telegramlogo.svg" width="15rem" height="15rem" />
            </a>
          </Social>
          <Social>
            <a href="https://medium.com/@uncoverse" target={"_blank"}>
              <Image src="/mediumlogo.svg" width="15rem" height="15rem" />
            </a>
          </Social>
        </SocialsContainer>
      </Wrapper>
  )
}

export default Filters