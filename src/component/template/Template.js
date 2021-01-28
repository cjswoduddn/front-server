import React from 'react';
import { Route, Switch} from 'react-router-dom';

import TemplateSelector from './TemplateSelector';
import Theme1 from "../../component/template/Theme1";
import Theme2 from "../../component/template/Theme2";
import Template2 from '../../component/template2/Template2';
const Template = () =>{
    return (
        <Switch>
          <Route exact path="/template"><TemplateSelector/></Route>
          <Route path="/template/t1"><Theme1/></Route>
          <Route path="/template/t2"><Theme2/></Route>
          <Route path="/template/t3"><Template2/></Route>
        </Switch>
    );
}

export default Template;
