import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2Project.css";

const Career = ({register}) =>{
  return(
    <Grid container className="template2-project-container">
      <Grid container className="template2-project-title"
        justify="center">
        <Grid item>
          <h1>CAREER</h1>
          <input type="text" name="career" ref={register}></input>
        </Grid>
      </Grid>
    </Grid>

  )
}

export default Career;