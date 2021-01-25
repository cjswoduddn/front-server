import React, {useState} from 'react';
import {Grid, Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import "./Template2.css";
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Career from './Career';
import Project from './Project';

const TEMPLATE_BASE_URL = 'http://localhost:8080/portfolio';

const Template2 = () =>{

  const [project, setProject] = useState({
    project: ''
  });

  const [aboutMe, setAboutMe] = useState({
    dtype: "sampleportfolio",
    // thumbnail: undefined,
    // name: '',
    // title: '',
    // skill: '',
    // intro: ''
  })

  const onSubmit = (e) => {
    // const form = new FormData();
    // for (const [key, value] of Object.entries(data)) {
    //   if(typeof value === 'object'){
    //     form.append(key, value[0]);
    //   }
    //   else{
    //     form.append(key, value);
    //   }
    // }
    for(const [key, value] of Object.entries(aboutMe)){
      console.log(key +" "+value);
    }
    for(const [key, value] of Object.entries(project)){
      console.log(key +" "+value);
    }
  }


  return (
    <>
      <AppBar style={{marginTop: "100px",}}>
        <Toolbar>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
          </Typography>
          <Link to="/template/aboutme"><Button color="inherit">ABOUTME</Button></Link>
          <Link to="/template/project"><Button color="inherit">PROJECT</Button></Link>
          <Link to="/template/career"><Button color="inherit">CAREER</Button></Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/template/aboutme">
          <AboutMe state={aboutMe} setState={setAboutMe}/>
        </Route>
        <Route path="/template/project">
          <Project project={project} setProject={setProject}/>
        </Route>
        <Route path="/template/career">
          <Career/>
        </Route>
      </Switch>

      <Grid container justify="center">
        <Button variant="outlined" size="large" onClick={onSubmit}>SUBMIT</Button>
      </Grid>
    </>
  );
}

export default Template2;
/*
  const [thumbnail, setThumbnail] = useState({file: '', previewUrl: ''})
  const changeThumbnails = (e) =>{
    e.preventDefault();

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;
    let file = filelist[0];
    reader.onloadend = () => {
      setThumbnail({
        file : file,
        previewUrl : reader.result
      })
    }
    reader.readAsDataURL(file);
  }
    axios({
      method: 'post',
      headers:{
        'Content-Type': `multipart/form-data`
      },
      url: TEMPLATE_BASE_URL,
      data: form
    })
    .then((res)=>{
      console.log(res.body);
    })
    .catch((err)=>{
      console.log(err);
    });
    */