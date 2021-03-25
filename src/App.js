import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AuthRoute from './AuthRoute';

import Nav from './component/navigation/Nav';
import SignIn from './component/signin/SignIn';
import Home from './component/home/Home';
import Search from './component/service/Search';
import Template from './component/template/Template';
import Template1Viewer from './component/template1/Template1Viewer';
import Template2Viewer from './component/template2/viewer/Template2Viewer';
import {useHistory, useLocation} from 'react-router-dom';

function App() {
    localStorage.memberId = 0;
    const location = useLocation();

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
        <Route path="/templateone/:id"><Template1Viewer tData={location.state}/></Route>
        <Route path="/templatetwo/:id"><Template2Viewer data={location.state}/></Route>
        <Route path="/search/:path"><Search/></Route>

        <Route path="/search"><Search/></Route>
      </Switch>
    </>
  );

}

export default App;
