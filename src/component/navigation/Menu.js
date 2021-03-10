import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link, useHistory} from "react-router-dom";

const CustomizedMenus = ({shrink}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {setAnchorEl(event.currentTarget);};
    const handleClose = () => {setAnchorEl(null);};

    const history = useHistory();
    const logout = () => {
      sessionStorage.removeItem("user");
      history.push('/login');
      window.location.reload();
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
                <MenuItem className="navLink" onClick={handleClose} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}><Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>profile</Link></MenuItem>
                <MenuItem onClick={handleClose} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>my template</MenuItem>
                <MenuItem onClick={logout} style={{letterSpacing: 1, fontSize: 18, fontVariant: 'small-caps'}}>logout</MenuItem>
            </Menu>
        </div>
    );
}

export default CustomizedMenus;