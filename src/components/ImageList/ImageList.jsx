import React, { useState, useEffect } from 'react';
import unsplash from '../../api/unsplash';
import ImageCard from '../ImageCard/ImageCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import './imagelist.css';

function ImageList(props) {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await unsplash.get('/search/photos', {
        params: { query: query, page: 1, per_page: 30 },
      });
      setImages(response.data.results);
      setLoading(false);
    })();
  }, [query]);
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
