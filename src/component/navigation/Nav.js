import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import './nav.css';
import BigImage from '../../factory/images/big.png';
import SmallImage from '../../factory/images/small.png';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Nav = () =>{

  const [mode, setMode] = useState("nav-top");
  const [img, setImg] = useState(BigImage);

  useEffect(()=>{
    function handleMode(){
      if(window.scrollY > 0){
        setMode("nav-bottom");
        setImg(SmallImage);
      }else{
        setMode("nav-top");
        setImg(BigImage);
      }
    }
    window.addEventListener("scroll", handleMode);

    return ()=>{
      window.removeEventListener("scroll", handleMode);
    }
  }, [])

  return(
    <Grid container justify="center" className={mode}>
      <Grid container xs="11" className="item">

        <Grid item xs="4" className="item">
          <Link to="/"><img src={img}/></Link>
        </Grid>

        <Grid item xs="8" className="item">
          <NavItem/>
        </Grid>
        
      </Grid>
    </Grid>
  )
}

export default Nav;