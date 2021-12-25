import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import LaunchIcon from '@mui/icons-material/Launch';
import './style.css';

import CollectionList from './CollectionList';

export default function Collection() {
  return (
    <Box
      sx={{
        p: 10,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%'
      }}
    >

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <Typography variant="h4" sx={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
          Collections
        </Typography>
        <IconButton aria-label="launch" color="primary">
          <LaunchIcon />
        </IconButton>
      </Stack>
      <CollectionList />
    </Box>
  );
}