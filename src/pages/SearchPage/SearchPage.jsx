import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import ImageList from '../../components/ImageList/ImageList';
import './searchPage.css';

function SearchPage() {
  return (
    <div className="searchPageContainer">
      <SideBar />
      <div className="feed">
        <div className="filter">
          <span>Sort</span>
          <span>Related tags</span>
        </div>
        <ImageList />
      </div>
    </div>
  );
}

export default SearchPage;
