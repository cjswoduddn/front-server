import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import Nav from './component/navigation/Nav';
import SignIn from './component/signin/SignIn';
import Home from './component/home/Home';
import Search from './component/service/Search';
import Template from './component/template/Template';
import Theme1 from "./component/template/Theme1";
import Theme2 from "./component/template/Theme2";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/"><Nav /></Route>
      </Switch>

      {/*<Route path="/"><Grid container style={{height: "102px"}}></Grid></Route>*/}

      <Switch>
        <Route path="/sign_in"><SignIn /></Route>
        <Route path="/search/:path"><Search/></Route>
        <Route path="/template"><Template/></Route>
        <Route path="/t1" component={Theme1} />
        <Route path="/t2" component={Theme2} />
      </Switch>
    </>
  );
}

export default App;
