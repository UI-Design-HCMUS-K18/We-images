import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import LaunchIcon from '@mui/icons-material/Launch';
import TopicList from './TopicList';


export default function Topic() {
  return (
    <Box
      sx={{
        p: 10,
        backgroundColor: '#FAFAFA',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 600
      }}
    >

      <Stack 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Popular Topics
        </Typography>
        <IconButton aria-label="launch" color="primary">
          <LaunchIcon />
        </IconButton>  
      </Stack>
      <TopicList />   
    </Box>
  );
}
