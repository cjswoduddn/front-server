import React from 'react';
import { Route, Switch} from 'react-router-dom';

import TemplateSelector from './TemplateSelector';
import Template1 from "../template1/Template1";
import Template3 from "../template3/Template3";
import Template2 from '../../component/template2/Template2';
// import Template2 from '../../component/template2/viewer/';
import Template1Viewer from "../template1/Template1Viewer";
import Template3Viewer from "../template3/Template3Viewer";
import TemplateService from './TemplateService';

const Template = () =>{
    return (
        <Switch>
          <Route exact path="/template"><TemplateSelector/></Route>
          <Route path="/template/t1"><Template1/></Route>
          <Route path="/template/t1view"><Template1Viewer/></Route>
          <Route path="/template/t2"><Template3/></Route>
          <Route path="/template/t2view"><Template3/></Route>
          <Route path="/template/t3"><Template2/></Route>
          {/*<Route path="/template/t4"><Theme3/></Route>*/}
          <Route path="/template/:id"><TemplateService/></Route>
        </Switch>
    );
}

export default Template;
