import React from 'react';
import {Button, Grid} from '@material-ui/core';
import CareerItem from './CareerItemViewer';
import "./Template2CareerViewer.css";

const CareerViewer = ({career}) =>{

  return(
    <Grid container className="template2-career-container"  justify="center">
      <Grid container justify="center">
        <h1 style={{letterSpacing: 1, marginTop: 50, color: '#595959'}}>CAREER</h1>
      </Grid>
      {career.items.map( item => (<CareerItem key={item.id} field={item} />) )}
      <Grid container style={{marginTop: "20px"}}></Grid>
      <Grid container style={{marginTop: "67px"}}></Grid>
    </Grid>

  )
}

export default CareerViewer;