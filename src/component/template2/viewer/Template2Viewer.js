import React, {useState} from 'react';
import {Button, AppBar, Toolbar, Typography} from '@material-ui/core';
import {useHistory, useLocation} from 'react-router-dom';
import {Route, Switch, Link} from 'react-router-dom';
import AboutMeViewer from "./AboutMeViewer";
import ProjectViewer from "./ProjectViewer";
import CareerViewer from "./CareerViewer";


const Template2 = ({data}) => {

    let tData = data.data;

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
                        project={tData.project}
                    />
                </Route>
                <Route path="/template/preview/t2/career">
                    <CareerViewer
                        career={tData.career}
                    />
                </Route>
            </Switch>
        </>
    );
}
export default Template2;