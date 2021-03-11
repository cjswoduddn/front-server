import React from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Template2Project.css";
import ClearIcon from "@material-ui/icons/Clear";

const CareerItem = ({field, updateCareer, removeCareer}) => {

    const handleChange = (e) => {
        field[e.target.name] = e.target.value;
        updateCareer(field.id, field);
    }


    return (
        <Grid container direction="column" item xs="7" className="template2-career-item-container">
            <Grid item xs="12">
                <Button variant="outlined" size="large" onClick={() => removeCareer(field.id)}
                        style={{border: 'none'}}>
                    <ClearIcon/>
                </Button>
            </Grid>
            <Grid item xs="12" style={{marginTop: 10}}>
                <input type="text" name="title" className="template2-career-item-title"
                       defaultValue={field.title}
                       onChange={handleChange}
                       placeholder="COMPANY NAME"/>
            </Grid>

            <Grid container item>
                <Grid item xs="4" direction="column" alignContent="center">
                    <input className="template2-career-item-date"
                           name="date"
                           defaultValue={field.date}
                           onChange={handleChange}
                           placeholder="WHEN"/>
                    <input className="template2-career-item-position"
                           name="position"
                           defaultValue={field.position}
                           onChange={handleChange}
                           placeholder="POSITION"/>
                    <input className="template2-career-item-stack"
                           name="stack"
                           defaultValue={field.stack}
                           onChange={handleChange}
                           placeholder="STACK"/>
                </Grid>

                <Grid item xs="8" justify="center">
                    <textarea
                        className="template2-career-item-intro"
                        placeholder="INTRO"
                        onChange={handleChange}
                        name="intro"
                        defaultValue={field.intro}
                    />
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CareerItem;