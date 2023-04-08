import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navlinks-left'>
        <Link to='/' className='navlink'>
          Gavin Hon
        </Link>
      </div>

      <div className='navlinks-right'>
        <Link to='/' className='navlink'>
          About
        </Link>
        <Link to='/works' className='navlink'>
          Work
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
