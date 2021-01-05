import React from 'react';

import Search from './search/Search';
import { Link } from 'react-router-dom';
import './nav.css';

const NavItem = () =>{
  return (
    <nav>
      <ul className="nav-ul">
        <li className="nav-li"><Search/></li>
        <li className="nav-li"><Link to="/template" className="nav-link">템플릿</Link></li>
        <li className="nav-li"><Link to="/accounts" className="nav-link">로그인</Link></li>
      </ul>
    </nav>
  )
}

export default NavItem;