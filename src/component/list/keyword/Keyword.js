import React from 'react';
import {Grid} from '@material-ui/core';
import './keyword.css';

const SearchResult = ({mode, keyword}) => {
    const pathname = window.location.pathname
    console.log(pathname);

    return (
        <>
            {pathname === '/search' ?
                <Grid item xs={mode === 0 ? 8 : 12} style={{textAlign: 'center', marginTop: 30, marginBottom: 30, fontVariant: 'small-caps'}}>
                    <span className="keyword-dynamic" style={{fontSize: 50}}>template management</span>
                </Grid>
                :
                <Grid item xs={mode === 0 ? 8 : 12} style={{marginBottom: 30, marginTop: 30, marginLeft: 30}}>
                    <span className="keyword-dynamic">{keyword} </span>
                    <span className="keyword-static">{"  "}검색결과</span>
                </Grid>
            }
        </>
    );
}

export default SearchResult;
