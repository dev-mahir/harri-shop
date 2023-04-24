import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
  return (
    <div className='container py-10 px-3'>

      <div className=" grid  lg:grid-cols-6 gap-y-10">
        <div className="col-span-2 pr-20">
          <img src="/images/logo.svg" alt="" />
          <p className='text-base mt-5'>The home and elements needed to create beautiful products</p>
          <div className='mt-5 flex gap-x-3'>
            <Link to="#"> <i className='bx text-secondary text-xl bxl-facebook'></i></Link>
            <Link to="#"> <i className='bx text-secondary text-xl bxl-twitter'></i></Link>
            <Link to="#"> <i className='bx text-secondary text-xl bxl-youtube'></i></Link>
            <Link to="#"> <i className='bx text-secondary text-xl bxl-instagram'></i></Link>
          </div>
        </div>
        <div className="">
          <h4 className='text-xl text-primary font-space font-semibold'>Company</h4>
          <nav className='mt-2 flex flex-col gap-y-2'>
            <Link to="/" className='text-secondary'>About us</Link>
            <Link to="/" className='text-secondary'>Blog</Link>
            <Link to="/" className='text-secondary'>Reviews</Link>
          </nav>
        </div>

        <div className="">
          <h4 className='text-xl text-primary font-space font-semibold'>Shop</h4>
          <nav className='mt-2 flex flex-col gap-y-2'>
            <Link to="/" className='text-secondary'>Game & Video</Link>
            <Link to="/" className='text-secondary'>Phone & Tablets</Link>
            <Link to="/" className='text-secondary'>Reviews</Link>
          </nav>
        </div>
        <div className="">
          <h4 className='text-xl text-primary font-space font-semibold'>Support</h4>
          <nav className='mt-2 flex flex-col gap-y-2'>
            <Link to="/" className='text-secondary'>Game & Video</Link>
            <Link to="/" className='text-secondary'>Phone & Tablets</Link>
            <Link to="/" className='text-secondary'>Reviews</Link>
          </nav>
        </div>
        <div className="">
          <h4 className='text-xl text-primary font-space font-semibold mb-1'>Talk to us</h4>
          
          <Link to="mailto:support@harry.com"  className='text-secondary'>support@harry.com</Link>

        </div>

      
      </div>

    </div>
  )
}

export default FooterTop