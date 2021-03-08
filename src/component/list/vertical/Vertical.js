import React from 'react';
import { Grid } from '@material-ui/core';
import Item from './Item';

const Vertical = ({resume, count}) =>{

  const sliceResume = resume.slice(0, count);

  return(
    <Grid container xs={12} spacing={1} style={{marginLeft: 30, marginRight: 30}}>
      {sliceResume.map((element)=>{
        return <Item item={element}/>
      })}
    </Grid>
  );
}

export default Vertical;