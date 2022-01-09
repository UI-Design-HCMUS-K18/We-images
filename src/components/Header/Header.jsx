import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, NotificationsNone, Add, Close } from '@mui/icons-material';
import history from '../../history';
import './header.css';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { Tooltip } from '@mui/material';

function Header(props) {
  const search = useLocation().search;

  const [value, setValue] = useState('nature');

  useEffect(() => {
    const query = new URLSearchParams(search).get('query');
    setValue(query);
  }, [search]);

  const isHomePage = useLocation().pathname === '/';
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

  const handleClickAvatar = () => {
    history.push(`/userprofile`);
  };

  return (
    <div
      className={`headerContainer ${isHomePage ? 'tranparent absolute' : ''}`}
      style={{ zIndex: 1 }}
    >
      <div className={`headerLeft ${isHomePage ? 'flex-half' : ''}`}>
        <Tooltip title="Homepage">
        <Link className="logo" to="/">
          <h2>
            <span>W</span>e Images
          </h2>
        </Link>
        </Tooltip>
        {isHomePage && (
          <ul className="menu">
            <li>
              <Link to="/">Design</Link>
            </li>
            <li>
              <Link to="/">Themes</Link>
            </li>
            <li>
              <Link to="/">Collections</Link>
            </li>
            <li>
              <Link to="/">More</Link>
            </li>
          </ul>
        )}
      </div>
      {!isHomePage && (
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
            <Close className="closeIcon" onClick={() => setValue('')} />
          </div>
        </div>
      )}
      <div className="headerRight">
        <div className="headerIcons">
          <div className="headerNotify headerIconItem">
            <Tooltip title="Notifications">
            <NotificationsNone />
            </Tooltip>
          </div>
          <div className="headerUpload headerIconItem">
            <Link className="link" to="/upload">
              <button className="headerUploadBtn">
                <Add className="addIcon" />
                Upload
              </button>
            </Link>
          </div>
          <img
            className="headerAvatar headerIconItem"
            src={process.env.PUBLIC_URL + '/images/avatar.jpg'}
            alt="avatar"
            onClick={handleClickAvatar}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
