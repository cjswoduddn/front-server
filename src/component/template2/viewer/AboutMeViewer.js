import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2AboutMeViewer.css";

const AboutMeViewer = ({data}) =>{
  return (
    <>
    <Grid container style={{marginTop:'102px', height:'650px'}}>
        <Grid item xs="5" style={{backgroundColor: 'rgb(219, 212, 197)'}}>
          <Grid container xs="7" className="template2-aboutme-item-left-profile" justify="center">
            <img src={data.thumbnailUrl}
              className="template2-aboutme-viewer-item-left-profile-thumbnail"
            />
            <p className="template2-aboutme-viewer-item-left-profile-name">
              {data.name}
            </p>
          </Grid>
        </Grid>
        <Grid item xs="7">
          <p className="template2-aboutme-viewer-item-right-title">
            {data.title}
          </p>
          <p className="template2-aboutme-viewer-item-right-skill">
            {data.skill}
          </p>
          <p className="template2-aboutme-viewer-item-right-intro">
            {data.intro}
          </p>
        </Grid>
      </Grid>
    </>
  )
}

export default AboutMeViewer;