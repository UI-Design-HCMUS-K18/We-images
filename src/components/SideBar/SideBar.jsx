import React from 'react';
import { FilterList } from '@mui/icons-material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './sidebar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <button className="btn-outline-blue">
        <KeyboardDoubleArrowLeftIcon className="btn-icon" />
        Hide
      </button>
      <button className="btn-outline-blue">
        <FilterList className="btn-icon" />
        Filtering
      </button>
    </div>
  );
}

export default SideBar;
