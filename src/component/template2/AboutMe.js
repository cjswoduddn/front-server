import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2Aboutme.css";

const AboutMe = ({aboutMe, setAboutMe}) =>{

  const onChange=(e)=>{
    setAboutMe({
      ...aboutMe,
      [e.target.name] : e.target.value
    })
  }

  const changeThumbnails = (e) =>{

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;

    reader.onloadend = () => {
      setAboutMe({
        ...aboutMe,
        [e.target.name] : filelist[0],
        previewThumbnail : reader.result
      })
    }
    reader.readAsDataURL(filelist[0]);
  }

  return (
    <>
      <Grid container style={{marginTop:'102px', height:'650px'}}>
        <Grid item xs="5" style={{backgroundColor: 'rgb(219, 212, 197)'}}>
          <Grid container xs="7" className="template2-aboutme-item-left-profile" justify="center">
            <label className="template2-aboutme-item-left-profile-thumbnail-label" 
              for="thumbnail"
              style={{backgroundImage: `url(${aboutMe.previewThumbnail})`}}
              >
              IMG
              <input
                id="thumbnail"
                accept="image/*" type="file"
                style={{display: 'none'}}
                onChange={changeThumbnails}
                name="thumbnail"
              />
            </label>
            <input
              type="text"
              className="template2-aboutme-item-left-profile-name" 
              placeholder="NAME"
              name="name"
              onChange={onChange}
              defaultValue={aboutMe.name}
            />
          </Grid>
        </Grid>
        <Grid item xs="7">
          <input 
            type="text" 
            className="template2-aboutme-item-right-title" 
            placeholder="TITLE"
            name="title"
            onChange={onChange}
            defaultValue={aboutMe.title}
          />
          <input 
            type="text" 
            className="template2-aboutme-item-right-skill" 
            placeholder="skill"
            name="skill"
            onChange={onChange}
            defaultValue={aboutMe.skill}
          />
          <textarea 
            className="template2-aboutme-item-right-intro" 
            placeholder="INTRO"
            name="intro"
            onChange={onChange}
            defaultValue={aboutMe.intro}
            />
        </Grid>
      </Grid>
      </>
  )
}

export default AboutMe;