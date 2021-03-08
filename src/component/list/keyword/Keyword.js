import React from 'react';
import { Grid } from '@material-ui/core';
import './keyword.css';

const SearchResult = ({mode, keyword}) =>{

  return(
    <>
      <Grid item xs={mode === 0 ? 8 : 12} style={{marginBottom: 30, marginTop: 30, marginLeft: 30}}>
          <span className="keyword-dynamic">{keyword} </span>
          <span className="keyword-static">{"  "}검색결과</span>
      </Grid>
    </>
  );
}

export default SearchResult;