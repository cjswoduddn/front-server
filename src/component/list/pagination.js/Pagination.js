import React from 'react';
import './pagination.css';

const Pagination = ({countHandler, count, allCount}) =>{

  return(
    <button className='pagination-btn' onClick={countHandler}>
      <span className='pagination-span1'>{count === allCount ? '접기' : '더보기'}</span>
      <span className='pagination-span2'>{count}/{allCount}</span>
    </button>
  )
}

export default Pagination;