import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NavBar from '../components/Navbar/Navbar';


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar/>
        <Switch>
         <Route path='/' exact component={Home}></Route>
         <Route path='/about' exact component={About}></Route>
          {/* add all components here */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;