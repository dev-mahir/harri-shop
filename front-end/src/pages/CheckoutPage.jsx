import React from 'react'
import BillingDetails from '../components/Checkout/BillingDetails'
import OrderSummery from '../components/Checkout/OrderSummery'

const CheckoutPage = () => {
  return (
    <div className='container pt-14'>

      <div className='flex gap-x-14'>
        <div className='basis-1/2'>
          <h2 className='font-space border-b border-b_gray pb-3'>Billing Details</h2>

          <BillingDetails/>
      
        </div>
        <div className='basis-1/2'>
          <OrderSummery/>
        </div>
      </div>


    </div>
  )
}

export default CheckoutPage