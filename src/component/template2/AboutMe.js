import React, { useState } from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Template2.css";


const AboutMe = ({state, setState}) =>{

  const onChange=(e)=>{
    setState({
      ...state,
      [e.target.name] : e.target.value
    })
  }

  const changeThumbnails = (e) =>{

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;
    let Url = "Url"


    reader.onloadend = () => {
      setState({
        ...state,
        [e.target.name] : filelist[0],
        ["noSubmit"+e.target.name] : reader.result
      })
    }
    reader.readAsDataURL(filelist[0]);
  }

  return (
    <>
      <Grid container className="template2-container">
        <Grid item xs="5" className="template2-left-item">
          <Grid container xs="7" className="template2-left-item-profile" justify="center">
            <label className="template2-left-item-profile-thumbnail-label" 
              for="aboutmeThumbnail"
              style={{backgroundImage: `url(${state.noSubmitaboutmeThumbnail})`}}
              >
              IMG
              <input
                id="aboutmeThumbnail"
                accept="image/*" type="file"
                className="template2-left-item-profile-thumbnail"
                onChange={changeThumbnails}
                name="aboutmeThumbnail"
              />
            </label>
            <input
              type="text"
              className="template2-left-item-profile-name" 
              placeholder="NAME"
              name="name"
              onChange={onChange}
              defaultValue={state.name}
            />
          </Grid>
        </Grid>
        <Grid item xs="7" className="template2-right-item">
          <input 
            type="text" 
            className="template2-right-item-title" 
            placeholder="TITLE"
            name="title"
            onChange={onChange}
            defaultValue={state.title}
          />
          <input 
            type="text" 
            className="template2-right-item-skill" 
            placeholder="skill"
            name="skill"
            onChange={onChange}
            defaultValue={state.skill}
          />
          <textarea 
            className="template2-right-item-intro" 
            placeholder="INTRO"
            name="intro"
            onChange={onChange}
            defaultValue={state.intro}
            />
        </Grid>
      </Grid>
      </>
  )
}

export default AboutMe;