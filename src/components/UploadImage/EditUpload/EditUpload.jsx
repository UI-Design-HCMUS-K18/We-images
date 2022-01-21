import { Grid, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SaveIcon from '@mui/icons-material/Save';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

import Footer from '../../../components/Footer/Footer';

import classes from './EditUpload.module.css';
const EditUpload = () => {
  const [images, setImages] = React.useState([]);

  useEffect(() => {
    const newImages = JSON.parse(localStorage.getItem('images'));
    console.log(newImages[0]);
    setImages(newImages);

    //localStorage.setItem('images', []);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Grid>
      <Grid container style={{ marginTop: 100, justifyContent: 'center' }}>
        <Typography component="h2" variant="h4" sx={{ fontWeight: 'bold' }}>
          Edit your images information
        </Typography>
        <Grid
          item
          style={{
            marginTop: 20,
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

          <Grid
            className={classes.images}
            container
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{
              paddingLeft: '100px',
              paddingRight: '100px',
              paddingTop: '20px',
            }}
          >
            {images?images.map((image, index) => (
              <Grid item xs={3}>
                <img
                  className={classes.img}
                  key={index}
                  src={image.src}
                  alt="abc"
                />
              </Grid>
            )):''}
          </Grid>
          <Grid className={classes.thumbnail}>
            <div className={classes.content}>
              <div className={classes.image}>
              <img src={images[0].src??"./images/unsplash_z8pAEjUUxbY.png"} alt="olala" />
              </div>
              <div className={classes.container}>
                <div className={classes.title}>Thumbnail</div>
                <button>Adjust</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <div class={classes.formContainer}>
        <form>
          <div className={classes.informationBox}>
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>Title</label>
              <input
                type="text"
                className={`${classes.formInput} ${classes.formControl}`}
              />
            </div>
            <div className={classes.formGroup}>
              <label className={classes.formLabel}>
                Description{' '}
                <span
                  style={{
                    color: '#808080',
                    fontSize: '24px',
                    lineHeight: '150%',
                  }}
                >
                  (Optional)
                </span>
              </label>
              <textarea
                className={`${classes.formTextArea} ${classes.formControl}`}
              ></textarea>
            </div>
            <div className={`${classes.formGroup} ${classes.dFlex}`}>
              <div style={{ flex: 1 }}>
                <label className={classes.formLabel}>Tags</label>
                <div
                  style={{
                    display: 'flex',
                    marginRight: '150px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      type="text"
                      className={`${classes.formInput} ${classes.formControl}`}
                    />
                    <AddIcon
                      style={{
                        marginTop: '23px',
                        width: '36px',
                        height: '36px',
                        color: '#808080',
                      }}
                    />
                  </div>

                  <SaveIcon
                    style={{
                      color: '#808080',
                      width: '36px',
                      height: '36px',
                      marginLeft: '21px',
                      marginTop: '10px',
                    }}
                  />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <label className={classes.formLabel}>Recommended Tags</label>
                <ul
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start',
                  }}
                >
                  <li className={classes.tagItem}>#Animal</li>
                  <li className={classes.tagItem}>#Cake</li>
                  <li className={classes.tagItem}>#Drink</li>
                  <li className={classes.tagItem}>#BlackHat</li>
                  <li className={classes.tagItem}>#Dragon</li>

                  <li className={classes.tagItem}>#Countryside</li>
                  <li className={classes.tagItem}>#RickRoll</li>
                  <li className={classes.tagItem}>#Rose</li>
                  <li className={classes.tagItem}>#Books</li>

                  <li className={classes.tagItem}>#DogAndCat</li>
                  <li className={classes.tagItem}>#Letter</li>
                  <li className={classes.tagItem}>#Obama</li>
                  <li className={classes.tagItem}>#Bananas</li>
                </ul>
              </div>
            </div>
            <div className={classes.formGroup}>
              <label
                className={classes.formLabel}
                style={{ marginRight: '68px' }}
              >
                Open to
              </label>
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="gender"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel,
                    }}
                    value="Publish"
                    control={<Radio />}
                    label="Publish"
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel,
                    }}
                    value="Followers Only"
                    control={<Radio />}
                    label="Followers Only"
                  />
                  <FormControlLabel
                    classes={{
                      label: classes.checkboxLabel,
                    }}
                    value="Private"
                    control={<Radio />}
                    label="Private"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className={classes.formGroup}>
              <RadioGroup
                row
                aria-label="gender"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  classes={{
                    label: classes.radioLabel,
                  }}
                  value="Original work"
                  control={<Radio />}
                  label="Original work"
                />
                <span
                  style={{
                    display: 'block',
                    fontSize: '28px',
                    marginRight: '50px',
                    marginTop: '7px',
                  }}
                >
                  or
                </span>
                <div style={{ display: 'flex' }}>
                  <FormControlLabel
                    classes={{
                      label: classes.authorLink,
                    }}
                    value="Author link"
                    control={<Radio />}
                    label="Author link"
                  />
                  <div>
                    <input
                      type="text"
                      className={`${classes.formInput} ${classes.formControl}`}
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
          <div
            className="formFooter"
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop: '64px',
            }}
          >
            <div style={{ width: '600px' }}>
              <p className={classes.guildlines}>
                Please read our{' '}
                <span style={{ color: '#2264D1' }}>Terms of use</span> and{' '}
                <span style={{ color: '#2264D1' }}>Guildlines</span> before
                posting your images
              </p>
            </div>
            <div className="actions">
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="error"
                  size="large"
                  style={{ marginRight: '40px', height: '56px', fontSize: '18px' }}
                >
                  Cancel Uploads
                </Button>
              </Link>
              
              <Link to='/userprofile' style={{ textDecoration: 'none'}}>
                <Button 
                  variant="contained"
                  size="large"
                  style={{ width: '172px', height: '56px', fontSize: '18px'}}
                >
                  Post
                </Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </Grid>
  );
};

export default EditUpload;
