import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../../factory/images/logo.png';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import { AppBar } from "@material-ui/core";

const Nav = () =>{
  const [mode, setMode] = useState("nav-init");
  const [mode2, setMode2] = useState("img-init");

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
      <AppBar className={mode} style={{justifyContent: 'center'}}>
        <Link to="/"><img className={mode2} src={logo} /></Link>
        <NavItem />
      </AppBar>
  )
}

export default Nav;