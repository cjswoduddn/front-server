import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';
import { FiSearch } from 'react-icons/fi';
import {useHistory} from 'react-router-dom';

import './Search.css';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    // padding: theme.spacing(0, 2),
    padding: '0 2%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Search = () =>{
  const classes = useStyles();
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
      <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

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