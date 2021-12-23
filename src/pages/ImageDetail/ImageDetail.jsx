import { useHistory, useParams } from 'react-router-dom';
import './imageDetail.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Modal from '@mui/material/Modal';

export default function ImageDetail() {
  let history = useHistory();
  let { id } = useParams();
  const [open, setOpen] = React.useState(true);
  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  console.log(id);

  return (
    <Modal className="modal" open={open}>
      <div className="container">
        <CloseIcon onClick={handleClose} className="close-icon" />
        <ChevronLeftIcon className="prev-image-icon" />
        <ChevronRightIcon className="next-image-icon" />
        <Box className="box"></Box>
      </div>
    </Modal>
  );
}
