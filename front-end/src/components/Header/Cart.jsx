// import React from 'react'
// import { Link } from 'react-router-dom'

// const Cart = ({hide}) => {
//   return (
//     <div className='fixed top-0 right-0 min-h-screen bg-white w-[25%]  z-50 '>
      
//       <div className='px-5 py-3 flex items-center justify-between border-b border-b_gray _shadow-sm'>
//         <h3 className='uppercase text-base font-medium'>Shopping cart</h3>
//         <button onClick={() => hide(false)} className='text-3xl flex items-center'> <i className=' bx bx-x'></i></button>
//       </div>
//       <div className='flex  items-center flex-col min-h-[65vh] justify-center gap-y-3'>
//         <img src="/images/empty-cart.webp" alt="" />
//         <span className='text-primary text-base'>Your Cart is empty</span>
//         <Link to="/shop" className='text-center bg-gray-100 hover:bg-theme_color hover:text-white transition duration-300 px-5 py-2 font-semibold text-primary'>Go to Shop</Link>
//       </div>
//       <div className='flex flex-col gap-5  border-t  border-b_gray pt-3'>
//         <div className='flex justify-between items-center px-5'>
//           <h3 className='text-lg font-semibold text-primary'>Subtotal</h3>
//           <span className='text-xl font-semibold text-theme_color'>$0.00</span>
//         </div>
//         <div className='px-5'>
//           <button className='bg-gray-100 w-full py-2 font-semibold text-primary hover:bg-theme_color hover:text-white duration-300'>View Cart</button>
//           <button className='border-b_gray border mt-3 w-full py-2 font-semibold text-primary hover:bg-theme_color hover:text-white duration-300'>Checkout</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Cart


import React from 'react'

const Cart = () => {
  return (
    <div>Cart</div>
  )
}

export default Cart