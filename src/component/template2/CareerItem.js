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
        <Grid container direction="column" item xs="7" spacing="5" className="template2-career-item-container">
            <Grid container>
                <Button variant="outlined" size="large" onClick={() => removeCareer(field.id)}
                        style={{border: 'none'}}>
                    <ClearIcon/>
                </Button>
            </Grid>
            <Grid item>
                <input type="text" name="title" className="template2-career-item-title"
                       defaultValue={field.title}
                       onChange={handleChange}
                       placeholder="company name"/>
            </Grid>

            <Grid container>

                <Grid container xs="4" direction="column" alignContent="center">
                    <input className="template2-career-item-date"
                           name="date"
                           defaultValue={field.date}
                           onChange={handleChange}
                           placeholder="when"/>
                    <input className="template2-career-item-position"
                           name="position"
                           defaultValue={field.position}
                           onChange={handleChange}
                           placeholder="position"/>
                    <input className="template2-career-item-stack"
                           name="stack"
                           defaultValue={field.stack}
                           onChange={handleChange}
                           placeholder="stack"/>
                </Grid>

                <Grid container item xs="8" justify="center">
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
}

export default CareerItem;