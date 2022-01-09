import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LaunchIcon from '@mui/icons-material/Launch';
import AddIcon from '@mui/icons-material/Add';
import UserAvatar from '../../../components/AvatarCard/customAvatar'
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import { grey, lightGreen } from '@mui/material/colors';

const GreyColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[400],
  '&:hover': {
    backgroundColor: grey[400],
  },
}));

const GreenColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#00b312'),
  backgroundColor: '#00b312',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#00a811',
  },
}));

export default function UserInfor() {
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 'auto'
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={2}>
          <UserAvatar ></UserAvatar>
        </Grid>
        <Grid 
          item 
          container
          xs={8} 
          direction="column" 
          justifyContent="center" 
          alignItems="flex-start"
        >
          <Typography
            variant="h4"
            align="center"
            sx={{ mt: 3, fontFamily: 'Roboto', fontWeight: 'regular' }}
          >
            John Smith
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ mt: 0.5, fontFamily: 'Roboto', fontWeight: 'regular' }}
          >
            1024 followers
          </Typography>
          <Stack
            direction="row" 
            spacing={2}
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center'
          }}>
            <Avatar alt="twitter" sx={{ width: 28, height: 28 }} src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" />
            <Avatar alt="email" sx={{ width: 28, height: 28 }} src="https://www.kindpng.com/picc/m/27-279056_black-gmail-logo-png-transparent-png.png" />
            <Avatar alt="facebook" sx={{ width: 28, height: 28 }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" />
          </Stack>

          <Stack
            direction="row" 
            spacing={2}
            sx={{
              mt: 2,
              display: 'flex',
              alignItems: 'center'
          }}>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 0.5, fontFamily: 'Roboto', fontWeight: 'regular' }}
            >
              Hello, I'm John, I'm a designer and I desire to find...
            </Typography>
            <GreyColorButton sx={{ borderRadius: '10px' }}>
              See more
            </GreyColorButton>

          </Stack>
          
        </Grid>
        <Grid item xs={6} md={2}>
          <GreenColorButton 
            startIcon={<AddIcon sx={{ height: 28, width: 28 }} />} 
            sx={{ mt: 3, p: 1, pr: 1.5, borderRadius: '10px' }}
          >
            <Typography
              variant="h6"
              align="center"
              sx={{ fontFamily: 'Roboto', fontWeight: 'Medium' }}
            >
              Post your image
            </Typography>
          </GreenColorButton>
        </Grid>
      </Grid>
    </Container>
  );
}
