import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



import Background from '../../factory/images/monunpaper.jpg';
import './Sib.css';

const Sib = () =>{

  const [thumbnail, setThumbnail] = useState({file: '', previewUrl: ''})

  const thumbnails = (e) =>{
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

  return(
    <Grid container justify="center" className="sib-background" style={{backgroundImage: `url(${Background})`}}>
      <form style={{marginTop: "102px"}}>
        <Grid container style={{height: "150px"}}>

          <Grid item xs="4" className="sib-thumbnails" style={{backgroundImage: `url(${thumbnail.previewUrl})`}}>
            <input
              accept="image/*"
              id="contained-button-file"
              type="file"
              style={{display: "none"}}
              onChange={thumbnails}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </Grid>

          <Grid container xs="8">
            <Grid item xs="12">
              <TextField required id="standard-required" label="name" defaultValue="Hello, my owner!" />
            </Grid>
            <Grid item>
              <TextField required id="standard-required" label="main skill" defaultValue="backend or frontend" />
            </Grid>
          </Grid>

        </Grid>
        <div style={{marginTop: "50px"}}>
          <Grid container>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width: "500px"}}/>
          </Grid>
          <Grid container style={{marginTop: "10px"}}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={6}
              defaultValue="Default Value"
              variant="outlined"
              style={{width: "500px"}}
            />
          </Grid>
        </div>

        <div style={{marginTop: "50px"}}>
          <Grid container>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width: "500px"}}/>
          </Grid>
          <Grid container style={{marginTop: "10px"}}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={6}
              defaultValue="Default Value"
              variant="outlined"
              style={{width: "500px"}}
            />
          </Grid>
        </div>
        
        <div style={{marginTop: "50px"}}>
          <Grid container>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{width: "500px"}}/>
          </Grid>
          <Grid container style={{marginTop: "10px"}}>
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={6}
              defaultValue="Default Value"
              variant="outlined"
              style={{width: "500px"}}
            />
          </Grid>
        </div>

      </form>
    </Grid>
  )
}

export default Sib;