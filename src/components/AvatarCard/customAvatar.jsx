import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import './avatarCard.css';

const avatarLink='https://i.pravatar.cc/400?img=69';

function ImageCard() {
  
  return (
    <Box
      className="avatarWrap"
      style={{
        position: 'relative',
      }}
      sx={{
        mt: -10
      }}
    >
      <Avatar
        src={avatarLink}
        alt='user-avatar'
        sx={{
          width: 220,
          height: 220
        }}
      />
      <div
        style={{
          height: 220,
          width: 220,
          borderRadius: '50%'
        }}
        className="avatarDescription"
      >
        <div className="iconItem">
          <PhotoCameraIcon sx={{ width: 40, height: 40 }}/>
        </div>
      </div>
      
    </Box>
  );
}

export default ImageCard;
