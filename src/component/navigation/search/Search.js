import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

import './Search.css';

const Search = () =>{
  const [mode, setMode] = useState(0);
  const [focused, setFocus] = useState(false);
  const history = useHistory();
  const TEMPLATE_BASE_URL = 'http://localhost:8080/template';
  // const TEMPLATE_BASE_URL = 'http://localhost:8000/api/products';

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
        {/*<div className="app">*/}
        <form onSubmit={searchEvent}>
          <div className="container">
            <input className={'focused' } placeholder="Search" id='keyword' name='keyword' type='keyword'/>
            <button onClick={modeHandler} id="search-button" className={focused && 'active'}>🔍</button>
          </div>
        </form>
        {/*</div>*/}
        {/*<button className="search-button" onClick={modeHandler}>*/}
        {/*  <form onSubmit={searchEvent}>*/}
        {/*    <p className="search-button-font">*/}
        {/*      <FiSearch/>*/}
        {/*      검색{" "}*/}
        {/*      {mode === 0 ? <></> :*/}
        {/*        <input className="search-button-input" id='keyword' name='keyword' type='keyword' autoFocus></input>*/}
        {/*      }*/}
        {/*    </p>*/}
        {/*  </form>*/}
        {/*</button>*/}
      </>
  );
}

export default Search;