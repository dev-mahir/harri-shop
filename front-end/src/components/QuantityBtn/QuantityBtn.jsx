import React from 'react'

const QuantityBtn = () => {
  return (
    <div className='border mx-auto border-b_gray flex justify-between items-center max-w-[140px] py-1'>
      <button className='pl-2'>
        <i className='bx text-2xl bx-minus'></i>
      </button>
      <span className='font-semibold text-base border-l border-r border-b_gray px-4'>1</span>
      <button className='pr-2'>
        <i className='bx text-2xl bx-plus'></i>
      </button>
    </div>
  )
}

export default QuantityBtn;