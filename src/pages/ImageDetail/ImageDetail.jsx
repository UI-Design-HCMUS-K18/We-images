/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory, useParams } from 'react-router-dom';
import './imageDetail.css';
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import unsplash from '../../api/unsplash';

export default function ImageDetail() {
  let history = useHistory();
  let { id } = useParams();
  const [open, setOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState();

  useEffect(() => {
    const fectchImage = async (imageID) => {
      const response = await unsplash.get(`/photos/${imageID}`);
      setImage(response.data);
      setIsLoading(false);
    };
    fectchImage(id);
  }, []);

  const handleClose = () => {
    setOpen(false);
    history.goBack();
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
        <CloseIcon onClick={handleClose} className="close-icon" />
        <ChevronLeftIcon className="prev-image-icon" />
        <ChevronRightIcon className="next-image-icon" />
        <Box className="box">
          <div className="top">
            <div className="top__author"></div>
            <div className="top__download-button"></div>
          </div>
          <div className="img">
            <img className="full-image" src={image?.urls?.full} alt="" />
          </div>
        </Box>
      </div>
    </Modal>
  );
}
