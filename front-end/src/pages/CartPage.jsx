import React from 'react'
import QuantityBtn from '../components/QuantityBtn/QuantityBtn'
import Newsletter from '../components/Newsletter/Newsletter'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <>
      <div className='container mt-10'>

        <div className='w-full bg-f1 text-left py-3 px-5'>
          <Link to="/shop" className='flex items-center gap-x-1 text-secondary'>
            Continue shopping <i className='bx text-2xl bx-reply'></i>
          </Link>
        </div>

        <div className='mt-5'>
          <div className='overflow-x-auto px-3'>
            <table className='text-center w-full'>
              <thead>
                <tr className='borderborder-b_gray'>
                  <th className='py-3 border border-b_gray'>Images</th>
                  <th className='py-3 border border-b_gray'>Product</th>
                  <th className='py-3 border border-b_gray'>Unit Price</th>
                  <th className='py-3 border border-b_gray'>Quantity</th>
                  <th className='py-3 border border-b_gray'>Total</th>
                  <th className='py-3 border border-b_gray'>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-b_gray px-5'>
                    <img src="/images/product1.webp" alt="" className='w-[120px] max-w-max h-[120px] mx-auto py-1 object-cover' />
                  </td>
                  <td className='border border-b_gray px-5'>
                    <p  className='w-32 md:w-auto text-left'> Buy super racing car. 420s</p>
                  </td>
                  <td className='border border-b_gray px-5 '>$3542</td>
                  <td className='border border-b_gray text-center  px-5'>
                    <QuantityBtn />
                  </td>
                  <td className='border border-b_gray  px-5'>$54254</td>
                  <td className='border border-b_gray  px-5'>
                    <button><i className='text-2xl bx bx-x'></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
         </div>


          <div className='px-3 md:max-w-[300px] md:ml-auto mt-14'>
            <h3 className='text-2xl font-bold leading-[30px] text-primary mb-5'>Cart Totals</h3>
            <div>
              <ul>
                <li className='flex justify-between border items-center border-b_gray px-3 py-2'>Subtotal <span className='font-medium'>$1644</span></li>
              </ul>
            </div>
            <Link to="/checkout" className='bg-theme_color block text-center  text-white font-medium mt-2 w-full py-3'> Procced to checkout </Link>

          </div>



        </div>
      </div>

      <div className="py-20">
        <Newsletter />
      </div>

    </>

  )
}

export default CartPage