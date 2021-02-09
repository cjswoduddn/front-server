import React from 'react'; 
import {Grid} from '@material-ui/core';
import "./Template2ProjectViewer.css";

const ProjectViewer = ({data}) =>{
  return(
    <Grid container className="template2-project-viewer-container" justify="center">
      <Grid container justify="center">
        <h1>PROJECT</h1>
      </Grid>
      <Grid container item xs="7" className="template2-project-viewer-item-container" >
        <Grid container item xs="7">
          <Grid container style={{marginTop: "60px"}}>
            <div style={{width: "10px", backgroundColor:"blue", height: "72px"}}/>
            <Grid container item xs="10" direction="column" spacing="1">
              <Grid item xs="8">
                <p className="template2-project-viewer-item-name">
                  {data.projectItem1Name}
                </p>
              </Grid>
              <Grid item xs="8">
                <p className="template2-project-viewer-item-role">
                  {data.projectItem1Role}
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="9" justify="center" style={{marginLeft: "7%"}}>
            <p className="template2-project-viewer-item-intro">
              {data.projectItem1Intro}
            </p>
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <img src={data.projectItem1Thumbnail}
            className="template2-project-viewer-item-thumbnail-label"
          />
        </Grid>
      </Grid>
      <Grid container item xs="7" className="template2-project-viewer-item-container" >
        <Grid container item xs="7">
          <Grid container style={{marginTop: "60px"}}>
            <div style={{width: "10px", backgroundColor:"blue", height: "72px"}}/>
            <Grid container item xs="10" direction="column" spacing="1">
              <Grid item xs="8">
                <p className="template2-project-viewer-item-name">
                  {data.projectItem2Name}
                </p>
              </Grid>
              <Grid item xs="8">
                <p className="template2-project-viewer-item-role">
                  {data.projectItem2Role}
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="9" justify="center" style={{marginLeft: "7%"}}>
            <p className="template2-project-viewer-item-intro">
              {data.projectItem2Intro}
            </p>
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <img src={data.projectItem2Thumbnail}
            className="template2-project-viewer-item-thumbnail-label"
          />
        </Grid>
      </Grid>
      <Grid container style={{marginTop: "100px"}}></Grid>
    </Grid>
  )
}

export default ProjectViewer;

