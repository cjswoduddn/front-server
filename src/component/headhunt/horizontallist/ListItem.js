import React from 'react';
import { Grid } from '@material-ui/core';
import woo from '../../../factory/images/woo.png';

import './horizontal.css';

const ListItem = ({item}) => {
  console.log('list render');

  return(
    <Grid item xs={4}
    className='horizontal-item-grid'>
      <button className='horizontal-item-btn'>
        <img src={woo} className='horizontal-item-img'/>
      </button>
      <p>{item.valueword}</p>
    </Grid>
  )
}

function areEqual(preProps, nextProps){
  if(preProps.item.name === nextProps.item.name){
    return true;
  }else {
    return false;
  }
}



export default React.memo(ListItem, areEqual);