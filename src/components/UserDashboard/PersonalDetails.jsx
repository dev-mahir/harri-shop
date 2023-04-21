import React from 'react'
import Button from '../Button/Button'

const PersonalDetails = () => {
  return (
    <div>
      <h3 className='text-xl font-space font-semibold mb-10'>Personal Details</h3>

      <form action="">
        <div className='flex gap-x-4'> 
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-user text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter your Name'/>
          </div>
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-envelope text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter your email'/>
          </div>
        </div>
        <div className='flex gap-x-4 mt-5 mb-5'> 
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-phone text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter your phone number'/>
          </div>
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-map text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter your address'/>
          </div>
        </div>
        <Button
        name="Update profile"
        />
      </form>


    </div>
  )
}

export default PersonalDetails