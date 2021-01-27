import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import "./Template2.css";
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Career from './Career';
import Project from './Project';

const TEMPLATE_BASE_URL = 'http://localhost:8080/portfolio';

const Template2 = () =>{

  const dtype = "template2";

  const [project, setProject] = useState({});
  const [aboutMe, setAboutMe] = useState({});
  const [career, setCareer] = useState({});

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
          <Button variant="outlined" size="large" onClick={onSubmit}>SUBMIT</Button>
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
          <Project state={project} setState={setProject}/>
        </Route>
        <Route path="/template/career">
          <Career state={career} setState={setCareer}/>
        </Route>
      </Switch>
    </>
  );
}

export default Template2;
/*
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