import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import "./Template2.css";

const Template2 = () =>{

  const [thumbnail, setThumbnail] = useState({file: '', previewUrl: ''})

  const changeThumbnails = (e) =>{
    e.preventDefault();
    console.log(e);

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;
    console.log("hello")
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
            />
          </label>
          <input type="text" className="template2-left-item-profile-name" placeholder="NAME"></input>
        </Grid>
      </Grid>
      <Grid item xs="7" className="template2-right-item">
        <input type="text" className="template2-right-item-title" placeholder="TITLE"></input>
        <input type="text" className="template2-right-item-skill" placeholder="skill"></input>
        <textarea className="template2-right-item-intro" placeholder="INTRO"></textarea>
      </Grid>
    </Grid>
  );
}

export default Template2;