import React from 'react';

import Search from './search/Search';
import { Link } from 'react-router-dom';
import './nav.css';

const NavItem = () =>{

    const pathname = window.location.pathname
        return (
            <nav style={{ display: pathname == '/sign_in'? 'none': null }}>
                <ul className="nav-ul">
                    <li className="nav-li"><Search/></li>
                    <Link to="/template" className="nav-link">
                        <li className="nav-li">template</li>
                    </Link>
                    <Link to="/sign_in" className="nav-link">
                        <li className="nav-li">sign in</li>
                    </Link>
                </ul>
            </nav>
    )
}

export default NavItem;