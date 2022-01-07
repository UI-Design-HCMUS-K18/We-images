import { Grid, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import classes from './EditUpload.module.css';
const EditUpload = () => {
  return (
    <Grid>
      <Grid container style={{ marginTop: 200, justifyContent: 'center' }}>
        <Typography component="h2" variant="h3">
          Edit your images information
        </Typography>
        <Grid
          item
          style={{
            marginTop: 50,
            width: '100%',
            backgroundColor: '#3D3D3D',
          }}
        >
          <Grid
            item
            container
            style={{
              minHeight: '60px',
              width: '100%',
              backgroundColor: '#565656',
            }}
            className={classes['image-box']}
          >
            <Grid
              item
              xs={6}
              sx={{
                marginRight: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography component="h6" variant="h6" className={classes.item}>
                Your image:{' '}
              </Typography>
              <Typography component="h6" variant="h6" className={classes.item}>
                4 Pieces
              </Typography>
              <Typography component="h6" variant="h6" className={classes.item}>
                15.36 MB
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                marginRight: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div className={classes['edit-btn']}>
                <EditOutlinedIcon className={classes['edit-icon']} />
                <span className={classes['edit-title']}>Edit</span>
              </div>
            </Grid>
          </Grid>

          <Grid className={classes.images}>
            <img src="./images/unsplash_z8pAEjUUxbY.png" alt="olala" />
            <img src="./images/unsplash_-MCrF6hnojU.png" alt="olala" />
            <img src="./images/unsplash_yihlaRCCvd4.png" alt="olala" />
            <img src="./images/unsplash_zv3ckJKftC4.png" alt="olala" />
          </Grid>
          <Grid className={classes.thumbnail}>
            <div className={classes.content}>
              <div className={classes.image}>
                <img src="./images/unsplash_z8pAEjUUxbY.png" alt="olala" />
              </div>
              <div className={classes.container}>
                <div className={classes.title}>Thumbnail</div>
                <button>Adjust</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <p>akuefbyiawuyfiuervgiuy</p>
    </Grid>
  );
};

export default EditUpload;
