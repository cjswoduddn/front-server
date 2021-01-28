import React from 'react';
import { Link } from 'react-router-dom';
import {Grid} from '@material-ui/core';
import back2 from "../../factory/images/back2.gif";

const Template = () =>{
    return (
        // <Grid container direction="row" alignItems="center" justify="center"
        //       style={{marginTop: 102, textAlign: "center"}}>
        //     <Grid item xs={4}><Link to='/t1'>Hello1</Link></Grid>
        //   <Grid item xs={4}>Hello2</Grid>
        //   <Grid item xs={4}>Hello3</Grid>
        // </Grid>
        <div>
        <div className="wallpaper" style={{textAlign: "center", alignItems: "center"}}>
            <div className="content">
                <Link to="/template/t1"><div className="block x1">x1</div></Link>
                <Link to="/t2"><div className="block x2">x2</div></Link>
                <div className="block x3">x3</div>
                <div className="block x4">x4</div>
                <div className="block x5">x5</div>
            </div>
        </div>
        </div>

    );
}

export default Template;
