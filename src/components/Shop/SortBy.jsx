import React, { useState } from 'react'
import useModal from '../../hooks/useModal';

const SortBy = () => {

  const [ref, show, setShow] = useModal(false);


  return (
    <div className='flex  justify-between items-center border border-gray-300 px-5 py-2'>
      <div>
        <p>Showing 1–9 of 27 results</p>
      </div>
      <div className='flex items-center gap-x-3'>
        <button className='hidden md:block' ><i className='text-secondary text-2xl bx bx-grid-alt'></i></button>
        <button className='hidden md:block'><i className='text-secondary text-3xl bx bx-menu' ></i></button>
        <div className='relative ml-3'>
          <button onClick={() => setShow(!show)} className='flex items-center font-medium gap-x-5 md:gap-x-10'>
            Sort Filtering
            <i className='text-2xl bx bx-chevron-down'></i>
          </button>
          {show && <div ref={ref} className='flex w-full  items-start space-y-2  flex-col absolute top-11 left-0 bg-white _shadow-sm z-40 px-3 py-5 '>
            <button className='text-left hover:text-theme_color'> Latest Product </button>
            <button className='text-left hover:text-theme_color'> Price low to high</button>
            <button className='text-left hover:text-theme_color'> Price high to low</button>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default SortBy;