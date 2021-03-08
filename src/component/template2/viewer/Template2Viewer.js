import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';

import AboutMeViewer from './AboutMeViewer';
import ProjectViewer from './ProjectViewer';
import CareerViewer from './CareerViewer';

const Template2Viewer = ({data}) =>{

  const base = '/template/'+data.id;
  const aboutme = base+'/aboutme';
  const project = base+'/project';
  const career = base+'/career';


  return (
    <>
      <AppBar style={{marginTop: "100px",}}>
        <Toolbar>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
          </Typography>
          <Link to={aboutme} style={{textDecoration: "none"}}><Button>ABOUTME</Button></Link>
          <Link to={project} style={{textDecoration: "none"}}><Button>PROJECT</Button></Link>
          <Link to={career} style={{textDecoration: "none"}}><Button>CAREER</Button></Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path={base}><AboutMeViewer data={data}/></Route>
        <Route path={aboutme}><AboutMeViewer data={data}/></Route>
        <Route path={project}><ProjectViewer data={data}/></Route>
        <Route path={career}><CareerViewer data={data}/></Route>
      </Switch>
    </>
  )
}

export default Template2Viewer;