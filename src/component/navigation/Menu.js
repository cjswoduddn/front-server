import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

const CustomizedMenus = ({shrink}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {setAnchorEl(event.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};

    const TEMPLATE_BASE_URL = "http://localhost:8080/portfolio";

    const history = useHistory();
    const logout = () => {
      sessionStorage.removeItem("user");
      history.push('/login');
    }

    const searchMyTemplate = (e) =>{
      e.preventDefault();
      axios({
        // method: 'post',
        method: 'get',
        url: TEMPLATE_BASE_URL
      })
          .then((res)=>{
            history.push({
              pathname: "/search/mytemplate",
              state:{
                resume: res.data
              }
            });
  
          })
          .catch((err)=>{
            console.log(err);
          });
    }

    return (
        <div>
            <p className="navLink" onClick={handleClick} style={{color: shrink}}>menu</p>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem className="navLink" style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}><Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>profile</Link></MenuItem>
                <MenuItem onClick={searchMyTemplate} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>my template</MenuItem>
                <MenuItem onClick={logout} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>logout</MenuItem>
            </Menu>
        </div>
    );
}

export default CustomizedMenus;