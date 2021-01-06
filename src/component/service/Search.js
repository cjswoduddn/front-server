import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

import List from '../list/List';

const Search = () =>{

  const {path} = useParams();
  const resume = useLocation().state.resume;

  return(
    <List keyword={path} resume={resume}/>
  )
}

export default Search;
