import React from 'react';
import {Route, Switch} from 'react-router-dom';
import TemplateSelector from "./TemplateSelector";
import Template1 from "../template1/Template1";
import Template2Viewer from "../template2/viewer/Template2Viewer";
import Template1Viewer from "../template1/Template1Viewer";
import Template3Viewer from "../template3/Template3Viewer";


const Preview = () => {
    console.log("adsf")
    return (
        <Switch>
            <Route path="/template/preview/t1"><Template1Viewer/></Route>
            <Route path="/template/preview/t2"><Template2Viewer/></Route>
            <Route path="/template/preview/t3"><Template3Viewer/></Route>
        </Switch>
    );
}


export default Preview;