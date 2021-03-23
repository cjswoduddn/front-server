import React from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Template2ProjectViewer.css";

const ProjectItemViewer = ({field}) => {

    return (
        <Grid container item xs="7" className="template2-project-item-container">
            <Grid container item xs="7">
                <Grid container style={{marginTop: 10}}>
                    {/*<div style={{width: "10px", backgroundColor: "blue", height: "72px"}}/>*/}
                    <Grid container item xs="10" direction="column" spacing="1">
                        <Grid item xs="10">
                            <p className="template2-project-item-name-viewer">{field.name}</p>
                        </Grid>
                        <Grid item xs="10">
                            <p className="template2-project-item-role-viewer">{field.role}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs="9" justify="center" style={{marginLeft: "7%", marginBottom: 20}}>
                  <p className="template2-project-item-intro-viewer">
                      {field.description}
                  </p>
                </Grid>
            </Grid>
            <Grid container item xs="5" alignItems="center">
                <label className="template2-project-item-thumbnail-label"
                       for={field.id}
                       style={{backgroundImage: `url(${field.previewThumbnail})`}}>
                    IMAGE
                    <input
                        id={field.id}
                        accept="image/*" type="file"
                        className="template2-project-item-thumbnail-img"
                        // onChange={changeThumbnails}
                    />
                </label>
            </Grid>
        </Grid>
    )
}

export default ProjectItemViewer;