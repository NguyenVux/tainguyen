import React from 'react';
import { Header } from './component/Header';
import data from './1911067387_NguyenTranTuanTai.json';
import {MoviesContext,MoviesInfo} from './component/MoviesContext';
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import MoviePage from './component/MoviePage';
import HomePage from './component/HomePage';

function App() {

  return (
    <MoviesContext.Provider value={data as MoviesInfo}>
      <HashRouter>
      <Header/>
      <Switch>
        <Route path="/:id" component={MoviePage}/>
        <Route exact path="/" component={HomePage}/>
      </Switch>
      </HashRouter>
    </MoviesContext.Provider>
  );
}

export default App;
