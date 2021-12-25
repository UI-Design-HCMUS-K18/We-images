import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  SocialMedia
} from "./FooterStyles";
import { Stack } from "@mui/material";

import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Why us</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Free Stocks</FooterLink>
            <FooterLink href="#">eCommerce</FooterLink>
            <FooterLink href="#"></FooterLink>
            <FooterLink href="#"></FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Mail: realmail@gmail.com</FooterLink>
            <FooterLink href="#">Tel: +098 765 4321</FooterLink>
            <FooterLink href="#">Addr1: CA, USA</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <Stack direction="row">
              <SocialMedia>
                <YouTube />
              </SocialMedia>
              <SocialMedia>
                <Facebook />
              </SocialMedia>
              <SocialMedia>
                <Twitter />
              </SocialMedia>
              <SocialMedia>
                <Instagram />
              </SocialMedia>
            </Stack>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;