import React from 'react';
import {Grid, Button} from '@material-ui/core';
import "./Template2ProjectViewer.css";

const CareerItemViewer = ({field}) => {

    return (
        <Grid container direction="column" item xs="7" className="template2-career-item-container">
            <Grid item xs="12" style={{marginTop: 10}}>
                <p className="template2-career-item-title-viewer">{field.title}</p>
            </Grid>

            <Grid container item>
                <Grid item xs="4" direction="column" alignContent="center">
                    <p className="template2-career-item-date-viewer">{field.date}</p>
                    <p className="template2-career-item-position-viewer">{field.position}</p>
                    <p className="template2-career-item-stack-viewer">{field.stack}</p>
                </Grid>

                <Grid item xs="8" justify="center">
                    <p className="template2-career-item-intro-viewer">
                        {field.intro}
                    </p>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CareerItemViewer;