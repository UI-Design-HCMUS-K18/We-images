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
import LaunchIcon from '@mui/icons-material/Launch';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
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
