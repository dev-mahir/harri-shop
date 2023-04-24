import React from 'react'
import { Link } from 'react-router-dom'

const BottomMenu = () => {
  return (
    <div className=' md:hidden  fixed z-50 bottom-0 left-0 w-full bg-white px-5 md:px-10 py-4 border-t border-gray-300'>
      <div className='flex md:gap-5 items-center justify-between'>
        <button className='text-2xl'><i className='bx bx-search'></i></button>
        <Link to="/login" className='text-2xl'><i className='bx bx-user'></i></Link>
        <button className='text-2xl relative'>
          <i className='bx bx-heart'></i>
          <span className='absolute top-0 -right-3 bg-theme_color text-sm flex justify-center items-center text-white h-[18px] w-[18px] rounded-full font-semibold'>2</span>
        </button>
        <button onClick={() => setShow(!show)} className='text-2xl relative'>
          <i className='bx bx-cart'></i>
          <span className='absolute top-0 -right-3 bg-theme_color text-sm flex justify-center items-center text-white h-[18px] w-[18px] rounded-full font-medium'>2</span>
        </button>
      </div>
    </div>
  )
}

export default BottomMenu