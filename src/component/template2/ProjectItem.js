import React from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Template2Project.css";
import ClearIcon from '@material-ui/icons/Clear';

const ProjectItem = ({field, updateProject, removeProject}) => {

    const handleChange = (e) => {
        field[e.target.name] = e.target.value;
        updateProject(field.id, field);
    }

    const changeThumbnails = (e) => {
        let reader = new FileReader();
        let filelist = e.target.files;
        if (filelist === null || filelist.length === 0) return;

        reader.onloadend = () => {
            field.thumbnail = filelist[0];
            field.previewThumbnail = reader.result;
            updateProject(field.id, field);
        }
        reader.readAsDataURL(filelist[0]);
    }

    return (
        <Grid container item xs="7" className="template2-project-item-container">
            <Grid container item xs="7">
                <Grid container>
                    <Button variant="outlined" size="large" onClick={() => removeProject(field.id)}
                            style={{border: 'none'}}>
                        <ClearIcon/>
                    </Button>
                </Grid>
                <Grid container style={{marginTop: 10}}>
                    {/*<div style={{width: "10px", backgroundColor: "blue", height: "72px"}}/>*/}
                    <Grid container item xs="10" direction="column" spacing="1">
                        <Grid item xs="10">
                            <input type="text"
                                   name="name"
                                   className="template2-project-item-name"
                                   defaultValue={field.name}
                                   placeholder="PROJECT NAME"
                                   onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs="10">
                            <input type="text"
                                   name="role"
                                   onChange={handleChange}
                                   className="template2-project-item-role"
                                   defaultValue={field.role}
                                   placeholder="PROJECT ROLE"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs="9" justify="center" style={{marginLeft: "7%", marginBottom: 20}}>
                  <textarea
                      onChange={handleChange}
                      className="template2-project-item-intro"
                      placeholder="PROJECT DESCRIPTION"
                      name="intro"
                      defaultValue={field.intro}
                  />
                </Grid>
            </Grid>
            <Grid container item xs="5" alignItems="center">
                <label className="template2-project-item-thumbnail-label"
                       for={field.id}
                       style={{backgroundImage: `url(${field.previewThumbnail})`}}>
                    IMAGE
                    <input
                        id={field.id}
                        accept="image/*" type="file"
                        className="template2-project-item-thumbnail-img"
                        onChange={changeThumbnails}
                    />
                </label>
            </Grid>
        </Grid>
    )
}

export default ProjectItem;