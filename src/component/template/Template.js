import React from 'react';
import { Route, Switch} from 'react-router-dom';

import TemplateSelector from './TemplateSelector';
import Theme1 from "../../component/template/Theme1";
import Theme2 from "../../component/template/Theme2";
import Theme3 from "../../component/template/Theme3";
import Template2 from '../../component/template2/Template2';
import Theme1view from "./Theme1view";
import Theme2view from "./Theme2view";
const Template = () =>{
    return (
        <Switch>
          <Route exact path="/template"><TemplateSelector/></Route>
          <Route path="/template/t1"><Theme1/></Route>
          <Route path="/template/t1view"><Theme1view/></Route>
          <Route path="/template/t2"><Theme2/></Route>
          <Route path="/template/t2view"><Theme2view/></Route>
          <Route path="/template/t3"><Template2/></Route>
          <Route path="/template/t4"><Theme3/></Route>
        </Switch>
    );
}

export default Template;
