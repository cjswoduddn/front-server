import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../../factory/images/logo.png';
import { Link } from 'react-router-dom';
import { AppBar } from "@material-ui/core";
import Search from "./search/Search";

const Nav = () =>{
  const [mode, setMode] = useState("nav-init");
  const [mode2, setMode2] = useState("img-init");
  const pathname = window.location.pathname

  useEffect(()=>{
    function handleMode(){
      if(window.scrollY > 0){
        setMode("nav-shrink");
        setMode2("img-shrink");
      } else {
        setMode("nav-init");
        setMode2("img-init");
      }
    }
    window.addEventListener("scroll", handleMode);

    return ()=>{
      window.removeEventListener("scroll", handleMode);
    }
  }, [])

  return(
      <AppBar  className={mode}>
        <Link to="/"><img className={mode2} src={logo} /></Link>
        <nav style={{ display: pathname == '/sign_in'? 'none': null, backgroundColor: mode === 'nav-shrink' ? 'rgb(26, 26, 26)' : null, paddingRight: '3%', height: '100%', justifyContent: 'center' }}>
          <ul className="nav-ul">
            <li className="nav-li" ><Search/></li>
            <Link to="/template" className="nav-link">
              <li className="nav-li" style={{color: mode === 'nav-shrink' ? 'white' : null}}>template</li>
            </Link>
            <Link to="/sign_in" className="nav-link">
              <li onClick className="nav-li"  style={{color: mode === 'nav-shrink' ? 'white' : null}}>login</li>
            </Link>
          </ul>
        </nav>
      </AppBar>
  )
}

export default Nav;