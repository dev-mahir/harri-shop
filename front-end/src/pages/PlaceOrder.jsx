import React from 'react'
import Invoice from '../components/Invoice/Invoice'

const PlaceOrder = () => {
  return (
    <div className='container py-14'>
      <h4 className='bg-[#d1e7dd] py-3 rounded-sm px-7 mb-10'>Thank you <b>Md Mahir Uddin</b> Your order have been received !</h4>

      <Invoice/>

    </div>
  )
}

export default PlaceOrder