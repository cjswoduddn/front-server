import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import AboutMe from './AboutMe';
import Project from './Project';
import Career from './Career';

const TEMPLATE_BASE_URL = 'http://localhost:8080/templatetwo';

const Template2 = () =>{

  const [portfolioCommon, setPortfolioCommon] = useState({}); // thumbanil, title, skill, name, intro

  const [project, setProject] = useState({
    key: 0,
    items:[
      {
        id : 0,
        name : "",
        role : "",
        intro : "",
        thumbnail: undefined
      }
    ]
  });
  const [career, setCareer] = useState({
    key: 0,
    items:[
      {
        id : 0,
        title: '',
        date: '',
        position: '',
        stack: '',
        intro: ''
      }
    ]
  })

  const history = useHistory();

  const onSubmit = (e) => {
    const form = new FormData();
    for(const [key, value] of Object.entries(portfolioCommon)){
      if(key.startsWith("preview")) continue;
      form.append("portfolio."+key, value);
    }

    let idx = 0;
    project.items.map(item => {
      let myKey = `projects[${idx++}].`;
      for(const [key, value] of Object.entries(item)){
        if(key.startsWith("preview")) continue;
        if(key === 'thumbnail' && value === undefined) continue;
        form.append(myKey+key, value);
      }
    })
    idx = 0;
    career.items.map(item => {
      let myKey = `careers[${idx++}].`;
      for(const [key, value] of Object.entries(item)){
        if(key.startsWith("preview")) continue;
        form.append(myKey+key, value);
      }
    })
    
    axios({
      method: 'post',
      withCredentials: true,
      headers:{
        'Content-Type': `multipart/form-data`
      },
      url: TEMPLATE_BASE_URL,
      data: form
    })
    .then((res)=>{
      history.push({
        pathname: "/template/"+res.data
      })
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
          <Link to="/template/t3/aboutme" style={{textDecoration: "none"}}><Button style={{marginRight: 20, letterSpacing: 1}}>ABOUT</Button></Link>
          <Link to="/template/t3/project" style={{textDecoration: "none"}}><Button style={{marginRight: 20, letterSpacing: 1}}>PROJECT</Button></Link>
          <Link to="/template/t3/career" style={{textDecoration: "none"}}><Button style={{marginRight: 20, letterSpacing: 1}}>CAREER</Button></Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/template/t3">
          <AboutMe 
            aboutMe={portfolioCommon}
            setAboutMe={setPortfolioCommon}
          />
        </Route>
        <Route path="/template/t3/aboutme">
          <AboutMe
            aboutMe={portfolioCommon}
            setAboutMe={setPortfolioCommon}
          />
        </Route>
        <Route path="/template/t3/project">
          <Project
            project={project}
            setProject={setProject}
          />
        </Route>
        <Route path="/template/t3/career">
          <Career
            career={career}
            setCareer={setCareer}
          />
        </Route>
      </Switch>
    </>
  );
}
export default Template2;