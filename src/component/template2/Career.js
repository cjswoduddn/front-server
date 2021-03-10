import React from 'react';
import {Button, Grid} from '@material-ui/core';
import CareerItem from './CareerItem';
import "./Template2Career.css";

const Career = ({career, setCareer}) =>{
  const addCareer = () =>{
    setCareer({
      key: career.key+1,
      items: career.items.concat({
        id: career.key+1,
        title: '',
        date: '',
        position: '',
        stack: '',
        intro: ''
      })
    })
  }

  const removeCareer = (id) =>{
    setCareer({
      key: career.key,
      items: career.items.filter(item=>item.id !== id)
    })
  }

  const updateCareer = (id, data) =>{
    setCareer({
      key: career.key,
      items: career.items.map(
        item => id === item.id ?
        {...item, ...data} :
        item
      )
    })
  } 

  return(
    <Grid container className="template2-career-container"  justify="center">
      <Grid container justify="center">
        <h1 style={{letterSpacing: 1, marginTop: 50, color: '#595959'}}>CAREER</h1>
      </Grid>
      {career.items.map( item => (<CareerItem key={item.id} field={item} updateCareer={updateCareer} removeCareer={removeCareer}/>) )}
      <Grid container style={{marginTop: "20px"}}></Grid>
      <Button variant="outlined" size="large" onClick={addCareer}>ADD</Button>
      <Grid container style={{marginTop: "50px"}}></Grid>
    </Grid>

  )
}

export default Career;