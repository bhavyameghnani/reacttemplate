import React, { Component } from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Album from './Components/Album';
import history from './history';
// import {withRouter} from 'react-router';

import {createBrowserHistory} from 'history';
import Blog from './Components/Blog';
import DemandInnovation from './Components/DemandInnovation';
import Incube from './Components/Incube';

export const customHistory = createBrowserHistory();

function App() {
  return (
    <>
    <div>
    <Router history={customHistory}>
        <Switch>
          <Route exact path="/demand" component={Home} />
          <Route exact path="/" component={Album} />
          <Route exact path="/incube" component={Incube} />
          <Route exact path="/inclusive" component={Blog} />
          <Route exact path="/demandform" component={DemandInnovation} />
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
