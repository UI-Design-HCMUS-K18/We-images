/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import './imageDetail.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ImageIcon from '@mui/icons-material/Image';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EventIcon from '@mui/icons-material/Event';
import AddIcon from '@mui/icons-material/Add';
import CircularProgress from '@mui/material/CircularProgress';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import Moment from 'react-moment';
import unsplash from '../../api/unsplash';
import Carousel from 'react-elastic-carousel';
import Comments from '../../components/Comments/Comments';
import { Tooltip } from '@mui/material';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function ImageDetail() {
  let { id, query } = useParams();
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const [like, setLike] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fectchImage = async (imageID) => {
    const response = await unsplash.get(`/photos/${imageID}`);
    setImage(response.data);
    setIsLoading(false);
  };

  const fetchImages = async () => {
    setIsLoading(true);
    const response = await unsplash.get('/search/photos', {
      params: { query: query, page: 1, per_page: 100 },
    });
    setImages(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
    fectchImage(id);
  }, [id]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal className="image-modal" open={open}>
      <div className="image-modal__container">
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress />
        </Backdrop>
        <Link to={`/search?query=${query}`}>
          <CloseIcon onClick={handleClose} className="close-icon" />
        </Link>

        <Link
          to={`/images/${query}/${images[Math.floor(Math.random() * 30)]?.id}`}
        >
          <ChevronLeftIcon className="prev-image-icon" />
        </Link>
        <Link
          to={`/images/${query}/${images[Math.floor(Math.random() * 30)]?.id}`}
        >
          <ChevronRightIcon className="next-image-icon" />
        </Link>

        <Box className="box">
          <div className="top">
            <div className="top__author">
              <Avatar
                alt="Remy Sharp"
                src={image?.user?.profile_image?.medium}
              />
              <div className="top__author-info">
                <h3 className="top__author-info-name">{image?.user?.name}</h3>
                <p className="top__author-info-bio">{`@${image?.user?.instagram_username}`}</p>
              </div>
            </div>
            <div className="top__download-button">
              <div className="download-button">Download</div>
              <IconButton
                className="icon-download-button"
                onClick={handleMenuClick}
              >
                <KeyboardArrowDownIcon />
              </IconButton>
            </div>
          </div>

          <div className="img">
            <img className="full-image" src={image?.urls?.full} alt="" />
          </div>

          <div className="image-actions">
            <div className="left">
              <div className="views">
                <p className="views-text">Views</p>
                <p className="views-number">{image?.views}</p>
              </div>
              <div className="downloads">
                <p className="downloads-text">Downloads</p>
                <p className="downloads-number">{image?.downloads}</p>
              </div>
            </div>
            <div className="right">
              <Tooltip title="Download">
                <IconButton className="icon-button download">
                  <DownloadIcon />
                </IconButton>
              </Tooltip>
              {like ? (
                <Tooltip title="Liked">
                  <IconButton className="icon-button">
                    <FavoriteIcon onClick={() => setLike(!like)} />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title="Like">
                  <IconButton className="icon-button">
                    <FavoriteBorderIcon onClick={() => setLike(!like)} />
                  </IconButton>
                </Tooltip>
              )}
              <Tooltip title="Add Album">
                <IconButton className="icon-button">
                  <AddIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton className="icon-button">
                  <ShareIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="More">
                <IconButton className="icon-button">
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>
            </div>
          </div>

          <div className="image-info">
            <div className="info name">
              <ImageIcon />
              {capitalize(image?.alt_description)}
            </div>
            <div className="info">
              <LocationOnIcon />
              {image?.location?.name}
            </div>
            <div className="info">
              <EventIcon />
              <Moment
                format="HH:MM:SS, DD/MM/YYYY"
                className="info"
                date={image?.updated_at}
              />
            </div>
            <div className="info">
              <CameraAltIcon />
              {image?.exif?.name}
            </div>
          </div>

          <div className="related-images">
            <h3 className="related-images__title">RELATED IMAGES</h3>
            <Carousel breakPoints={breakPoints}>
              {images
                .sort(() => Math.random() - 0.5)
                .map((image) => (
                  <Link
                    to={`/images/${query}/${image.id}`}
                    key={image.id}
                    className="related-image"
                  >
                    <img src={image.urls.small} alt="" />
                  </Link>
                ))}
            </Carousel>
          </div>

          <div className="image-comments">
            <Comments />
          </div>
        </Box>
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem className="menu-item" onClick={handleMenuClose}>
            Small (640x426)
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>Medium (1920x1280)</MenuItem>
          <MenuItem onClick={handleMenuClose}>Large (2400x1600)</MenuItem>
          <Divider />
          <MenuItem
            onClick={handleMenuClose}
          >{`Original Size (${image?.width}x${image?.height})`}</MenuItem>
        </Menu>
      </div>
    </Modal>
  );
}
