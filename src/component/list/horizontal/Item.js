import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import './horizontal.css';

const Item = ({item}) => {
<<<<<<< HEAD

    // const TEMPLATE_BASE_URL = 'http://api.appeal.icu/'+item.templateType+'/'+item.id;
    const TEMPLATE_BASE_URL = 'http://localhost:8080/'+item.templateType+'/'+item.id;
    const history = useHistory();

    const handleClick = () =>{
      axios({
        method: 'get',
        withCredentials: true,
        url: TEMPLATE_BASE_URL,
      })
      .then((res)=>{
        history.push({
          pathname: '/'+item.templateType+'/'+item.id,
          state: {
            data: res.data
          }
        })
      })
      .catch((err)=>{
        console.log(err);
      });
    }
=======
  console.log(item);
>>>>>>> 9a615a3a98a184f8edb27f007d2ff3e7d10a37a3

    return (
        <Grid item xs={4} className='horizontal-item-grid'>
            <Card style={{marginRight: 10, border: "none", boxShadow: "none"}}>
                <CardActionArea onClick={handleClick} style={{backgroundColor: "", border: "none"}}>
                    <CardMedia image={item.thumbnail} style={{height: 200}} title="Contemplative Reptile"/>
                    <CardContent style={{paddingLeft: 10, paddingRight: 0, marginBottom: 10}}>
                        <Typography gutterBottom variant="body2" component="h2" noWrap='True'>
                            {item.title} Title Main Name ?
                        </Typography>
                        <Typography gutterBottom variant="body2" component="h2" noWrap='True' style={{float: 'right'}}>
                            {item.skill} | {item.name}
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