import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../components/Home';
import About from '../components/About';


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        {/* <NavBar /> */}
        <Switch>
         <Route path='/' exact component={Home} />
         <Route path='/about' exact component={About} />
          {/* add all components here */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;