import React from 'react'; 
import {Grid} from '@material-ui/core';
import "./Template2Project.css";

const Project = ({state, setState}) =>{


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

    reader.onloadend = () => {
      setState({
        ...state,
        [e.target.name] : filelist[0],
        ["noSubmit"+e.target.name] : reader.result
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
                  defaultValue={state.projectItem1Name}
                  onChange={onChange}
                  placeholder="project name"
                />
              </Grid>
              <Grid item xs="8">
                <input type="text" 
                  name="projectItem1Role"
                  className="template2-project-item-role"
                  defaultValue={state.projectItem1Role}
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
                  defaultValue={state.projectItem1Intro}
            />
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <label className="template2-project-item-thumbnail-label" 
            for="projectItem1Thumbnail"
            style={{backgroundImage: `url(${state.noSubmitprojectItem1Thumbnail})`}}
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
                  defaultValue={state.projectItem2Name}
                  onChange={onChange}
                  placeholder="project name"
                />
              </Grid>
              <Grid item xs="8">
                <input type="text" 
                  name="projectItem2Role"
                  className="template2-project-item-role"
                  defaultValue={state.projectItem2Role}
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
                  defaultValue={state.projectItem2Intro}
            />
          </Grid>
        </Grid>
        <Grid container item xs="5">
          <label className="template2-project-item-thumbnail-label" 
            for="projectItem2Thumbnail"
            style={{backgroundImage: `url(${state.noSubmitprojectItem2Thumbnail})`}}
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