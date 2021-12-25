import React, { useState, useEffect, useCallback } from 'react';
import unsplash from '../../api/unsplash';
import ImageCard from '../ImageCard/ImageCard';
import { useLocation } from 'react-router-dom';
import './imagelist.css';

function ImageList({
  filters,
  images
}) {
  
  if (images.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="imageList">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default React.memo(ImageList);
