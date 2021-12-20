import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './imageCard.css';

function ImageCard(props) {
  const [span, setSpan] = useState(0);
  const imageRef = useRef(null);
  const { urls, description, id } = props.image;
  useEffect(() => {
    imageRef.current.addEventListener('load', () => {
      const height = imageRef.current.clientHeight;
      const span = Math.ceil(height / 10);
      setSpan(span);
    });
  }, []);
  return (
    <Link
      to={`/images/${id}`}
      style={{ gridRowEnd: `${span} span`, cursor: 'pointer' }}
    >
      <img
        className="imageCard"
        ref={imageRef}
        src={urls.regular}
        alt={description}
      />
    </Link>
  );
}

export default ImageCard;
