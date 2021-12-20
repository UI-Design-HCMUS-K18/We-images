import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import ImageList from '../../components/ImageList/ImageList';
import './searchPage.css';

function SearchPage(props) {
  return (
    <div className="searchPageContainer">
      <SideBar />
      <div className="feed">
        <div className="filter">
          <span className="sort">Sort:</span>
          <span className="related">Related tags:</span>
        </div>
        <ImageList />
      </div>
    </div>
  );
}

export default SearchPage;
