import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import './style.css';

import CollectionList from './CollectionList';

export default function Collection() {
  return (
    <Box
      sx={{
        mt: 2,
        mb: 2,
        padding: '40px 60px 60px 60px',
        backgroundColor: 'white',
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
      </Stack>
      <CollectionList />
    </Box>
  );
}