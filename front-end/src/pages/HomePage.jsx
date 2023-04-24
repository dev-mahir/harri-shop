import React, { useState } from 'react'
import Newsletter from '../components/Newsletter/Newsletter'
import ProductCard from '../components/ProductCard/ProductCard'
import Sidebar from '../components/Sidebar/Sidebar'
import Category from '../components/Home/Category'

const HomePage = () => {

  return (
    <div>




      <div className='container mt-10'>

        <div className='my-10'>
          <Category />
        </div>



        <div className='flex flex-col md:flex-row gap-y-4 md:gap-y-0 px-4 md:px-0 justify-between'>
          <h2 className='pl-3 border-l-[3px] border-theme_color'>Popular Products</h2>
          <div className='flex gap-x-6'>
            <button className='font-medium  border-b-2 border-theme_color text-theme_color hover:text-theme_color'>Top Rated</button>
            <button className='font-medium text-secondary hover:text-theme_color  '>Best Selling</button>
            <button className='font-medium text-secondary hover:text-theme_color  '>Latest Product</button>
          </div>
        </div>

        <div className='flex flex-wrap gap-y-6 mt-8 mb-32'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>




      </div>







      <Newsletter />











    </div>
  )
}

export default HomePage