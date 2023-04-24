import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <p className='text-xl mb-3'>Page not found</p>
      <Link to="/" className= 'text-white bg-theme_color px-10 font-semibold py-4'>Go to home</Link>
    </div>
  )
}

export default ErrorPage