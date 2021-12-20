import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, NotificationsNone, Add, Close } from '@mui/icons-material';
import history from '../../history';
import './header.css';

function Header(props) {
  const [value, setValue] = useState('');
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      if (value.trim() !== '') {
        history.push(`/search?query=${value}`);
      }
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <Link className="logo" to="/">
          <span>We Images</span>
        </Link>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <div className="searchBarLeft">
            <Search className="searchIcon" />
            <input
              className="searchInput"
              type="text"
              placeholder="Search..."
              value={value}
              onKeyDown={handleEnter}
              onChange={handleChange}
            />
          </div>
          <Close className="closeIcon" />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerIcons">
          <div className="headerNotify headerIconItem">
            <NotificationsNone />
          </div>
          <div className="headerUpload headerIconItem">
            <button className="headerUploadBtn">
              <Add className="addIcon" />
              Upload
            </button>
          </div>
          <img
            className="headerAvatar headerIconItem"
            src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
