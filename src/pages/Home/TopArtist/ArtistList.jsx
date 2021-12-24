import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputBase from '@mui/material/InputBase';
import Input from '@mui/material/Input';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import LaunchIcon from '@mui/icons-material/Launch';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

const data = [
  {
    id: 0,
    FullName: "John Smith",
    Description: "Hello, I'm John, I'm a designer...",
    Tag: "illustrator, psd, logo",
    img: "https://i.pravatar.cc/400?img=69"
  },
  {
    id: 1,
    FullName: "Lenka Kripac",
    Description: "I like shareing photos and writ...",
    Tag: "lanscape, nature",
    img: "https://i.pravatar.cc/400?img=49"
  },
  {
    id: 2,
    FullName: "Bob Ross",
    Description: "Hey, I got some drawing  wit...",
    Tag: "drawing, painting, tutorial",
    img: "https://i.pravatar.cc/400?img=50"
  },
  {
    id: 3,
    FullName: "Jorien Sheever",
    Description: "Guys, take a look at my colle...",
    Tag: "photo, landscape, city",
    img: "https://i.pravatar.cc/400?img=43"
  },
];

export default function ArtistList() {
  return (
    <Stack
      sx={{
        mt: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
      {data.map((artist) => (
        
      <Stack 
        sx={{
        ml: 7,
        mr: 7,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Avatar alt={`avatar${artist.id}`} src={artist.img} sx={{ width: 100, height: 100 }} />
        <Typography variant="h6" sx={{ mt: 2, fontFamily: 'Roboto', fontWeight: 'bold' }}>
          {artist.FullName}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: 'Roboto', fontWeight: 'medium' }}>
          {artist.Description}
        </Typography>
        <Stack 
          sx={{
          display: 'flex',
          flexDirection: 'row'
        }}>
          <Typography variant="body2" sx={{ fontFamily: 'Roboto', fontWeight: 'medium' }}>
            Tag: 
          </Typography>
          <Typography variant="body2" color='primary' sx={{ ml: 0.5, fontFamily: 'Roboto', fontWeight: 'medium' }}>
              {artist.Tag}
            </Typography>
        </Stack>
        
      </Stack>
        
        
      ))}
    </Stack>
  );
}