import React from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/SideBar/SideBar';
import ImageList from '../../components/ImageList/ImageList';
import './searchPage.css';
import { FilterList } from '@mui/icons-material';
import unsplash from '../../api/unsplash';

const indexFilter = {
  Topics: 4,
  Categories: 7,
  Types: 4,
};
const initialFilter = {
  animal: false,
  nature: false,
  people: false,
  technology: false,
  backgrounds: false,
  stocks: false,
  banners: false,
  designs: false,
  wallpapers: false,
  arts: false,
  photos: false,
  tranparent: false,
  icons: false,
  vectors: false,
  psds: false,
};

function SearchPage() {
  const [filters, setFilter] = React.useState(initialFilter);
  const [hidenFilter, setHidenFilter] = React.useState(false);

  const search = useLocation().search;
  const query = new URLSearchParams(search).get('query');
  console.log(query);
  const [images, setImages] = React.useState([]);
  const fetchImages = React.useCallback(async () => {
    const response = await unsplash.get('/search/photos', {
      params: { query: query, page: 1, per_page: 30 },
    });
    setImages(response.data.results);
  },[query])
  React.useEffect(() => {
    fetchImages();
  }, [query, fetchImages]);
  const onHideHandler = () => {
    setHidenFilter((state) => !state);
  };

  const onChangeFilterHandler = (event) => {
    setFilter({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const classIconFilter = [
    'filter-icon',
    hidenFilter ? 'filterOpen' : 'filterClose',
  ];
  const classFilter = ['filter_sidebar', hidenFilter ? 'filterClose' : 'filterOpen'];

  return (
    <div className="searchPageContainer">
      <div className={classIconFilter.join(' ')} onClick={onHideHandler}>
        <FilterList sx={{ fontSize: 32, paddingRight:1 }} />
        <span>Filter</span>
      </div>

      <SideBar
        className={classFilter.join(' ')}
        onHideHandler={onHideHandler}
        filters={filters}
        indexFilter={indexFilter}
        onChangeFilterHandler={onChangeFilterHandler}
      />

      <div className="feed">
        <div className="filter">
          <span className="sort">Sort:</span>
          <span className="related">Related tags:</span>
        </div>
        <ImageList filters={filters} images={images} />
      </div>
    </div>
  );
}

export default SearchPage;
