import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

const data = [
  {
    src: "https://i.pinimg.com/550x/40/32/48/403248cbe2dd03c56ee0fd86a6f7ee7a.jpg",
    title: "Vector",
    description: "Components for faster design"
  },
  {
    src: "http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTsUtvFNQlm8coEDRfNF48_X39iW5tLbiB2dT7i_8UYdE1j6Bn5VhlJ-CsEp8PweSY6RyTbfOn-JLnuOFTDT0I",
    title: "PSD",
    description: "Templates for your contents"
  },
  {
    src: "https://i.pinimg.com/736x/a4/22/35/a42235144e68ef7c246bc5a28cd0e7b2.jpg",
    title: "PNG",
    description: "Transparent background images for creators"
  },
  {
    src: "https://i.pinimg.com/originals/a4/9c/dc/a49cdc73bace25b2463c4142e8b209bc.jpg",
    title: "GIF",
    description: "Graphics interchange format"
  }
]

export default function RecentUploads() {
  return (
    <Box sx={{ width: 'auto' }}>
      <Grid container rowSpacing={1}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={3} style={{ padding: '10px', width: '350px'}}>
              <img src={item.src} width="100%" height="250px" alt="Idea" style={{ objectFit: 'cover', overflow:'hidden' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}