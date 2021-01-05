import React from 'react';
// import back3 from "../../factory/images/home_back1.gif";
import signin_back from '../../factory/images/signin_back3.jpg';
import {Grid} from "@material-ui/core";

const SignIn = () =>{
  return (
    <Grid container style={{backgroundImage: `url(${signin_back})`, height: '100vh'}}>
      <Grid item xs={12} style={{marginTop: 102, color: 'white'}}>
        adf
      </Grid>
    </Grid>
  );
}

export default SignIn;
