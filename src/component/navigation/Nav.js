import React, {useEffect, useState} from 'react';
import './Nav.css';
import logo from '../../factory/images/logo.png';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import Search from "./search/Search";
import {useHistory, useLocation} from "react-router"
import CustomizedMenus from "./Menu";

const Nav = () => {
    const history = useHistory()

    const [mode, setMode] = useState("nav-init");
    const [mode2, setMode2] = useState("img-init");
    const pathname = window.location.pathname

    const logout = () => {
        sessionStorage.removeItem("user");
        history.push('/login');
        window.location.reload();
    }
    const location = useLocation();
    const memberId = location.state === undefined ? "0" : location.state.memberId;

    useEffect(() => {
        function handleMode() {
            if (window.scrollY > 0) {
                setMode("nav-shrink");
                setMode2("img-shrink");
            } else {
                setMode("nav-init");
                setMode2("img-init");
            }
        }

        window.addEventListener("scroll", handleMode);

        return () => {
            window.removeEventListener("scroll", handleMode);
        }
    }, [])

    return (
        <AppBar className={mode}>
            <Toolbar style={{
                visibility: sessionStorage.getItem('user') == null ? 'hidden' : 'visible',
                backgroundColor: mode === 'nav-shrink' ? 'rgb(26, 26, 26)' : null,
                paddingRight: '3%',
                paddingLeft: 0,
                height: '100%',
                justifyContent: 'center'
            }}>
                <Typography style={{flexGrow: 1, visibility: 'visible'}}>
                    <Link to="/">
                        <img className={mode2} src={logo}/>
                    </Link>
                </Typography>
                <Typography variant="" color="inherit" style={{marginRight: 50}}>
                    <Search/>
                </Typography>

                <Typography className="padding" variant="" color="inherit">
                    <Link className="navLink" to="/template"
                          style={{color: mode === 'nav-shrink' ? 'white' : 'black'}}>template</Link>
                </Typography>
                <Typography className="padding" variant="" color="inherit" style={{visibility: 'visible'}}>
                    {sessionStorage.getItem('user') === null ?
                        <Link className="navLink" to="/login" style={{color: 'white'}}>login
                        </Link>
                        :
                        <div>
                            <CustomizedMenus shrink={mode === 'nav-shrink' ? 'white' : 'black'} />
                        </div>
                    }
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Nav;