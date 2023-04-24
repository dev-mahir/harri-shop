import React from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {

  return (
    <div style={{background: "url('/images/bg.jpg')"}} className='h-[90vh] flex justify-center items-center'>

      <div className=' _shadow-sm bg-white mx-5 sm:mx-0 px-10 py-10 rounded-md'>
        <div className='text-center'>
          <h2 className='font-bold leading-[41px]'>Hello Again</h2>
          <p className='text-base text-secondary  leading-[26px]'>Enter your credentials to acces your account.</p>
        </div>
        <form action="" className='space-y-4 mt-7'>
      
          <div className=' border border-b_gray  px-3 flex items-center focus:border-theme_color'>
            <i className='text-secondary text-xl bx bx-user'></i>
            <input type="text" className='pl-5 w-full py-3' placeholder='Enter your email' />
          </div>
      
          <div className='border border-b_gray  px-3 flex items-center focus:border-theme_color'>
            <i className='text-secondary text-xl bx bx-lock'></i>
            <input type="text" className='pl-5 h-full py-3' placeholder='Enter your password' />
          </div>

          <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center gap-x-2 text-secondary'>
              <input type="checkbox"  id='remembar'/>
              <label htmlFor="remembar" className='cursor-pointer'>Remembar me</label>
            </div>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button className='bg-theme_color py-3 w-full font-semibold text-white'>Sign In</button>

        </form>
    

        <div className='text-center mt-5'>
          <span>Don’t have an account?<Link to="/register" className='font-semibold text-theme_color'> Register Now</Link> </span>
     </div>
      </div>

    </div>
  )
}

export default LoginPage