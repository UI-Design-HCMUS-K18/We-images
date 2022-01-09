import { useRef, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BannerLayout from '../../../components/Banner/BannerLayout';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/system';
import history from '../../../history';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Container from '@mui/material/Container';

const GreyColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[100],
  '&:hover': {
    backgroundColor: grey[100],
  },
}));

const backgroundImage =
  'https://3.bp.blogspot.com/-8qad5qNKIw8/XGHkaYElz4I/AAAAAAAACdY/F4aJkP6VkMMPmHyuDnq2229g8f9jYADXACKgBGAs/w5120-h2160-c/mountain-landscape-trees-nature-scenery-8K-158.jpg';

export default function UserInfor() {
  return (
    <BannerLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
      }}
      justifyContent='flex-end'
      alignItems='flex-end'
    >
      
      <Box sx={{ height: 400 }} />
      <GreyColorButton startIcon={<PhotoCameraIcon />} sx={{ mb: -5, mr: 5, p: 1.5 }}>
        Edit cover photo
      </GreyColorButton>
    </BannerLayout>
  );
}
