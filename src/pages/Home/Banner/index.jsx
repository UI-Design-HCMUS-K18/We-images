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

const backgroundImage =
  'https://d770yb0u0jpdg.cloudfront.net/wp-content/uploads/2019/01/how-to-brief-a-web-designer-388161091.jpg';

export default function Banner() {
  const textRef = useRef();
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (textRef.current.value.trim() !== '') {
        history.push(`/search?query=${textRef.current.value}`);
      }
    }
  };

  const handleSearch = () => {
    if (textRef.current.value.trim() !== '') {
      history.push(`/search?query=${textRef.current.value}`);
    }
  };

  useEffect(() => {
    textRef.current.focus();
    textRef.current.addEventListener('keyup', handleEnter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BannerLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
      backgroundOptical="#888888"
      alignItems='center'
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />

      <Stack
        spacing={10}
        sx={{
          mt: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          color="#2264D1"
          align="center"
          variant="h4"
          marked="center"
          sx={{
            p: 1,
            pl: 2,
            pr: 2,
            mb: -1,
            boxShadow: 3,
            borderRadius: '50px',
            backgroundColor: '#FFFFFF',
            opacity: 0.8,
            zIndex: -0.1,
          }}
        >
          <Box
            sx={{
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              boxShadow: 5,
            }}
          >
            WELCOME TO WE IMAGES
          </Box>
        </Typography>

        <Stack
          spacing={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            align="center"
            sx={{
              boxShadow: 3,
              borderRadius: '50px',
              backgroundColor: '#FFFFFF',
              width: 800,
              height: 50,
            }}
          >
            <Stack
              align="center"
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: 800,
                height: 50,
              }}
            >
              <IconButton aria-label="filter" color="primary" sx={{ ml: 2 }}>
                <FilterListIcon />
              </IconButton>
              <Typography
                variant="body2"
                color="#C4C4C4"
                sx={{
                  p: 1.8,
                  ml: -3,
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontWeight: 'light',
                  width: 80,
                }}
              >
                Filter
              </Typography>
              <Divider
                color="#7DAEFF"
                orientation="vertical"
                flexItem
                sx={{ mt: 1, height: 35 }}
              />
              <Box
                align="center"
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: 630,
                  height: 50,
                }}
              >
                <InputBase
                  placeholder="Type here..."
                  inputProps={{ 'aria-label': 'search' }}
                  inputRef={textRef}
                  inputlabelprops={{
                    style: { fontFamily: 'Roboto', fontWeight: 'light' },
                  }}
                  sx={{
                    ml: 2,
                    flex: 1,
                  }}
                />
              </Box>
              <Button
                onClick={handleSearch}
                variant="contained"
                sx={{
                  borderTopLeftRadius: '0',
                  borderBottomLeftRadius: '0',
                  borderTopRightRadius: '50px',
                  borderBottomRightRadius: '50px',
                }}
                endIcon={<SearchIcon sx={{ height: '30px', width: '30px' }} />}
              ></Button>
            </Stack>
          </Box>
          <Box
            align="center"
            sx={{
              boxShadow: 3,
              borderRadius: '50px',
              backgroundColor: '#1565c0',
              width: 165,
              height: 30,
            }}
          >
            <Stack
              align="center"
              sx={{ display: 'flex', flexDirection: 'row', height: 30 }}
            >
              <Typography
                alignItems="center"
                variant="body2"
                color="#FFFFFF"
                sx={{
                  p: 0.5,
                  pl: 2,
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontWeight: 'Regular',
                }}
              >
                Popular
              </Typography>
              <Divider
                color="#FFFFFF"
                orientation="vertical"
                flexItem
                sx={{ m: 1, height: 15 }}
              />
              <Typography
                alignItems="center"
                variant="body2"
                color="#FFFFFF"
                sx={{
                  p: 0.5,
                  fontSize: 16,
                  fontFamily: 'Roboto',
                  fontWeight: 'Regular',
                }}
              >
                Recent
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </BannerLayout>
  );
}
