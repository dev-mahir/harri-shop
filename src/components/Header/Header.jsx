
import { Link } from 'react-router-dom';
import './_header.scss';
import React, { useRef, useState } from 'react'
import Cart from './Cart';
import Sidebar from '../Sidebar/Sidebar';
import ShopInfo from './ShopInfo';
import BottomMenu from './BottomMenu';

const Header = () => {
  const [cartShow, setCartShow] = useState(false);

  const [show, setShow] = useState(false);

  const ref = useRef(null)

  return (

    <>

      {/* Cart sidebar  */}
      <Sidebar show={show} setShow={setShow} cl={<Cart />}>
        <>
          <div className='px-5 py-3 flex items-center justify-between border-b border-b_gray _shadow-sm'>
            <h3 className='uppercase text-base font-medium'>Shopping cart</h3>
            <button onClick={() => setShow(false)} className='text-3xl flex items-center'> <i className=' bx bx-x'></i></button>
          </div>
          <div className='flex  items-center flex-col min-h-[65vh] justify-center gap-y-3'>
            <img src="/images/empty-cart.webp" alt="" />
            <span className='text-primary text-base'>Your Cart is empty</span>
            <Link to="/shop" className='text-center bg-gray-100 hover:bg-theme_color hover:text-white transition duration-300 px-5 py-2 font-semibold text-primary'>Go to Shop</Link>
          </div>
          <div className='flex flex-col gap-5  border-t  border-b_gray pt-3'>
            <div className='flex justify-between items-center px-5'>
              <h3 className='text-lg font-semibold text-primary'>Subtotal</h3>
              <span className='text-xl font-semibold text-theme_color'>$0.00</span>
            </div>
            <div className='px-5'>
              <Link to="/cart" className='bg-gray-100 w-full block text-center py-2 font-semibold text-primary hover:bg-theme_color hover:text-white duration-300'>View Cart</Link>
              <Link to="/checkout" className='border-b_gray block text-center border mt-3 w-full py-2 font-semibold text-primary hover:bg-theme_color hover:text-white duration-300'>Checkout</Link>
            </div>
          </div>
        </>
      </Sidebar>

      <header className=' px-3 sm:px-10 py-3 bg-[#f0f2ee] flex justify-between items-center border-b border-b-b_gray'>
        <div className='flex items-center gap-x-24'>
          <div className="">
            <Link to="/"><img className='w-[100px]' src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg" alt="" /></Link>
          </div>
          <div className='hidden lg:block'>
            <nav className='flex gap-x-7 items-center'>
              <Link to="/" className=' text-[15px] font-medium text-secondary hover:text-theme_color'>Home</Link>
              <Link to="/coming-soon" className=' text-[15px] font-medium text-secondary hover:text-theme_color'>About Us</Link>
              <Link to="/shop" className=' text-[15px] font-medium text-secondary hover:text-theme_color'>Shop</Link>
              <span className='relative group cursor-pointer flex items-center text-[15px] font-medium text-secondary hover:text-theme_color'>Pages
                <i className='text-lg bx bx-chevron-down'></i>

                <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 z-40 w-[200px] absolute top-[45px] left-0 bg-gray-50 _shadow-sm px-6 py-5'>
                  <nav className='flex flex-col gap-y-4'>
                    <Link to="" className='text-[13px] font-medium text-secondary  duration-300 hover:text-theme_color hover:border-l-2 hover:pl-2 hover:border-theme_color'>My Cart</Link>
                    <Link to="" className='text-[13px] font-medium text-secondary  duration-300 hover:text-theme_color hover:border-l-2 hover:pl-2 hover:border-theme_color'>Checkout</Link>
                    <Link to="" className='text-[13px] font-medium text-secondary  duration-300 hover:text-theme_color hover:border-l-2 hover:pl-2 hover:border-theme_color'>FAQs</Link>
                    <Link to="" className='text-[13px] font-medium text-secondary  duration-300 hover:text-theme_color hover:border-l-2 hover:pl-2 hover:border-theme_color'>Privacy & Policy</Link>
                  </nav>
                </div>
              </span>
              <Link to="/contact" className=' text-[15px] font-medium text-secondary hover:text-theme_color'>Contact us</Link>
            </nav>
          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <div className=' gap-5 items-center hidden sm:flex'>
            <button className='text-2xl'><i className='bx bx-search'></i></button>
            <Link to="/login" className='text-2xl'><i className='bx bx-user'></i></Link>
            <Link to="/wishlist" className='text-2xl relative'>
              <i className='bx bx-heart'></i>
              <span className='absolute top-0 -right-3 bg-theme_color text-sm flex justify-center items-center text-white h-[18px] w-[18px] rounded-full font-semibold'>2</span>
            </Link>
            <button onClick={() => setShow(!show)} className='text-2xl relative'>
              <i className='bx bx-cart'></i>
              <span className='absolute top-0 -right-3 bg-theme_color text-sm flex justify-center items-center text-white h-[18px] w-[18px] rounded-full font-medium'>2</span>
            </button>
          </div>
          <button className='lg:hidden'><i className='bx text-2xl bx-menu-alt-right'></i></button>
        </div>
      </header>

      {/* mobile bottom menu  */}
      <BottomMenu />

    </>

  )
}

export default Header