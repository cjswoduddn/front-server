import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Grid, Button} from '@material-ui/core';
import "./Template2.css";
import axios from 'axios';

const TEMPLATE_BASE_URL = 'http://localhost:8080/portfolio';

const Template2 = () =>{

  const [thumbnail, setThumbnail] = useState({file: '', previewUrl: ''})
  const {register, handleSubmit, watch, errors} = useForm();

  const onSubmit = data => {
    console.log(data);
    const form = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if(typeof value === 'object'){
        form.append(key, value[0]);
      }
      else{
        form.append(key, value);
      }
    }
    axios({
      method: 'post',
      headers:{
        'Content-Type': `multipart/form-data`
      },
      url: TEMPLATE_BASE_URL,
      data: form
    })
    .then((res)=>{
      console.log(res.body);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  const changeThumbnails = (e) =>{
    e.preventDefault();

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;
    let file = filelist[0];
    reader.onloadend = () => {
      setThumbnail({
        file : file,
        previewUrl : reader.result
      })
    }
    reader.readAsDataURL(file);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="dtype" value="sampleportfolio" ref={register}/>
      <Grid container className="template2-container">
        <Grid item xs="5" className="template2-left-item">
          <Grid container xs="7" className="template2-left-item-profile" justify="center">
            <label className="template2-left-item-profile-thumbnail-label" 
              for="thumbnail"
              style={{backgroundImage: `url(${thumbnail.previewUrl})`}}>
              IMG
              <input
                id="thumbnail"
                accept="image/*" type="file"
                className="template2-left-item-profile-thumbnail"
                onChange={changeThumbnails}
                name="thumbnail"
                ref={register}
              />
            </label>
            <input
              type="text"
              className="template2-left-item-profile-name" 
              placeholder="NAME"
              name="name"
              ref={register}
            />
          </Grid>
        </Grid>
        <Grid item xs="7" className="template2-right-item">
          <input 
            type="text" 
            className="template2-right-item-title" 
            placeholder="TITLE"
            name="title"
            ref={register}
          />
          <input 
            type="text" 
            className="template2-right-item-skill" 
            placeholder="skill"
            name="skill"
            ref={register}
          />
          <textarea 
            className="template2-right-item-intro" 
            placeholder="INTRO"
            name="intro"
            ref={register}
            />
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button type="submit" variant="outlined" size="large">SUBMIT</Button>
      </Grid>
    </form>
  );
}

export default Template2;