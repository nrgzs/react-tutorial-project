import React from 'react';
import logo from './../img/airbnb-1.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" alt="logo" />
    </nav>
  );
}
