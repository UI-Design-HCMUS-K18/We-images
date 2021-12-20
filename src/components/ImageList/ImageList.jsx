import React, { useState, useEffect } from 'react';
import unsplash from '../../api/unsplash';
import ImageCard from '../ImageCard/ImageCard';
import { useLocation } from 'react-router-dom';
import './imagelist.css';

function ImageList(props) {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  console.log(query);
  const [images, setImages] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await unsplash.get('/search/photos', {
        params: { query: query, page: 1, per_page: 30 },
      });
      setImages(response.data.results);
    })();
  }, [query]);
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
