import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import ImageDetail from './pages/ImageDetail/ImageDetail';
import './App.css';
import EditUpload from './components/UploadImage/EditUpload/EditUpload';
import UploadPage from './pages/UploadPage/UploadPage';
import UserProfile from './pages/UserProfile/UserHome';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/search" exact>
          <SearchPage />
        </Route>
        <Route path="/images/:query/:id">
          <ImageDetail />
        </Route>
        <Route path="/upload">
          <UploadPage />
        </Route>
        <Route path="/editupload">
          <EditUpload />
        </Route>
        <Route path="/userprofile">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
