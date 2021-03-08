import React from 'react';
import './pagination.css';

const Pagination = ({countHandler, count, allCount}) =>{

  return(
    <button className='pagination-btn' onClick={countHandler}>
      <p className='pagination-span1'>{count === allCount ? '접기' : '더보기'} </p>
      <p className='pagination-span2'>{count} / {allCount}</p>
    </button>
  )
}

export default Pagination;