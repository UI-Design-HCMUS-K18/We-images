import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './comments.css';

const data = [
  {
    id: 1,
    name: 'John Doe',
    content: 'Such tempting pictures love it',
    avt: 'https://randomuser.me/api/portraits/men/32.jpg',
    time: '19/02/2021',
  },
  {
    id: 2,
    name: 'Adam Chris',
    content: 'This is called a perfect shot',
    avt: 'https://randomuser.me/api/portraits/men/68.jpg',
    time: '19/02/2021',
  },
  {
    id: 3,
    name: 'Hennry',
    content: 'Prettiest Picture',
    avt: 'https://randomuser.me/api/portraits/women/43.jpg',
    time: '19/02/2021',
  },
  {
    id: 4,
    name: 'Cristian',
    content: 'Nice biceps, looking, great brother',
    avt: 'https://randomuser.me/api/portraits/women/31.jpg',
    time: '19/02/2021',
  },
];

const myAvt = 'https://randomuser.me/api/portraits/men/79.jpg';

export default function Comments() {
  const [comments, setComments] = useState(data);
  const [comment, setComment] = useState('');

  const submitComment = () => {
    const newComment = {
      id: comments.length + 1,
      name: 'Akatsuki Kojou',
      content: comment,
      avt: myAvt,
      time: 'now',
    };
    setComments([newComment, ...comments]);
    setComment('');
  };

  return (
    <div className="comments">
      <div className="addComment">
        <Avatar src={myAvt} />
        <div className="input">
          <TextField
            value={comment}
            sx={{ width: '70%' }}
            label="Add your comment here"
            variant="outlined"
            className="field"
            multiline
            rows={4}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button
            className="comment-button"
            onClick={submitComment}
            variant="contained"
          >
            Comment
          </Button>
        </div>
      </div>
      <div className="listComment">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <div className="comment__top">
              <Avatar src={comment.avt} />
              <div className="name">{comment.name}</div>
              <span>{`(${comment.time})`}</span>
            </div>
            <div className="comment__content">
              <div className="text">{comment.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
