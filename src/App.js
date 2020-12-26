import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Nav from './navigation/Nav';
import Accounts from './accounts/Accounts';
import Home from './home/Home';
import HeadHunt from './headhunt/HeadHunt';
import Template from './template/Template';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/"><Nav /></Route>
      </Switch>

      <Route path="/"><Grid container style={{height: "102px"}}></Grid></Route>

      <Switch>
        <Route path="/accounts"><Accounts /></Route>
        <Route path="/head_hunt"><HeadHunt/></Route>
        <Route path="/template"><Template/></Route>
      </Switch>
    </>
  );
}

export default App;
