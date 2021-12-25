import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

import LaunchIcon from '@mui/icons-material/Launch';

import ArtistList from './ArtistList';



export default function TopArtist() {
  return (
    <Box
      sx={{
        p: 10,
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 400
      }}
    >

      <Stack 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Top Artists
        </Typography>
        <IconButton aria-label="launch" color="primary">
          <LaunchIcon />
        </IconButton>  
      </Stack>
      <ArtistList />   
     
      
    </Box>
  );
}
