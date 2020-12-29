import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Nav from './component/navigation/Nav';
import Accounts from './component/accounts/Accounts';
import Home from './component/home/Home';
import HeadHunt from './component/headhunt/HeadHunt';
import Template from './component/template/Template';

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
