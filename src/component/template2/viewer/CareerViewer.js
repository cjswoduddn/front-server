import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2CareerViewer.css";

const CareerViewer = ({data}) =>{

  return(
    <Grid container className="template2-career-viewer-container"  justify="center">
      <Grid container justify="center">
        <h1>CAREER</h1>
      </Grid>

      <Grid container direction="column" item xs="7" spacing="5" className="template2-career-viewer-item-container" >

        <Grid item>
          <p className="template2-career-viewer-item-title">
            {data.careerItem1Title}
          </p>
        </Grid>

        <Grid container>

          <Grid container xs="4" direction="column" alignContent="center">
            <p className="template2-career-viewer-item-date">
              {data.careerItem1Date}
            </p>
            <p className="template2-career-viewer-item-position">
              {data.careerItem1Position}
            </p>
            <p className="template2-career-viewer-item-stack">
              {data.careerItem1Stack}
            </p>
          </Grid>

          <Grid container item xs="8" justify="center">
            <p className="template2-career-viewer-item-intro">
              {data.careerItem1Intro}
            </p>
          </Grid>

        </Grid>

      </Grid>
      <Grid container direction="column" item xs="7" spacing="5" className="template2-career-viewer-item-container" >

        <Grid item>
          <p className="template2-career-viewer-item-title">
            {data.careerItem2Title}
          </p>
        </Grid>

        <Grid container>

          <Grid container xs="4" direction="column" alignContent="center">
            <p className="template2-career-viewer-item-date">
              {data.careerItem2Date}
            </p>
            <p className="template2-career-viewer-item-position">
              {data.careerItem2Position}
            </p>
            <p className="template2-career-viewer-item-stack">
              {data.careerItem2Stack}
            </p>
          </Grid>

          <Grid container item xs="8" justify="center">
            <p className="template2-career-viewer-item-intro">
              {data.careerItem2Intro}
            </p>
          </Grid>

        </Grid>

      </Grid>

      <Grid container style={{marginTop: "100px"}}></Grid>

    </Grid>

  )
}

export default CareerViewer;
     