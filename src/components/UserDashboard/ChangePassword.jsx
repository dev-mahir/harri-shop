import React from 'react'
import Button from '../Button/Button'

const ChangePassword = () => {
  return (
    <div>
      <h3 className='text-xl font-space font-semibold mb-10'>Change Password</h3>
      <form action="">
        <div className='flex items-center gap-x-4 border border-b_gray px-5'>
          <i className='bx text-xl bx-envelope text-secondary'></i>
          <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter your email' />
        </div>
        <div className='flex gap-x-4 mt-5 mb-5'>
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-lock text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Enter password' />
          </div>
          <div className='flex items-center gap-x-4 border border-b_gray px-5 w-full'>
            <i className='bx text-xl bx-lock text-secondary'></i>
            <input type="text" className='bg-transparent m-0 px-0' placeholder='Confirm password' />
          </div>
        </div>
        <Button
          name="Change Password"
        />
      </form>


    </div>
  )
}

export default ChangePassword