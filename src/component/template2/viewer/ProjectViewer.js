import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2ProjectViewer.css";
import ProjectItemViewer from "./ProjectItemViewer";

const ProjectViewer = ({project}) => {
    return (
        <Grid container className="template2-project-container" justify="center">
            <Grid container justify="center">
                <h1 style={{letterSpacing: 1, marginTop: 50, color: '#595959'}}>PROJECT</h1>
            </Grid>
            {project.items.map(item => (
                <ProjectItemViewer key={item.id} field={item}/>))}
            <Grid container style={{marginTop: "20px"}}></Grid>
            <Grid container style={{marginTop: "67px"}}></Grid>
        </Grid>

    )
}

export default ProjectViewer;
