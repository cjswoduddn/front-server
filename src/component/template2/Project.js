import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2Project.css";

const Project = ({state, setState}) =>{

  const onChange=(e)=>{
    setState({
      [e.target.name] : e.target.value
    })
  }

  return(
    <Grid container className="template2-project-container">
      <Grid container className="template2-project-title" justify="center">
        <Grid item>
          <h1>PROJECTS</h1>
          <input type="text" name="project" 
            onChange={onChange}
            defaultValue={state.project}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item>
        </Grid>
        <Grid item>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Project;