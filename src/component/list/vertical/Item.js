import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LinearProgress from "@material-ui/core/LinearProgress";


import './vertical.css';
import woo from '../../../factory/images/woo.png';

const Item = ({item}) => {

    return (
        <>
            <Grid item xs={4}>
                <Card style={{marginRight: 10, border: "none", boxShadow: "none"}}>
                    <CardActionArea style={{backgroundColor: "", border: "none"}}>
                        <CardMedia image={woo} style={{height: 200}} title="Contemplative Reptile"/>
                        <CardContent style={{paddingLeft: 10, paddingRight: 0, marginBottom: 10}}>
                            <Typography gutterBottom variant="body2" component="h2" noWrap='True'>
                                {item.valueword}value word ? user name ?
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}

function areEqual(preProps, nextProps) {
    if (preProps.item.id === nextProps.item.id) {
        return true;
    } else {
        return false;
    }
}

export default React.memo(Item, areEqual);