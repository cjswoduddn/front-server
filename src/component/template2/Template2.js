import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
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
    const form = new FormData();
    form.append("dtype", dtype);
    for(const [key, value] of Object.entries(aboutMe)){
      let keyString = key.toString();
      if(keyString.startsWith("noSubmit")){
        continue;
      }
      form.append(key, value);
    }
    for(const [key, value] of Object.entries(project)){
      let keyString = key.toString();
      if(keyString.startsWith("noSubmit")){
        continue;
      }
      form.append(key, value);
    }
    for(const [key, value] of Object.entries(career)){
      let keyString = key.toString();
      if(keyString.startsWith("noSubmit")){
        continue;
      }
      form.append(key, value);
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
  }



  return (
    <>
      <AppBar style={{marginTop: "100px",}}>
        <Toolbar>
          <Button variant="outlined" size="large" onClick={onSubmit}>SUBMIT</Button>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
          </Typography>
          <Link to="/template/t3/aboutme" style={{textDecoration: "none"}}><Button>ABOUTME</Button></Link>
          <Link to="/template/t3/project" style={{textDecoration: "none"}}><Button>PROJECT</Button></Link>
          <Link to="/template/t3/career" style={{textDecoration: "none"}}><Button>CAREER</Button></Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/template/t3">
          <AboutMe state={aboutMe} setState={setAboutMe}/>
        </Route>
        <Route path="/template/t3/aboutme">
          <AboutMe state={aboutMe} setState={setAboutMe}/>
        </Route>
        <Route path="/template/t3/project">
          <Project state={project} setState={setProject}/>
        </Route>
        <Route path="/template/t3/career">
          <Career state={career} setState={setCareer}/>
        </Route>
      </Switch>
    </>
  );
}

export default Template2;