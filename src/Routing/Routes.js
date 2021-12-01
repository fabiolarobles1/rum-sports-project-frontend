import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NavBar from '../components/Navbar/Navbar';
import Sports from '../components/Sports/Sports';
import Teampage from '../components/Teampage/Teampage';
import Login from '../components/Login/Login';
import SignUp from '../components/SignUp/SignUp';


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/sports' exact component={Sports} />
          <Route path='/sports/baseball' exact component={Teampage} />
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={SignUp} />
          {/* add all components here */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;