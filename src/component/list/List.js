import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';

import Horizontal from './horizontal/Horizontal';
import Vertical from './vertical/Vertical';
import Keyword from './keyword/Keyword';
import Pagination from './pagination.js/Pagination';

const COUNT = 3;

const List = ({keyword, resume}) =>{
  // console.log(resume);

  const [mode, setMode] = useState(0);    // horizontal : 0, 전체모드

  const allCount = resume.length;
  const initCount = allCount < COUNT ? allCount : COUNT;
  const [count, setCount] = useState(initCount);

  const countHandler = () =>{
    if(count === allCount){
      setCount(initCount);
    }
    else{
      let newCount = count+COUNT < allCount ? count+COUNT : allCount;
      setCount(newCount);
    }
  }


  useEffect(()=>{
    const widthListener = () =>{
      if(window.innerWidth > 770){
        setMode(0);
      }else{
        setMode(1);
      }
    }
    setCount(initCount);
    window.addEventListener("resize", widthListener);
    return ()=>{
      window.removeEventListener("resize", widthListener);
    }
  }, [keyword])


  return (
    <Grid container justify="center" style={{marginTop: 102}}>
      <Keyword mode={mode} keyword={keyword}/>
      {mode === 0 ?
        <Horizontal resume={resume} count={count}/>
      :
        <Vertical resume={resume} count={count}/>
      }
      <Grid container xs={8}>
        <Pagination countHandler={countHandler} count={count} allCount={allCount}/>
      </Grid>
    </Grid>
  )
}

export default List;