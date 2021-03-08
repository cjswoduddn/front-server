import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import woo from '../../../factory/images/woo.png';
import './horizontal.css';

const Item = ({item}) => {

    return (
        <Grid item xs={4} className='horizontal-item-grid'>
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