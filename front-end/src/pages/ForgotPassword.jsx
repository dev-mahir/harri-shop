import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {

  return (
    <div style={{ background: "url('/images/bg.jpg')" }} className='h-[90vh] flex justify-center items-center'>

      <div className=' _shadow-sm bg-white mx-5 sm:mx-0 px-10 py-10 rounded-md'>
        <div className='text-center'>
          <h2 className='font-bold leading-[41px]'>Forgot Password?</h2>
          <p className='text-base text-secondary  leading-[26px]'> Enter your email address to request password reset.  </p>
        </div>
        <form className='space-y-4 mt-7'>


          <div className=' border border-b_gray  px-3 flex items-center focus:border-theme_color'>
            <i className='text-secondary text-xl bx bx-envelope'></i>
            <input type="text" className='pl-5 w-full py-3' placeholder='Enter your email' />
          </div>


          <button className='bg-theme_color py-3 w-full font-semibold text-white'>Send request</button>

        </form>


        <div className='text-center mt-5'>
          <span>Remembar your password<Link to="/login" className='font-semibold text-theme_color'> Log in</Link> </span>
        </div>
      </div>

    </div>
  )
}

export default ForgotPassword;