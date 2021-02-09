import React from 'react';
import {Grid} from '@material-ui/core';
import "./Template2Career.css";

const Career = (props) =>{

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

  return(
    <Grid container className="template2-career-container"  justify="center">
      <Grid container justify="center">
        <h1>CAREER</h1>
      </Grid>

      <Grid container direction="column" item xs="7" spacing="5" className="template2-career-item-container" >

        <Grid item>
          <input type="text" name="careerItem1Title" className="template2-career-item-title"
            defaultValue={text.careerItem1Title}
            onChange={onChange}
            placeholder="company name"/>
        </Grid>

        <Grid container>

          <Grid container xs="4" direction="column" alignContent="center">
            <input className="template2-career-item-date"
              name="careerItem1Date"
              defaultValue={text.careerItem1Date}
              onChange={onChange}
              placeholder="when"/>
            <input className="template2-career-item-position" 
              name="careerItem1Position"
              defaultValue={text.careerItem1Position}
              onChange={onChange}
              placeholder="position"/>
            <input className="template2-career-item-stack" 
              name="careerItem1Stack"
              defaultValue={text.careerItem1Stack}
              onChange={onChange}
              placeholder="stack"/>
          </Grid>

          <Grid container item xs="8" justify="center">
            <textarea 
                className="template2-career-item-intro" 
                placeholder="INTRO"
                onChange={onChange}
                name="careerItem1Intro"
                defaultValue={text.careerItem1Intro}
                />
          </Grid>

        </Grid>

      </Grid>
      <Grid container direction="column" item xs="7" spacing="5" className="template2-career-item-container" >

        <Grid item>
          <input type="text" name="careerItem2Title" className="template2-career-item-title"
            defaultValue={text.careerItem2Title}
            onChange={onChange}
            placeholder="company name"/>
        </Grid>

        <Grid container>

          <Grid container xs="4" direction="column" alignContent="center">
            <input className="template2-career-item-date"
              name="careerItem2Date"
              defaultValue={text.careerItem2Date}
              onChange={onChange}
              placeholder="when"/>
            <input className="template2-career-item-position" 
              name="careerItem2Position"
              defaultValue={text.careerItem2Position}
              onChange={onChange}
              placeholder="position"/>
            <input className="template2-career-item-stack" 
              name="careerItem2Stack"
              defaultValue={text.careerItem2Stack}
              onChange={onChange}
              placeholder="stack"/>
          </Grid>

          <Grid container item xs="8" justify="center">
            <textarea 
                className="template2-career-item-intro" 
                placeholder="INTRO"
                onChange={onChange}
                name="careerItem2Intro"
                defaultValue={text.careerItem2Intro}
                />
          </Grid>

        </Grid>

      </Grid>

      <Grid container style={{marginTop: "100px"}}></Grid>

    </Grid>

  )
}

export default Career;
     