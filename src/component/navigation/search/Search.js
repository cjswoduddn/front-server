import React, {useState} from 'react';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

import './search.css';


const Search = () =>{

  const [mode, setMode] = useState(0);
  const history = useHistory();
  const TEMPLATE_BASE_URL = 'http://localhost:8080/template';

  const modeHandler = () =>{
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
      method: 'post',
      headers:{
        'Content-Type': 'application/json'
      },
      url: TEMPLATE_BASE_URL,
      data: body
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
      <button className="search-button" onClick={modeHandler}>
        <form onSubmit={searchEvent}>
          <p className="search-button-font">
            <FiSearch/>
            검색{" "}
            {mode === 0 ? <></> :
              <input className="search-button-input" id='keyword' name='keyword' type='keyword' autoFocus></input>
            }
          </p>
        </form>
      </button>
    </>
  );
}

export default Search;