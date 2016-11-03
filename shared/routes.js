import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Issues from './Components/Issues';
import Issue from './Components/Issue';
import Todos from '../shared/components/Todos';
import Game from '../shared/components/Game';

module.exports = (
  <Router path="/" component={Layout}>
    <IndexRoute name="home" component={Home}/>
    <Route path="/game" component={Game}/>
    <Route path="/issues" component={Issues}/>
    <Route path="/issues/:id" component={Issue}/>
    <Route path="/todos" component={Todos}/>
  </Router>
);
