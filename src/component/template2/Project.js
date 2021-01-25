import React, {useEffect, useRef} from 'react';
import {Grid} from '@material-ui/core';
import "./Template2Project.css";

const Project = ({project, setProject}) =>{

  const testInput = useRef();

  const onChange=(e)=>{
    setProject({
      [e.target.name] : e.target.value
    })
  }

  return(
    <Grid container className="template2-project-container">
      <Grid container className="template2-project-title"
        justify="center">
        <Grid item>
          <h1>PROJECTS</h1>
          <input type="text" name="project" 
            onChange={onChange}
            defaultValue={project.project}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Project;