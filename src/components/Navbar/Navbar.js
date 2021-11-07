import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo.png';
import history from "../../Routing/history";

function Navbar(){

  return (
    <nav className='navbar'>
      <button className="navbar-logo-home" onClick={() => history.push("/")}>
        <img src={logo} className='navbar-logo'/>
      </button>
      <button className='boxes' onClick={() => history.push("/")}className='letters'>Home</button>
      <button className='boxes' onClick={() => history.push("/about")}className='letters'>About</button>
      <button className='boxes' onClick={() => history.push("/sports")}className='letters'>Sports</button>
    </nav>
  );
}

export default Navbar;
