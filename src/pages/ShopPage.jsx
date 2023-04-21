import React, { useState } from 'react'
import ProductCard from '../components/ProductCard/ProductCard'
import SortBy from '../components/Shop/SortBy'
import Category from '../components/Shop/Category'
import Brand from '../components/Shop/Brand'
import PriceRangeSlider from '../components/Shop/PriceRange'
import Pagination from '../components/Pagination/Pagination'
import Newsletter from '../components/Newsletter/Newsletter'

const ShopPage = () => {
  const [priceRange, setPriceRange] = useState({
    min: "",
    max: ""
  });



  return (
    <>
      <div className='container flex flex-col-reverse gap-x-10 py-10'>


        <div className=' basis-1/3 mt-5 space-y-5'>
          <PriceRangeSlider setPriceRange={setPriceRange} mxPrice="2000" />
          <Category />
          <Brand />
          <button className='bg-theme_color  text-white font-semibold w-full py-2'>Reset Filter</button>
        </div>

        <div className='pb-20'>
          <div className='py-5'>
            <SortBy />
          </div>
          <div className='flex flex-wrap mb-10 gap-y-10'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <Pagination />
        </div>
      </div>
      <Newsletter />
    </>

  )
}

export default ShopPage