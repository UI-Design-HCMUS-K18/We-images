import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

const data = [
  {
    src: "https://i.pinimg.com/originals/90/3c/b4/903cb4759245be7b63c29c447596e90f.jpg",
    title: "Vector",
    description: "Components for faster design"
  },
  {
    src: "https://i.pinimg.com/550x/77/98/a2/7798a274d5500321b491c87c0bf5d50e.jpg",
    title: "PSD",
    description: "Templates for your contents"
  },
  {
    src: "https://i.pinimg.com/564x/65/6b/f1/656bf1c4d58b19d117f4b672067b1ab9.jpg",
    title: "PNG",
    description: "Transparent background images for creators"
  }
]

export default function Recommends() {
  return (
    <Box sx={{ width: 'auto' }}>
      <Grid container rowSpacing={1}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={4} style={{ padding: '10px', width: '350px'}}>
              <img src={item.src} width="100%" height="200px" alt="Idea" style={{ objectFit: 'cover', overflow:'hidden' }} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}