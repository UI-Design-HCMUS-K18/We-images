import React from "react";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";
import { Grid } from "@mui/material";
import styled from 'styled-components';

const FooterLink = styled.a`
  margin-bottom: 5px;
  font-size: 13px;
  font-weight: light;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #1976d2;
      transition: 100ms ease-in;
  }
`;

const YouTubeLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #c4302b;
      transition: 100ms ease-in;
  }
`;

const FacebookLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #4267B2;
      transition: 100ms ease-in;
  }
`;

const TwitterLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #00acee;
      transition: 100ms ease-in;
  }
`;

const InstagramLink = styled.a`
  margin-right: 10px;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #8a3ab9;
      transition: 100ms ease-in;
  }
`;

const Footer = () => {
  return (
    <Grid container direction="column" style={{ background: '#051a2e', padding: '40px 10%' }}>
      <Grid item container direction="row" spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 4, md: 12 }}>
        <Grid item xs={1} sm={2} md={3} style={{ paddingLeft: '50px' }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
            style={{ backGround: "red" }}
            width='100%'
          >
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>We Images</Typography>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Our Goals</FooterLink>
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>Social Media</Typography>
            <Grid container direction="row">
              <YouTubeLink href="#" >
                <YouTube />
              </YouTubeLink>
              <FacebookLink href="#">
                <Facebook />
              </FacebookLink>
              <TwitterLink href="#">
                <Twitter />
              </TwitterLink>
              <InstagramLink href="#">
                <Instagram />
              </InstagramLink>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={1} sm={2} md={3} style={{ paddingLeft: '50px' }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
          >
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>Our Services</Typography>
            <FooterLink href="#">Popular Contents</FooterLink>
            <FooterLink href="#">Free Stocks</FooterLink>
            <FooterLink href="#">Wallpapers</FooterLink>
            <FooterLink href="#">Design Resources</FooterLink>
            <FooterLink href="#">Templates</FooterLink>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2} md={3} style={{ paddingLeft: '50px' }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
          >
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>Contact</Typography>
            <FooterLink href="#">Mail:<i> supertrealmail@gmail.com</i></FooterLink>
            <FooterLink href="#">Tel:<i> +1098 765 4321</i></FooterLink>
            <FooterLink href="#">Address:<i> Chicago, USA</i></FooterLink>
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>Help</Typography>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Feedback</FooterLink>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2} md={3} style={{ paddingLeft: '50px' }}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="left"
          >
            <Typography variant="h6" style={{ color: 'lightGray', marginTop: '25px', marginBottom: '5px' }}>Legal</Typography>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">License Agreement</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Copyright Information</FooterLink>
            <FooterLink href="#">Cookies Policy</FooterLink>
            <FooterLink href="#">Cookies Settings</FooterLink>
          </Grid>
        </Grid>
      </Grid>
      <Divider style={{ color: 'white', background: "gray", marginTop: '15px' }}></Divider>
      <Typography color='gray' variant="body2" style={{ margin: "10px auto 0px auto" }}>Copyright ©  2021-2022 TKGD. All rights reserved!</Typography>
    </Grid >
  );
};
export default Footer;