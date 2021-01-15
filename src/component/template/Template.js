import React from 'react';
import { Link } from 'react-router-dom';
import {Grid} from '@material-ui/core';

const Template = () =>{
  return (
      <Grid container direction="row" alignItems="center" justify="center"
            style={{marginTop: 102, textAlign: "center"}}>
          <Grid item xs={4}><Link to='/template1'>Hello1</Link></Grid>
        <Grid item xs={4}>Hello2</Grid>
        <Grid item xs={4}>Hello3</Grid>
      </Grid>
  );
}

export default Template;
