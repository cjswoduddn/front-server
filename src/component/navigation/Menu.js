import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link, useHistory} from "react-router-dom";
import axios from 'axios';

const CustomizedMenus = ({shrink}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {setAnchorEl(event.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};

    const TEMPLATE_BASE_URL = 'http://api.appeal.icu/';
    // const TEMPLATE_BASE_URL = 'http://localhot:8080/';

    const history = useHistory();
    const logout = () => {
      sessionStorage.removeItem("user");
      history.push('/login');
    }

    const updateMyAccount = () =>{
      axios({
        method: 'get',
        withCredentials: true,
        url: TEMPLATE_BASE_URL+"member"
      })
          .then((res)=>{
            history.push({
              pathname: "/profile",
              state:{
                account: res.data
              }
            });
  
          })
          .catch((err)=>{
            console.log(err);
          });
    }
    const searchMyTemplate = () =>{
      axios({
        method: 'get',
        withCredentials: true,
        url: TEMPLATE_BASE_URL+"portfolio"
      })
          .then((res)=>{
            history.push({
              pathname: "/search",
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
                <MenuItem onClick={updateMyAccount} className="navLink" style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>profile</MenuItem>
                <MenuItem onClick={()=>searchMyTemplate()} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>my template</MenuItem>
                <MenuItem onClick={logout} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>logout</MenuItem>
            </Menu>
        </div>
    );
}

export default CustomizedMenus;