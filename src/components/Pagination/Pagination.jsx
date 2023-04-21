import React from 'react';
import './pagination.css'

const Pagination = ({ btnStyle, activeStyle }) => {



  return (
    <div className='_pagination-wrapper'>
      <button className='_btn _prev-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>
        Prev
      </button>
      <button className='_btn active'>1</button>
      <button className='_btn'>2</button>
      <button className='_btn'>3</button>
      <button className='_btn _next-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
          <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
        Next
      </button>
    </div>
  )
  
}

export default Pagination