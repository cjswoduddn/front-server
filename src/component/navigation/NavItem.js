import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const NavItem = () =>{
  return (
    <nav>
      <ul className="nav-ul">
        <Link to="/accounts" className="nav-link"><li onClick className="nav-li">sign in</li></Link>
        <Link to="/head_hunt" className="nav-link"><li className="nav-li">head hunting</li></Link>
        <Link to="/template" className="nav-link"><li className="nav-li">template</li></Link>
      </ul>
    </nav>
  )
}

export default NavItem;