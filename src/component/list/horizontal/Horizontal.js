import React from 'react';
import { Grid } from '@material-ui/core';
import Item from './Item';

const Horizontal = ({resume, count}) =>{

  const sliceResume = resume.slice(0, count);

  return(
    <Grid container xs={8} spacing={3}>
      {sliceResume.map((element)=>{
        return <Item item={element}/>
      })}
    </Grid>
  );
}

export default Horizontal;