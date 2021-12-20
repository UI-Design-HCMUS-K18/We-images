import React, { useState, useEffect } from 'react';
import unsplash from '../../api/unsplash';
import ImageCard from '../ImageCard/ImageCard';
import './imagelist.css';

function ImageList() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await unsplash.get('/search/photos', {
        params: { query: 'nature' },
      });
      setImages(response.data.results);
    })();
  }, []);
  return (
    <div className="imageList">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
