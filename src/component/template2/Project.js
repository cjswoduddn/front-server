import React from 'react';
import ProjectItem from './ProjectItem';
import {Button, Grid} from '@material-ui/core';
import "./Template2Project.css";

const Project = ({project, setProject}) => {

    const addProject = () => {
        setProject({
            key: project.key + 1,
            items: project.items.concat({
                id: project.key + 1,
                name: "",
                role: "",
                intro: "",
                thumbnail: undefined,
                previewThumbnail: undefined
            })
        })
    }

    const removeProject = (id) => {
        setProject({
            key: project.key,
            items: project.items.filter(item => item.id !== id)
        })
    }

    const updateProject = (id, data) => {
        setProject({
            key: project.key,
            items: project.items.map(
                item => id === item.id ?
                    {...item, ...data} :
                    item
            )
        })
    }

    return (
        <Grid container className="template2-project-container" justify="center">
            <Grid container justify="center">
                <h1 style={{letterSpacing: 1, marginTop: 50, color: '#595959'}}>PROJECT</h1>
            </Grid>
            {project.items.map(item => (
                <ProjectItem key={item.id} field={item} updateProject={updateProject} removeProject={removeProject}/>))}
            <Grid container style={{marginTop: "20px"}}></Grid>
            <Button variant="outlined" size="large" onClick={addProject}>ADD</Button>
            <Grid container style={{marginTop: "50px"}}></Grid>
        </Grid>

    )
}

export default Project;
