import React from 'react';
import {Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Main from './pages/main';
import Err from './pages/error';

class Warcraft extends React.Component{
  render() {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Main} />
        <Route path='/*' component={Err} />
      </Router>
    );
  }
}

export default Warcraft;
