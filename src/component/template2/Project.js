import React from 'react'; 
import {Grid} from '@material-ui/core';
import "./Template2Project.css";

const Project = (props) =>{

  const text = props.text;
  const setText = props.setText;
  const thumbnail = props.thumbnail;
  const setThumbnail = props.setThumbnail;
  const preview = props.preview;
  const setPreview = props.setPreview;

  const onChange=(e)=>{
    setText({
      ...text,
      [e.target.name] : e.target.value
    })
  }

  const changeThumbnails = (e) =>{

    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;

    reader.onloadend = () => {
      setThumbnail({
        ...thumbnail,
        [e.target.name] : filelist[0],
      })
      setPreview({
        ...preview,
        [e.target.name] : reader.result
      })
    }
    reader.readAsDataURL(filelist[0]);
  }

  return(
    <Grid container className="template2-project-container" justify="center">
      <Grid container justify="center">
        <h1>PROJECT</h1>
      </Grid>
      <Grid container item xs="7" className="template2-project-item-container" >
        <Grid container item xs="7">
          <Grid container style={{marginTop: "60px"}}>
            <div style={{width: "10px", backgroundColor:"blue", height: "72px"}}/>
            <Grid container item xs="10" direction="column" spacing="1">
              <Grid item xs="8">
                <input type="text"
                  name="projectItem1Name"
                  className="template2-project-item-name"
                  defaultValue={text.projectItem1Name}
                  onChange={onChange}
                  placeholder="project name"
                />
              </Grid>
              <Grid item xs="8">
                <input type="text" 
                  name="projectItem1Role"
                  className="template2-project-item-role"
                  defaultValue={text.projectItem1Role}
                  onChange={onChange}
                  placeholder="project role"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="9" justify="center" style={{marginLeft: "7%"}}>
            <textarea 
                  className="template2-project-item-intro" 
                  placeholder="INTRO"
                  onChange={onChange}
                  name="projectItem1Intro"
                  defaultValue={text.projectItem1Intro}
            />
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <label className="template2-project-item-thumbnail-label" 
            for="projectItem1Thumbnail"
            style={{backgroundImage: `url(${preview.projectItem1Thumbnail})`}}
            >
            IMG
            <input
              id="projectItem1Thumbnail"
              accept="image/*" type="file"
              className="template2-project-item-thumbnail-img"
              onChange={changeThumbnails}
              name="projectItem1Thumbnail"
            />
          </label>
        </Grid>
      </Grid>

      <Grid container item xs="7" className="template2-project-item-container" >
        <Grid container item xs="7">
          <Grid container style={{marginTop: "60px"}}>
            <div style={{width: "10px", backgroundColor:"blue", height: "72px"}}/>
            <Grid container item xs="10" direction="column" spacing="1">
              <Grid item xs="8">
                <input type="text"
                  name="projectItem2Name"
                  className="template2-project-item-name"
                  defaultValue={text.projectItem2Name}
                  onChange={onChange}
                  placeholder="project name"
                />
              </Grid>
              <Grid item xs="8">
                <input type="text" 
                  name="projectItem2Role"
                  className="template2-project-item-role"
                  defaultValue={text.projectItem2Role}
                  onChange={onChange}
                  placeholder="project role"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs="9" justify="center" style={{marginLeft: "7%"}}>
            <textarea 
                  className="template2-project-item-intro" 
                  placeholder="INTRO"
                  onChange={onChange}
                  name="projectItem2Intro"
                  defaultValue={text.projectItem2Intro}
            />
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <label className="template2-project-item-thumbnail-label" 
            for="projectItem2Thumbnail"
            style={{backgroundImage: `url(${preview.projectItem2Thumbnail})`}}
            >
            IMG
            <input
              id="projectItem2Thumbnail"
              accept="image/*" type="file"
              className="template2-project-item-thumbnail-img"
              onChange={changeThumbnails}
              name="projectItem2Thumbnail"
            />
          </label>
        </Grid>
      </Grid>

      <Grid container style={{marginTop: "100px"}}></Grid>
    </Grid>
    
  )
}

export default Project;