import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to = '/home'><h1>Home</h1></Link>
      <Link to = '/shorten'><h1>Encurtador</h1></Link>
      <Link to = '/about'><h1>About</h1></Link>
    </div>
  )
}
export default Navbar;