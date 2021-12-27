import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

const data = [
  {
    id: 0,
    FullName: 'John Smith',
    Description: "Hello, I'm John, I'm a designer...",
    Tag: 'illustrator, psd, logo',
    img: 'https://i.pravatar.cc/400?img=69',
  },
  {
    id: 1,
    FullName: 'Lenka Kripac',
    Description: 'I like shareing photos and writ...',
    Tag: 'lanscape, nature',
    img: 'https://i.pravatar.cc/400?img=49',
  },
  {
    id: 2,
    FullName: 'Bob Ross',
    Description: 'Hey, I got some drawing  wit...',
    Tag: 'drawing, painting, tutorial',
    img: 'https://i.pravatar.cc/400?img=50',
  },
  {
    id: 3,
    FullName: 'Jorien Sheever',
    Description: 'Guys, take a look at my colle...',
    Tag: 'photo, landscape, city',
    img: 'https://i.pravatar.cc/400?img=43',
  },
];

export default function ArtistList() {
  return (
    <Grid
      container 
      spacing={8}
      sx={{
        mt: -0.5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
      {data.map((artist, index) => (
        <Grid item xs={6} md={3}>
          <Stack
            key={index}
            sx={{
              ml: 7,
              mr: 7,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar
              alt={`avatar${artist.id}`}
              src={artist.img}
              sx={{ width: 120, height: 120 }}
            />
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 2, fontFamily: 'Roboto', fontWeight: 'bold' }}
            >
              {artist.FullName}
            </Typography>
            <Typography
              variant="body2"
              align="center"
              sx={{ fontFamily: 'Roboto', fontWeight: 'medium' }}
            >
              {artist.Description}
            </Typography>
            <Stack
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontFamily: 'Roboto', fontWeight: 'medium' }}
              >
                Tag:
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{ ml: 0.5, fontFamily: 'Roboto', fontWeight: 'medium' }}
              >
                {artist.Tag}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
