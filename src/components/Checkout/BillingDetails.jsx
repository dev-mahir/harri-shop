import React from 'react'

const BillingDetails = () => {
  return (
    <form className='mt-7'>
      <div className='mb-5'>
        <label htmlFor="name">First Name <span className='text-theme_color'>*</span></label>
        <input type="text" className='w-full mt-1  py-3 px-3 bg-f1' />
      </div>
      <div className='mb-5'>

        <label htmlFor="name">Last Name <span className='text-theme_color'>*</span></label>
        <input type="text" className='w-full  mt-1 py-3 px-3 bg-f1' />
      </div>
      <div className='mb-5'>

        <label htmlFor="name">Address <span className='text-theme_color'>*</span></label>
        <input type="text" className='w-full  mt-1 py-3 px-3 bg-f1' />
      </div>
      <div className='mb-5'>

        <label htmlFor="name">Town / City <span className='text-theme_color'>*</span></label>
        <input type="text" className='w-full  mt-1 py-3 px-3 bg-f1' />
      </div>
      <div className='mb-5'>
        <label htmlFor="name">Postcode / Zip  <span className='text-theme_color'>*</span></label>
        <input type="text" className='w-full  mt-1 py-3 px-3 bg-f1' />
      </div>

      <div className='flex gap-x-4 justify-between mb-5'>
        <div>
          <label htmlFor="name">Email Address</label>
          <input type="email" className='w-full  mt-1 py-3 px-3 bg-f1' />
        </div>
        <div>
          <label htmlFor="name">Phone <span className='text-theme_color'>*</span></label>
          <input type="text" className='w-full  mt-1 py-3 px-3 bg-f1' />
        </div>
      </div>

      <div className='mb-5'>
        <label htmlFor="name">Order Notes</label>
        <textarea rows={5} className='w-full  mt-1 py-3 px-3 bg-f1' placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
      </div>
    </form>

  )
}

export default BillingDetails