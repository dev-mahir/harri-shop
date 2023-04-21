import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from "swiper";
import "swiper/css";
import './category.css'
import "swiper/css/scrollbar";
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar]}
      >
        <SwiperSlide>
          <Link to="/">
            <div className='w-[250px]'>
              <img src="/images/cat1.webp" alt="" />
              <h2 className='mt-3 text-sm text-secondary'>Exercise Bike & Shaver Clean</h2>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <div className='w-[250px]'>
              <img src="/images/cat2.webp" alt="" />
              <h2 className='mt-3 text-sm text-secondary'>Exercise Bike & Shaver Clean</h2>
            </div>
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link to="">
            <div className='w-[250px]'>
              <img src="/images/cat3.webp" alt="" />
              <h2 className='mt-3 text-sm text-secondary'>Exercise Bike & Shaver Clean</h2>
            </div>
          </Link>

        </SwiperSlide>
        <SwiperSlide>
          <Link to=""><div className='w-[250px]'>
            <img src="/images/cat4.webp" alt="" />
            <h2 className='mt-3 text-sm text-secondary '>Exercise Bike & Shaver Clean</h2>
          </div></Link>
        </SwiperSlide>





      </Swiper>
    </>
  )
}

export default Category