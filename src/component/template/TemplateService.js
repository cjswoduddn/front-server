import React from 'react';
import {useParams} from 'react-router-dom';

const TemplateService = () =>{
  let {id} = useParams();
  return(
    <div>
      {id}
    </div>
  )
}

export default TemplateService;