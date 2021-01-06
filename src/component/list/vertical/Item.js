import React from 'react';
import { Grid } from '@material-ui/core';

import './vertical.css';
import woo from '../../../factory/images/woo.png';

const Item = ({item}) => {

  return(
    <>
      <Grid item xs={3}>
        <button className='vertical-item-btn'>
          <img className='vertical-item-img' src={woo} />
        </button>
      </Grid>
      <Grid item xs={8}>
        <Grid container>
          <p className='vertical-item-title'>{item.valueword}</p>
        </Grid>
      </Grid>
    </>
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