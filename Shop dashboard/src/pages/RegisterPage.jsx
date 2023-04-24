import React from 'react'
import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <>

      <h2 className='font-space text-primary mb-5'>Create account</h2>

      <form>
        <div className='mb-3'>
          <label htmlFor="name">Name</label>
          <input type="text" id='name' placeholder='Enter your name' />
        </div>
        <div className='mb-3'>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' placeholder='Enter email' />
        </div>


        <div className='mb-3'>
          <label htmlFor="Password">Password</label>
          <input type="text" id='Password' placeholder='Enter Password' />
        </div>


        <div className="mt-4">
          <Button
            btnName="Create account"
            className="w-full"
          />
        </div>

      </form>

      <div className="divider my-5"></div>

      <p className='text-sm text-secondary mb-3'>Already have an account? <Link to="/login" className='text-theme_color font-medium'>Login   </Link></p>

      <div>

        <Button
          btnName="Login With Facebook"
          startIcon={<i className='bx text-xl bxl-facebook'></i>}
          className="w-full bg-gray-100 !text-primary hover:!text-white hover:bg-blue-500"
        />
        <Button
          btnName="Login With Facebook"
          startIcon={<i className='bx text-xl bxl-google'></i>}
          className="w-full bg-gray-100 mt-4 !text-primary hover:bg-red-500 hover:!text-white"

        />
      </div>
    </>
  )
}

export default RegisterPage