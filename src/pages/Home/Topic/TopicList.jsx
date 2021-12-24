import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import Input from '@mui/material/Input';
import { Box, height } from '@mui/system';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

import LaunchIcon from '@mui/icons-material/Launch';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const RowData = [
  {
    Col: [
      {
        id: 0,
        Title: "Design Idea",
        img: "https://media.istockphoto.com/vectors/light-bulb-in-various-creative-watercolors-modern-design-idea-concept-vector-id1217500298?b=1&k=20&m=1217500298&s=612x612&w=0&h=9nGoK3rL2L6L_v9Jm-MtKcCtSTRqYhozrQFqqiBI3Vc="
      },
      {
        id: 1,
        Title: "Painting",
        img: "https://popuppainting.com/wp-content/uploads/2019/09/BalloonGirlJennyLeonard.2048wide-1024x771.jpg"
      },
      {
        id: 2,
        Title: "Animal",
        img: "https://cms.bbcearth.com/sites/default/files/2021-07/Siberian%20tiger%20in%20the%20snow_GettyImages-1287040214.jpg"
      },
      {
        id: 3,
        Title: "City",
        img: "https://ak.picdn.net/shutterstock/videos/15384046/thumb/1.jpg"
      },
      {
        id: 4,
        Title: "Technology",
        img: "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_10_15/digital1.jpg"
      }
    ]
  },
  {
    Col: [
      {
        id: 5,
        Title: "Anime",
        img: "https://ih1.redbubble.net/image.934318971.8548/st,small,507x507-pad,600x600,f8f8f8.jpg"
      },
      {
        id: 6,
        Title: "Movie",
        img: "https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
      },
      {
        id: 7,
        Title: "Landscape",
        img: "https://lh3.googleusercontent.com/4mVNVUybMXXJ5k-PuXHwqwBFDLUZbAuSxa7xcypndKhFZ9RPEGVcoXpU9mLQL6lGg3z3Cvp5pJFWDXwKiYDPWOH9zQ=w640-h400-e365-rj-sc0x00ffffff"
      },
      {
        id: 8,
        Title: "Galaxy",
        img: "https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?k=20&m=1035676256&s=170667a&w=0&h=z_l2R1_XsBbZy6n6rOr71DqkQq4mEGpuOxzzCgoVMgM="
      },
      {
        id: 9,
        Title: "Festival",
        img: "https://149347190.v2.pressablecdn.com/wp-content/uploads/2019/08/summer-festivals-thumbnail-846x564.jpg"
      }  
    ]
  }
];

const data = [
  {
    id: 0,
    Title: "Design Idea",
    img: "https://media.istockphoto.com/vectors/light-bulb-in-various-creative-watercolors-modern-design-idea-concept-vector-id1217500298?b=1&k=20&m=1217500298&s=612x612&w=0&h=9nGoK3rL2L6L_v9Jm-MtKcCtSTRqYhozrQFqqiBI3Vc="
  },
  {
    id: 1,
    Title: "Painting",
    img: "https://popuppainting.com/wp-content/uploads/2019/09/BalloonGirlJennyLeonard.2048wide-1024x771.jpg"
  },
  {
    id: 2,
    Title: "Animal",
    img: "https://cms.bbcearth.com/sites/default/files/2021-07/Siberian%20tiger%20in%20the%20snow_GettyImages-1287040214.jpg"
  },
  {
    id: 3,
    Title: "City",
    img: "https://ak.picdn.net/shutterstock/videos/15384046/thumb/1.jpg"
  },
  {
    id: 4,
    Title: "Technology",
    img: "https://cdnimgen.vietnamplus.vn/uploaded/wbxx/2021_10_15/digital1.jpg"
  },
  {
    id: 5,
    Title: "Anime",
    img: "https://ih1.redbubble.net/image.934318971.8548/st,small,507x507-pad,600x600,f8f8f8.jpg"
  },
  {
    id: 6,
    Title: "Movie",
    img: "https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
  },
  {
    id: 7,
    Title: "Landscape",
    img: "https://lh3.googleusercontent.com/4mVNVUybMXXJ5k-PuXHwqwBFDLUZbAuSxa7xcypndKhFZ9RPEGVcoXpU9mLQL6lGg3z3Cvp5pJFWDXwKiYDPWOH9zQ=w640-h400-e365-rj-sc0x00ffffff"
  },
  {
    id: 8,
    Title: "Galaxy",
    img: "https://media.istockphoto.com/photos/background-of-galaxy-and-stars-picture-id1035676256?k=20&m=1035676256&s=170667a&w=0&h=z_l2R1_XsBbZy6n6rOr71DqkQq4mEGpuOxzzCgoVMgM="
  },
  {
    id: 9,
    Title: "Festival",
    img: "https://149347190.v2.pressablecdn.com/wp-content/uploads/2019/08/summer-festivals-thumbnail-846x564.jpg"
  }
];


export default function ArtistList() {
  return (
    <Grid container spacing="15px" padding="15px" sx={{ mt: 5, mb: 5 }}>
      {data.map((topic) => (
        <Grid item key={topic.id}> 
          <Card sx={{ ml: 2, mr: 2, width: 250, borderRadius: '10px' }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                width="250"
                image={topic.img}
                alt={`topic${topic.id}`}
              > 
              </CardMedia>
            
              <Typography 
                variant="body1" 
                align="center"
                sx={{
                  mt: -3,
                  fontFamily: 'Roboto', 
                  fontWeight: 'bold', 
                  backgroundColor: '#FFFFFF',
                  alignItems: 'center',
                  opacity: 0.8,
                  zIndex: -0.1
                }}>
                  {topic.Title}
                </Typography>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}