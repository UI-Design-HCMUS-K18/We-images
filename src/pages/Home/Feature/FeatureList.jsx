import * as React from 'react';
import Box from '@mui/material/Box';
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import IdeaIcon from './Icons/Idea.png';
import PSDIcon from './Icons/Enhance.png';
import PNGIcon from './Icons/Paint.png';
import GIFIcon from './Icons/GIF.png';

const data = [
  {
    icon: IdeaIcon,
    title: "Vector",
    description: "Components for faster design"
  },
  {
    icon: PSDIcon,
    title: "PSD",
    description: "Templates for your contents"
  },
  {
    icon: PNGIcon,
    title: "PNG",
    description: "Transparent background images for creators"
  },
  {
    icon: GIFIcon,
    title: "GIF",
    description: "Graphics interchange format"
  }
]

export default function FeatureList() {
  return (
    <Box sx={{ width: '100%', marginTop: '50px' }}>
      <Grid container rowSpacing={1}>
        {data.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} style={{ padding: '15px' }}>
            <Paper style={{ margin: "auto", height: "130px", background: "lightgray", padding: "20px 20px", width: "100%" }}>
              <Stack direction="column">
                <img src={item.icon} width="32px" height="32px" alt="Idea" style={{ margin: 'auto' }} />
                <Typography variant="h6" style={{ margin: 'auto', paddingTop: "5px" }}>{item.title}</Typography>
                <Typography variant="body2" style={{ margin: 'auto', textAlign: 'center' }}>{item.description}</Typography>
              </Stack>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}