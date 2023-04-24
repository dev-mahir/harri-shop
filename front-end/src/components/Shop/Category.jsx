import React from 'react'

const Category = () => {
  return (
    <div>

      <div className='flex justify-between items-center border-b border-b_gray'>
        <h3 className='text-[17px] text-primary !font-primary'>Category</h3>
        <i className='text-2xl bx bx-chevron-down'></i>
      </div>
      <div className='mt-3 space-y-1 flex flex-col items-start'>
        <button className='text-secondary hover:text-theme_color'>iPads & Tablets </button>
        <button className='text-secondary hover:text-theme_color'>Computers Monitor </button>
      </div>
    </div>
  )
}

export default Category