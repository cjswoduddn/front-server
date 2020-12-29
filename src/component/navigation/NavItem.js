import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const NavItem = () =>{
  return (
    <nav>
      <ul className="nav-ul">
        <li className="nav-li"><Link to="/accounts" className="nav-link">Sign In</Link></li>
        <li className="nav-li"><Link to="/head_hunt" className="nav-link">Head Hunting</Link></li>
        <li className="nav-li"><Link to="/template" className="nav-link">Template</Link></li>
      </ul>
    </nav>
  )
}

export default NavItem;