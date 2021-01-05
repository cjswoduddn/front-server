import React from 'react';
import { Grid } from '@material-ui/core';
import ListItem from './ListItem';

const HorizontalList = ({thumbnails}) =>{

  console.log('hori render: '+thumbnails.length);
  return(
    <Grid container xs={8} spacing={3}>
      {thumbnails.map((element)=>{
        return <ListItem item={element} key={element.id}/>
        // return <h1>{element.valueword}</h1>
      })}
    </Grid>
  )
}

export default HorizontalList;