import React from 'react';

import { Grid } from '@material-ui/core';
import {useLocation} from 'react-router-dom';

import "./head-hunt.css";

const HeadHunt = () =>{

  const location = useLocation();
  const template = location.state.template;

  return (
    <Grid className="search-result-top" container>
      {template[0].valueword}
    </Grid>
  );
}

export default HeadHunt;
