import React from 'react'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <>
      <FooterTop />
      <div className="container border-t border-b_gray pb-16 md:pb-0">
        <div className='flex flex-col gap-y-3 md:flex-row  items-center justify-between py-5'>
          <p className='text-secondary'>Copyright © 2023 by <span className='text-theme_color'>Hamart</span> All rights reserved.</p>
          <img src="/images/payment.webp" alt="" />
        </div>
      </div>
    </>

  )
}

export default Footer