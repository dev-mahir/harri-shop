import React from 'react'

const OrderSummery = () => {
  return (
    <div>
      <h2 className='font-space border-b border-b_gray pb-3'>Order Summery</h2>
      <div className='mt-7'>
        <ul>
          <li className='flex text-secondary items-center justify-between border-b border-b_gray py-4'>  Apple Watch Series 8 × 36<p>$1587</p></li>

          <div className="border border-theme_color mt-6"></div>
          <li className='flex  text-secondary  items-center justify-between border-b  border-b_gray py-4'> <span className=' text-sm'>Cart Subtotal</span> $158</li>

          <li className='flex text-secondary  items-center justify-between border-b border-b_gray py-4'> <span className=' text-sm'>Shipping Cost</span> $1587</li>
          <li className='flex text-secondary  items-center justify-between border-b border-b_gray py-4'> <span className=' text-sm'>Subtotal</span> $1587</li>

          <li className='flex text-secondary  items-center justify-between border-b border-b_gray py-4'> <span className=' text-sm'>Discount</span> $158</li>

          <li className='flex text-secondary  items-center justify-between py-2'> <span className=' text-lg'>Total</span><p className='font-semibold text-lg text-theme_color'> $1587</p> </li>
        </ul>

        <div className='mt-7'>
          <h2 className='font-space text-lg border-b border-b_gray pb-1'>Payment method</h2>
          <div className='mt-3'>
            <input type="radio" name='payment_method' id='cash' /> <label htmlFor="cash" className='cursor-pointer'>Cash on delivery</label>
          </div>


          {/* bank transfer  */}
          {/* <div className='mt-3'>
            <input type="radio" name='payment_method' id='bank' /> <label htmlFor="bank" className='cursor-pointer'>Direct Bank Transfer</label>
          </div>
          <div className='mt-3 border border-b_gray'>
            <div>
              <div className='flex items-center gap-x-3'>
                <i className='text-secondary bx text-2xl bx-credit-card-alt'></i>
                <input type="text" placeholder='Card Number'/>
              </div>
              <input type="text" placeholder='' />
              <input type="text" />
            </div>
          </div> */}

        </div>
        <button className='bg-theme_color  block text-center  text-white font-medium mt-10 w-full py-3'> Place Order </button>

      </div>
    </div>
  )
}

export default OrderSummery;