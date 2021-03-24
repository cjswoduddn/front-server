import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2AboutmeViewer.css";

const AboutMeViewer = ({aboutMe, setAboutMe}) =>{

  return (
    <>
      <Grid container style={{marginTop:'102px', height:'650px'}}>
        <Grid item xs="5" style={{backgroundColor: 'rgb(219, 212, 197)'}}>
          <Grid container xs="7" className="template2-aboutme-item-left-profile" justify="center">
            <label className="template2-aboutme-item-left-profile-thumbnail-label-viewer"
              for="thumbnail">
              <input
                id="thumbnail"
                accept="image/*" type="file"
                style={{display: 'none'}}
                name="thumbnail"
              />
            </label>
            <h6 className="template2-aboutme-item-left-profile-name-viewer">홍 길 동</h6>
          </Grid>
        </Grid>
        <Grid item xs="7">
          <p className="template2-aboutme-item-right-title-viewer">홍길동의 제목</p>
          <p className="template2-aboutme-item-right-skill-viewer">홍길동의 기술스팩</p>
          <p className="template2-aboutme-item-right-intro-viewer">디테일 설명</p>
        </Grid>
      </Grid>
      </>
  )
}

export default AboutMeViewer;