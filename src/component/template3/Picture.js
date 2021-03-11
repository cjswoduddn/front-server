import upload from "../../factory/images/upload.png";
import t2_1 from "../../factory/images/t2/t2-1.png";
import React, {useState} from "react";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {Button} from "@material-ui/core";

const Picture = ({field, updatePicture, removePicture}) => {
    // const [picture, setPicture] = useState();

    // const onChangePicture = (e, set) => {
    //     console.log('picture: ', set);
    //     set(URL.createObjectURL(e.target.files[0]));
    //     setPicture(URL.createObjectURL(e.target.files[0]));
    // };

    const onChangePicture = (e) => {
        let reader = new FileReader();
        let filelist = e.target.files;
        if (filelist === null || filelist.length === 0) return;

        reader.onloadend = () => {
            field.thumbnail = filelist[0];
            field.previewThumbnail = reader.result;
            updatePicture(field.id, field);
        }
        reader.readAsDataURL(filelist[0]);
    }


    return (
        <div style={{textAlign: 'center'}}>
            <label htmlFor={field.id} className="custom-file-upload">
                <img src={upload} width="50%"/>
            </label>

            {/*<label className="custom-file-upload"*/}
            {/*       htmlFor={field.id}*/}
            {/*       style={{backgroundImage: `url(${field.previewThumbnail})`}}>*/}
            {/*    file upload*/}
            {/*    <input*/}
            {/*        id={field.id}*/}
            {/*        accept="image/*" type="file"*/}
            {/*        className="card"*/}
            {/*        onChange={onChangePicture}*/}
            {/*    />*/}
            {/*</label>*/}


            <input id={field.id} type="file" onChange={(e) => onChangePicture(e)}/>
            <img className="card" width="100%"
                 src={field.previewThumbnail ? (field.previewThumbnail) : (t2_1)}
                onChange={onChangePicture}
            />
            <Button onClick={() => removePicture(field.id)} style={{width: '100%', marginBottom: 10}}>
                <DeleteOutlineIcon/>
            </Button>
            {/*<span style={{marginBottom: 10}}>*/}
            {/*    delete*/}
            {/*</span>*/}

        </div>
    )
}

export default Picture;