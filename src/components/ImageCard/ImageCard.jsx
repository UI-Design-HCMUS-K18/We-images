import React, { useState, useRef, useEffect } from 'react';
import './imageCard.css';

function ImageCard(props) {
  const [span, setSpan] = useState(0);
  const imageRef = useRef(null);
  const { urls, description } = props.image;
  useEffect(() => {
    imageRef.current.addEventListener('load', () => {
      const height = imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);
      setSpan(span);
    });
  }, []);
  return (
    <img
      style={{ gridRowEnd: `${span} span` }}
      ref={imageRef}
      src={urls.regular}
      alt={description}
    />
  );
}

export default ImageCard;
