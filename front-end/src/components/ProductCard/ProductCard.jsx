import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tooltip from '../Tooltip/Tooltip';

const ProductCard = () => {


  const handleAddWishlist = () => {
    toast.success("Product added in wishlist");
  }


  return (
    <div className='group flex-grow-0 flex-shrink-0 basis-auto w-full sm:w-1/2 lg:w-1/4 px-2'>
      <div className='h-[300px] relative overflow-hidden'>
        <span className='bg-primary text-white text-xs left-2 top-2 px-[6px] py-[2px] absolute'>-12%</span>
        <Link to="/">
          <img className='w-full h-full object-cover' src="/images/product1.webp" alt="" />
        </Link>

        <button onClick={handleAddWishlist} className='absolute hover:bg-theme_color hover:text-white bg-white translate-x-10 group-hover:translate-x-0 duration-300 px-1 border top-10 right-1 border-b-b_gray'><i className='text-xl bx bx-heart'></i>
          
          <span className="tooltip">Add To Wishlist</span>

        </button>



        <button className='bg-primary text-[15px] flex items-center justify-center gap-x-3 text-white py-[6px] w-full duration-300 hover:bg-theme_color  group-hover:-translate-y-10'><i className='bx text-xl bx-cart-alt'></i>  Add to cart</button>
      </div>

      <div className='mt-5'>
        <Link to="">
          <h2 className='text-sm leading-[17px] text-primary   hover:text-theme_color'>Buy Guild plaener -900w</h2>
        </Link>
        <span className='inline-block mt-2'>$239.00</span>
      </div>

    </div>

  )
}

export default ProductCard