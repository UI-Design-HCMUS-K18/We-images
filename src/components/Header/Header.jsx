import React from 'react';
import { Search, NotificationsNone, Add, Close } from '@mui/icons-material';
import './header.css';

function Header() {
  return (
    <div className="headerContainer">
      <div className="headerLeft">
        <span className="logo">We Images</span>
      </div>
      <div className="headerCenter">
        <div className="searchBar">
          <div className="searchBarLeft">
            <Search className="searchIcon" />
            <input
              className="searchInput"
              type="text"
              placeholder="Search..."
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
