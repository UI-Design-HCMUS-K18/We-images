import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import SearchPage from './pages/SearchPage/SearchPage';
import './App.css';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
