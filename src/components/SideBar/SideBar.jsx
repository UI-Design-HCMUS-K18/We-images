import React from 'react';
import { FilterList } from '@mui/icons-material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import './sidebar.css';
import FilterListComponet from './FilterList';

function SideBar({
  filters,
  onHideHandler,
  onChangeFilterHandler,
  indexFilter,
  className,
}) {
  let content = [];
  for (const key in indexFilter) {
    let displayGroupName = key.charAt(0).toUpperCase() + key.slice(1);
    let temp = {
      name: displayGroupName,
      items: [],
    };
    let i = 0;
    let temp_arr = [];
    let amounts =
      content.length === 0
        ? 0
        : content.length === 1
        ? content[0].items.length
        : content.reduce((a, b) => a.items.length + b.items.length);

    for (const key1 in filters) {
      i++;
      if (amounts > 0 && i <= amounts) continue;
      if (i > indexFilter[key] + amounts) {
        break;
      }
      let displayFilterName = key1.charAt(0).toUpperCase() + key1.slice(1);
      temp_arr.push({ name: displayFilterName, checked: filters[key1] });
    }

    temp.items = temp_arr;
    content.push(temp);
  }

  return (
    <div className={`sidebar ${className}`}>
      <button className="btn-outline-blue" onClick={onHideHandler}>
        <KeyboardDoubleArrowLeftIcon className="btn-icon" />
        Hide
      </button>
      <button className="btn-outline-blue">
        <FilterList className="btn-icon" />
        Filtering
      </button>
      <div className="filter-content">
        {content.map((filter) => (
          <FilterListComponet
            key={filter.name}
            name={filter.name}
            items={filter.items}
            onChangeHandler={onChangeFilterHandler}
          />
        ))}
        <p className='copy-right'><span>Privacy</span><span>Terms</span><span>Policy</span></p>
      </div>
    </div>
  );
}

export default SideBar;
