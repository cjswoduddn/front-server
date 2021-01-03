import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import './nav.css';
import logo from '../../factory/images/logotem2.png';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Nav = () =>{
  const [mode, setMode] = useState("nav-init");

  useEffect(()=>{
    function handleMode(){
      if(window.scrollY > 0){
        setMode("nav-shrink");
      }else{
        setMode("nav-init");
      }
    }
    window.addEventListener("scroll", handleMode);

    return ()=>{
      window.removeEventListener("scroll", handleMode);
    }
  }, [])

  return(
    <Grid container justify="center" className={mode}>
      <Grid item xs={11}>
        <Grid item xs="4" className="item">
          <Link to="/"><img className={mode} src={logo}/></Link>
        </Grid>

        <Grid item xs="8" className="item">
          <NavItem/>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Nav;