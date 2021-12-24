import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Visibility, Favorite, Comment } from '@mui/icons-material';
import './imageCard.css';

function ImageCard(props) {
  const [span, setSpan] = useState(0);
  console.log(props.image);
  const imageRef = useRef(null);
  const { query } = props;
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
      to={`/images/${query}/${id}`}
      className="imageWrap"
      style={{
        gridRowEnd: `${span} span`,
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      <img
        className="imageCard"
        ref={imageRef}
        src={urls.regular}
        alt={description}
      />
      <div className="imageDescription">
        <h4 style={{ fontSize: '24px', marginBottom: '6px' }}>Sunset</h4>
        <h5 style={{ fontSize: '16px', fontWeight: '500' }}>08/11/2021</h5>
        <p style={{ fontSize: '14px' }}>20:15</p>
        <div className="imageIconList">
          <div className="iconItem">
            <Visibility className="chat-icon imageHoverIcon" />
            <span>1103</span>
          </div>
          <div className="iconItem">
            <Favorite className="favorite-icon imageHoverIcon" />
            <span>203</span>
          </div>
          <div className="iconItem">
            <Comment className="comment-icon imageHoverIcon" />
            <span>103</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ImageCard;
