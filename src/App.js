import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import ImageDetail from './pages/ImageDetail/ImageDetail';
import './App.css';

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
      </Switch>
    </Router>
  );
}

export default App;
