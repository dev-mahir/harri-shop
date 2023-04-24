import React from 'react'
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  return (
    <div className='flex items-center justify-center h-[80vh]'>
      <div className='flex flex-col items-center gap-y-5'>
        <img src="/images/empty-cart.webp" alt="" />
        <p className='text-base text-primary'> Your cart is empty</p>
        <Link to ="/shop" className='bg-f1 px-5 py-2 font-semibold font-space hover:bg-theme_color hover:text-white duration-300'>Go To Shop</Link>
      </div>
    </div>
  )
}

export default WishlistPage;