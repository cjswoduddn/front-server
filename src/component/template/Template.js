import React from 'react';
import {Route, Switch} from 'react-router-dom';

import TemplateSelector from './TemplateSelector';
import Template1 from "../template1/Template1";
import Template3 from "../template3/Template3";
import Template2 from '../../component/template2/Template2';
import Preview from "./Preview";

const Template = () => {
    return (
        <Switch>
            <Route exact path="/template"><TemplateSelector/></Route>
            <Route path="/template/t1"><Template1/></Route>
            <Route path="/template/t2"><Template2/></Route>
            <Route path="/template/t3"><Template3/></Route>
            <Route path="/templateone/"><Preview/></Route>
        </Switch>
    );
}

export default Template;
