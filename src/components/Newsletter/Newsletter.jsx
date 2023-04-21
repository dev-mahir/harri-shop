import React from 'react'

const Newsletter = () => {
  const style = {
    backgroundRepeat: "no-repeat",
    background: "url('/images/news.jpg')",
    backgroundPosition: "center center",
    backgroundSize: "cover"
  }


  return (
    <div className='py-14' style={style}>
      <div className='container py-10 md:py-14  gap-y-6 sm:gap-y-0  sm:px-32 md:px-5 mx-auto bg-white flex flex-col md:flex-row items-center justify-between'>
        <h2 className=' font-bold text-center md:text-left sm:mb-5 max-w-[300px] leading-[40px]'>Subscribe for
          Latest Trends & Offers</h2>
        <div>
          <div className='flex border border-black pl-10 pr-2 py-2 justify-end'>
            <input type="email" className='pr-2' placeholder='Enter your email' />
            <button className='px-5 py-2 bg-black text-white'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter