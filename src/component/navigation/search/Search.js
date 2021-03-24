import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import './Search.css';

const Search = () =>{
  const [mode, setMode] = useState(0);
  const [focused, setFocus] = useState(false);
  const history = useHistory();
  // const TEMPLATE_BASE_URL = 'http://api.appeal.icu/portfolio';
  const TEMPLATE_BASE_URL = 'http://localhost:8080/portfolio';

  const modeHandler = () =>{
    if(mode === 0){
      setMode(1)
    }
  }

  const focus = (e) => {
    e.preventDefault();
    setFocus(value => !value);
    if(mode === 0){
      setMode(1)
    }
  }

  const searchEvent = (e) =>{
    e.preventDefault();
    const body = {
      keyword : e.target.keyword.value
    }
    if(body.keyword === "") return;
    axios({
      // method: 'post',
      method: 'get',
      headers:{
        'Content-Type': 'application/json'
      },
      url: TEMPLATE_BASE_URL+"/"+body.keyword,
    })
        .then((res)=>{
          history.push({
            pathname: "/search/"+body.keyword,
            state:{
              resume: res.data
            }
          });

        })
        .catch((err)=>{
          console.log(err);
        });
  }

  return(
      <>
        <form onSubmit={searchEvent}>
          <div className="container">
            <input className={'focused' } placeholder="Search" id='keyword' name='keyword' type='keyword'/>
            <button onClick={modeHandler} id="search-button" className={focused && 'active'}>🔍</button>
          </div>
        </form>
      </>
  );
}

export default Search;