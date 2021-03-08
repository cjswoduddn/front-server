import React, { useEffect, useState } from 'react';
import './Nav.css';
import logo from '../../factory/images/logo.png';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Search from "./search/Search";
import { useHistory } from "react-router"

const Nav = () =>{
  let history = useHistory()

  const [mode, setMode] = useState("nav-init");
  const [mode2, setMode2] = useState("img-init");
  const pathname = window.location.pathname

  const logout = () => {
    sessionStorage.removeItem("user");
    history.push('/login');
    window.location.reload();
  }

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
      <AppBar className={mode}>
        <Toolbar style={{
          visibility: sessionStorage.getItem('user') == null ? 'hidden': 'visible',
          backgroundColor: mode === 'nav-shrink' ? 'rgb(26, 26, 26)' : null, paddingRight: '3%', paddingLeft: 0, height: '100%', justifyContent: 'center' }}>
          <Typography style={{flexGrow:1, visibility: 'visible'}}>
            <Link to="/">
              <img
                  // onClick src={logo} height={this.state.imgHeight} style={{WebkitTransition: 'all 0.7s ease-in-out', transition: 'all 0.7s ease-in-out', verticalAlign: "middle"}}
                  className={mode2} src={logo}
              />
            </Link>
          </Typography>
          <Typography variant = ""  color="inherit" style={{marginRight: 50}}>
            <Search />
          </Typography>

          {/*<Typography className="padding" variant = ""  color="inherit">*/}
          {/*  <Link className="navLink" to="/home" style={{color: mode === 'nav-shrink' ? 'white' : 'black'}}>home</Link>*/}
          {/*</Typography>*/}
          <Typography className="padding" variant = ""  color="inherit">
            <Link className="navLink" to="/template" style={{color: mode === 'nav-shrink' ? 'white' : 'black'}}>template</Link>
          </Typography>
          <Typography className="padding" variant = ""  color="inherit" style={{visibility: 'visible'}}>
            {sessionStorage.getItem('user') === null ?
                <Link className="navLink" to="/login" style={{color: 'white'}}>login
                </Link>
                : <Link className="navLink" onClick={logout} style={{color: mode === 'nav-shrink' ? 'white' : 'black'}}>logout
                </Link>}
          </Typography>
        </Toolbar>
        {/*<Link to="/"><img className={mode2} src={logo} /></Link>*/}
        {/*<nav style={{ display: pathname == '/sign_in'? 'none': null, backgroundColor: mode === 'nav-shrink' ? 'rgb(26, 26, 26)' : null, paddingRight: '3%', height: '100%', justifyContent: 'center' }}>*/}
        {/*  <ul className="nav-ul">*/}
        {/*    <Link>*/}
        {/*    <li className="nav-li" ><Search/></li>*/}
        {/*      </Link>*/}
        {/*    <Link to="/template" className="nav-link">*/}
        {/*      <li className="nav-li" style={{color: mode === 'nav-shrink' ? 'white' : null}}>template</li>*/}
        {/*    </Link>*/}
        {/*    <Link to="/account" className="nav-link">*/}
        {/*      <li className="nav-li"  style={{color: mode === 'nav-shrink' ? 'white' : null}}>login</li>*/}
        {/*    </Link>*/}
        {/*  </ul>*/}
        {/*</nav>*/}
      </AppBar>
  )
}

export default Nav;