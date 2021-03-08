import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from "@material-ui/core";
import CustomButton from "./CustomButton";

const TemplateSelector = () =>{
    const [over1, setOver1] = useState(false);
    const [over2, setOver2] = useState(false);
    const [over3, setOver3] = useState(false);

    return(
        <div className="wallpaper" style={{textAlign: "center", alignItems: "center"}}>
            <div className="content">
                <div className="block x1"
                     onMouseEnter={e => {setOver1(true)}}
                     onMouseLeave={e => {setOver1(false)}}>
                    <div style={{display: over1 ? 'block' : 'none'}}>
                        <CustomButton link={'t1'}></CustomButton>
                    </div>
                </div>

                <div className="block x2"
                     onMouseEnter={e => {setOver2(true)}}
                     onMouseLeave={e => {setOver2(false)}}>
                    <div style={{display: over2 ? 'block' : 'none'}}>
                        <CustomButton link={'t2'}></CustomButton>
                    </div>
                </div>

                <div className="block x3"
                     onMouseEnter={e => {setOver3(true)}}
                     onMouseLeave={e => {setOver3(false)}}>
                    <div style={{display: over3 ? 'block' : 'none'}}>
                        <CustomButton link={'t3'}></CustomButton>
                    </div>
                </div>

                <div className="block x4"></div>
                <Link to="/template/t4"><div className="block x5"></div></Link>
            </div>
        </div>
    )
}

export default TemplateSelector;