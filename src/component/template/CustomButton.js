import React, {useState} from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";


const CustomButton = ({link}) => {
    return(
        <div style={{marginTop: '20%'}}>
        <Link to={"/template/" + link} style={{textDecoration: 'none'}}>
            <Button className="button" size="large"
                    style={{backgroundColor: '#1f1f1f', paddingLeft: 30, paddingRight: 30, color: 'white',
                    }}>편 집</Button>
        </Link>
            <div style={{height: 10}}/>
            <Link to={"/template/" + "preview/" + link} style={{textDecoration: 'none'}}>
            <Button className="button" size="large"
                    style={{backgroundColor: '#1f1f1f', paddingLeft: 30, paddingRight: 30, color: 'white',
                    }}>보 기</Button>
        </Link>
        </div>
    )


}

export default CustomButton;