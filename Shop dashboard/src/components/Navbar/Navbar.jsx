import React, { useState } from 'react'

const Navbar = ({ setAside , aside }) => {


  return (
    <header className='bg-white py-3 px-5'>
      <button onClick={() => setAside(!aside)}><i className='bx text-2xl bx-menu'></i></button>
    </header>
  )
}

export default Navbar;
