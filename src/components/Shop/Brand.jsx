import React, { useState } from 'react'

const Brand = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div onClick={() => setShow(!show)} className='flex cursor-pointer justify-between items-center border-b border-b_gray'>
        <h3 className='text-[17px] text-primary !font-primary'>Brand</h3>
        <i className={`text-2xl bx  ${!show ? "bx-chevron-down" : "bx-chevron-up"}`}></i>
      </div>
      <div className={`my-3 space-y-1 flex flex-col items-start  transition-height  ${show ? " opacity-100 h-full" : "opacity-0  h-0"}`}>
        <button className='text-secondary hover:text-theme_color'>Asus</button>
        <button className='text-secondary hover:text-theme_color'>Laptop</button>
      </div>
    </div>
  )
}

export default Brand;