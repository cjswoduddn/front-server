import React, {useState, useEffect} from 'react';
import { Grid } from '@material-ui/core';
import {useLocation, useParams} from 'react-router-dom';

import HorizontalList from './horizontallist/HorizontalList';
import VerticalList from './verticallist/VerticalList';
import Pagination from './pagination/Pagination';
import {useAsync} from 'react-async';

import "./head-hunt.css";

const HeadHunt = () =>{

  const location = useLocation();
  const {path} = useParams();

  const countNum = 3;
  const resume = location.state.resume;
  const contentsLength = resume.length;
  const firstContents = contentsLength < countNum ? contentsLength : countNum;

  const [mode, setMode] = useState(0);
  const [contents, setContents] = useState(firstContents);
  const [data, setData] = useState(resume.slice(0, firstContents));


  useEffect(()=>{
    const handleMode = () =>{
      if(window.innerWidth <= 770){
        setMode(1);
      }else if(window.innerWidth > 770){
        setMode(0);
      }
    }

    window.addEventListener("resize", handleMode);

    return ()=>{
      window.removeEventListener("resize", handleMode);
    }
  }, []);

  const onClick=()=>{
    let newcontents = contents+countNum > contentsLength ? contentsLength : contents+countNum;
    if(contents === contentsLength){
      newcontents = firstContents;
    }
    setContents(newcontents);
    setData(resume.slice(0, newcontents));
  }

  return (
    <>
      <Grid container justify="center">
        <p>'{path+"' "}검색 결과</p>
        {mode === 1 ? (<VerticalList thumbnails={data}/>) :
                      (<HorizontalList thumbnails={data}/>)}
        <Grid container xs={8}>
          <Pagination handler={onClick} contents={contents} allContents={contentsLength}/>
        </Grid>
      </Grid>
    </>
  );
}

export default HeadHunt;
