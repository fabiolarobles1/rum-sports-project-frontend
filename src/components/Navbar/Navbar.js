import React from 'react';
import './Navbar.css';
import logo from '../../assets/Logo/logo.png';
import history from "../../Routing/history";

function Navbar(){

  return (
    <nav className='navbar'>
      <button className="navbar-logo-container" onClick={() => history.push("/")}>
        <img src={logo} className='navbar-logo' alt= "logo" />
      </button>
      <button className='boxes' onClick={() => history.push("/")}>Home</button>
      <button className='boxes' onClick={() => history.push("/about")}>About</button>
      <button className='boxes' onClick={() => history.push("/sports")}>Sports</button>
    </nav>
  );
}

export default Navbar;
