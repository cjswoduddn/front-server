import React from 'react';
import { Grid } from '@material-ui/core';

import woo from '../../../factory/images/woo.png';
import './horizontal.css';

const Item = ({item}) => {

  return(
    <Grid item xs={4} className='horizontal-item-grid'>
      <button className='horizontal-item-btn'>
        <img src={woo} className='horizontal-item-img'/>
        <p className='horizontal-item-title'>{item.valueword}</p>
      </button>
    </Grid>
  )
}

function areEqual(preProps, nextProps){
  if(preProps.item.id === nextProps.item.id){
    return true;
  }else {
    return false;
  }
}



export default React.memo(Item, areEqual);