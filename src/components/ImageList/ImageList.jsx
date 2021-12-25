import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import CircularProgress from '@mui/material/CircularProgress';

import './imagelist.css';

function ImageList({
  filters,
  images,
  loading,
  query
}) {
  
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className="imageList">
      {images.map((image) => (
        <ImageCard query={query} key={image.id} image={image} />
      ))}
    </div>
  );
}

export default React.memo(ImageList);
