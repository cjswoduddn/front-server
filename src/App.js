import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthRoute from './AuthRoute';

import Nav from './component/navigation/Nav';
import SignIn from './component/signin/SignIn';
import Home from './component/home/Home';
import Search from './component/service/Search';
import Template from './component/template/Template';
import Profile from "./component/profile/Profile";

function App() {
    localStorage.memberId = 0;
    
    return (
        <>
            <Switch>
                <Route exact path="/"><Home/></Route>
                <Route path="/"><Nav/></Route>
            </Switch>

      <Switch>
        <Route path="/login"><SignIn /></Route>


        <AuthRoute
            authenticated={sessionStorage}
            path="/template"
            render={props => <Template {...props} />}
          />
        <Route path="/search/:path"><Search/></Route>

        <Route path="/search"><Search/></Route>
        <Route path="/profile"><Profile/></Route>
      </Switch>
    </>
  );

}

export default App;
