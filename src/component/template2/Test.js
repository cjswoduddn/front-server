import React, {useState} from 'react';
import axios from 'axios';

const TEMPLATE_BASE_URL = 'http://localhost:8080/signup/test';

const Test = () =>{

  const [text, setText] = useState({});
  const [image, setImage] = useState({});

  const changeThumbnails = (e) =>{
    let reader = new FileReader();
    let filelist = e.target.files;
    if(filelist === null || filelist.length === 0) return;

    reader.onloadend = () => {
      setImage({
        ...image,
        [e.target.name] : filelist[0],
        ["noSubmit"+e.target.name] : reader.result
      })
    }
    reader.readAsDataURL(filelist[0]);
  }

  const onSubmit = (e) => {
    const form = new FormData();
    const files = [];
    for(const [key, value] of Object.entries(image)){
      let keyString = key.toString();
      if(keyString.startsWith("noSubmit")){
        continue;
      }
      form.append("files", value);
    }
    form.append("dtype", "hello")
    axios({
      method: 'post',
      headers:{
        'Content-Type': `multipart/form-data`
      },
      url: TEMPLATE_BASE_URL,
      data: form
    })
    .then((res)=>{
      console.log(res.body);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  return(
    <div style={{marginTop: '202px'}}>
      Hello, World!
      <input accept="image/*" type="file" onChange={changeThumbnails} name="thumbnail1"/>
      <input accept="image/*" type="file" onChange={changeThumbnails} name="thumbnail2"/>
      <input accept="image/*" type="file" onChange={changeThumbnails} name="thumbnail3"/>
      <input accept="image/*" type="file" onChange={changeThumbnails} name="thumbnail4"/>
      <button onClick={onSubmit}>SUBMIT</button>
    </div>
  )
}

export default Test;