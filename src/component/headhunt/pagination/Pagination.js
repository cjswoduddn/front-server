import React from 'react';
import './pagination.css';

const Pagination = (props) =>{

  const onClick = props.handler;
  const contents = props.contents;
  const allContents = props.allContents;

  return(
    <button className='pagination-btn' onClick={onClick}>
      <span className='pagination-span1'>{contents == allContents ? '접기' : '더보기'}</span>
      <span className='pagination-span2'>{contents}/{allContents}</span>
    </button>
  )
}

export default Pagination;