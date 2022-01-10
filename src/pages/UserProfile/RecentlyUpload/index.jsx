import * as React from 'react';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

import RecentUploads from './RecentUploads';
import Recommends from './Recommends';

export default function Recents() {
  return (
    <Box
      sx={{
        mt: 0,
        mb: 2,
        padding: '0px 60px 60px 60px',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: "100%"
      }}
    >
      <Stack sx={{
        padding: '10px',
        width: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'left'
      }}>
        <Paper elevation={6}
          style={{ padding: '20px', borderRadius: '30px', width: '100%' }}>
          <Stack
            sx={{
              padding: '10px',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'left',
              justifyContent: 'left'
            }}>
            <Typography variant="h5" sx={{ display: 'flex', flexGrow: 1, fontFamily: 'Roboto', fontWeight: 'bold', alignItem: 'left', justifyContent: 'left' }}>
              Recently upload images
            </Typography>
            <Typography variant="h6" sx={{ display: 'flex', fontFamily: 'Roboto', fontWeight: 'bold', alignItem: 'right', justifyContent: 'right', textDecoration: 'none' }}>
              <a href='#view' style={{ textDecoration: 'none', color: '#2264D1' }}>View all</a>
            </Typography>
          </Stack>
          <RecentUploads />
        </Paper>



        <Stack sx={{
          marginTop: '80px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'left',
          justifyContent: 'left'
        }}>
          <Paper elevation={6}
            style={{ padding: '20px', borderRadius: '30px', marginRight: '60px', width: '500px' }}>
            <Typography variant="h5" sx={{ padding: '10px 0px 0px 10px', display: 'flex', flexGrow: 1, fontFamily: 'Roboto', fontWeight: 'bold', alignItem: 'left', justifyContent: 'left' }}>
              Your stats
            </Typography>

            <Stack
              sx={{
                padding: '0px 10px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'left',
                justifyContent: 'left'
              }}>


              <Stack
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'left'
                }}>
                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Views
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    121.502
                  </Typography>
                </Typography>

                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Bookmarks
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    4.223
                  </Typography>
                </Typography>


                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Downloads
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    8.509
                  </Typography>
                </Typography>


              </Stack>
              <Stack
                sx={{
                  padding: '0px 10px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'left',
                  justifyContent: 'left'
                }}>
                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Likes
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    18.145
                  </Typography>
                </Typography>

                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Shares
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    466
                  </Typography>
                </Typography>


                <Typography variant="h6"
                  align="left"
                  sx={{ mt: 2, fontFamily: 'Roboto' }}>
                  Comments
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ fontFamily: 'Roboto', fontWeight: 'regular' }}
                  >
                    1.047
                  </Typography>
                </Typography>


              </Stack>
            </Stack>
          </Paper>


          <Paper elevation={6}
            style={{ padding: '20px', borderRadius: '30px' }}>
            <Stack
              sx={{
                padding: '10px',
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
              <Typography variant="h5" sx={{ display: 'flex', flexGrow: 1, fontFamily: 'Roboto', fontWeight: 'bold', alignItem: 'center', justifyContent: 'center' }}>
                WeImage's Today Selections
              </Typography>
            </Stack>
            <Recommends />
          </Paper>
        </Stack>
      </Stack>
    </Box>
  );
}
