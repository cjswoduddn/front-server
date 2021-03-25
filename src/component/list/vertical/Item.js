import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './vertical.css';

const Item = ({item}) => {

    const handleClick = () =>{
      console.log(item);
    }
    
    return (
        <>
            <Grid item xs={4}>
                <Card style={{marginRight: 10, border: "none", boxShadow: "none"}}>
                    <CardActionArea style={{backgroundColor: "", border: "none"}} onClick={handleClick}>
                        <CardMedia image={item.thumbnail} style={{height: 200}} title="Contemplative Reptile"/>
                        <CardContent style={{paddingLeft: 10, paddingRight: 0, marginBottom: 10}}>
                            <Typography gutterBottom variant="body2" component="h2" noWrap='True'>
                                {item.skill}value word ? user name ?
                            </Typography>
                            {item.skill}
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