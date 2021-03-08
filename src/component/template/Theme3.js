import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import avatar from "../../factory/images/min.png";

const Theme2 = () => {
    return(
        <Grid container>
            <Grid item container xs={6} style={{height: 2000, marginTop: '8%', marginLeft: '5%'}}>
                <Typography variant="h1">
                    asdf
                </Typography>
            </Grid>
            <Grid item xs={6} style={{backgroundColor: 'rgb(142, 166, 155)'}}>
                <div>
                    <img width="30%" src={avatar} style={{position: 'fixed', margin: '10% 11%', borderRadius: '50%'}} />
                </div>
            </Grid>
        </Grid>


    )
}

export default Theme2;