import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import AboutMe from './AboutMeViewer';
import Project from './ProjectViewer';
import Career from './CareerViewer';
import AboutMeViewer from "./AboutMeViewer";
import ProjectViewer from "./ProjectViewer";
import CareerViewer from "./CareerViewer";

const TEMPLATE_BASE_URL = 'http://ec2-3-35-145-52.ap-northeast-2.compute.amazonaws.com:8080/templatetwo';

const Template2 = () => {

    const history = useHistory();

    const data = {
        project: {
            "items": [
                {
                    "id": "1",
                    "name": "Hong Gil Dong",
                    "role": "Project Manger",
                    "description": "Project management & planning"
                },

            ]
        },
        career: {
            "items": [
                {
                    "id": "1",
                    "title": "Hong Gil Dong Company",
                    "date": "20.02.01 ~ 21.02.01",
                    "position": "Project Manager",
                    "stack": "JavaScript, TypeScript, Spring Framework",
                    "intro": "uhm..... hal mal i up num dae..."
                },

            ]
        },
    }


    return (
        <>
            <AppBar style={{marginTop: "100px",}}>
                <Toolbar>
                    <Typography type="title" color="inherit" style={{flex: 1}}>
                    </Typography>
                    <Link to="/template/preview/t2/aboutme" style={{textDecoration: "none"}}><Button
                        style={{marginRight: 20, letterSpacing: 1}}>ABOUT</Button></Link>
                    <Link to="/template/preview/t2/project" style={{textDecoration: "none"}}><Button
                        style={{marginRight: 20, letterSpacing: 1}}>PROJECT</Button></Link>
                    <Link to="/template/preview/t2/career" style={{textDecoration: "none"}}><Button
                        style={{marginRight: 20, letterSpacing: 1}}>CAREER</Button></Link>
                </Toolbar>
            </AppBar>

            <Switch>
                <Route exact path="/template/preview/t2">
                    <AboutMeViewer/>
                </Route>
                <Route path="/template/preview/t2/aboutme">
                    <AboutMeViewer/>
                </Route>
                <Route path="/template/preview/t2/project">
                    <ProjectViewer
                        project={data.project}
                    />
                </Route>
                <Route path="/template/preview/t2/career">
                    <CareerViewer
                        career={data.career}
                    />
                </Route>
            </Switch>
        </>
    );
}
export default Template2;