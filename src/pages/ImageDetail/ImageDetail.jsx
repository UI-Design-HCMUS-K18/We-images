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
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import unsplash from '../../api/unsplash';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default function ImageDetail() {
  let { id, query } = useParams();
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);

  console.log(image);

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
            <div className="top__download-button"></div>
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
            <div className="image-name">
              {capitalize(image?.alt_description)}
            </div>
            <div className="right"></div>
          </div>
        </Box>
      </div>
    </Modal>
  );
}
