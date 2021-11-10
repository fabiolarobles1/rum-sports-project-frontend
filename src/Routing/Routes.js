import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NavBar from '../components/Navbar/Navbar';
import Sports from '../components/Sports/Sports';
import Teampage from '../components/Teampage/Teampage';


class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <NavBar/>
        <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/about' exact component={About}/>
         <Route path='/sports' exact component={Sports}/>
         <Route path='/teampage' exact component={Teampage}/>
          {/* add all components here */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;