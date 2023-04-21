import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Invoice = () => {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });



  return (
    <>
      
      <div ref={componentRef} className='bg-[#f5f5f8] p-7'>
        <div className='flex justify-between items-end'>
          <div>
            <img className='w-[100px] h-14 object-cover mb-2' src="/images/product1.webp" alt="" />
            <p className='w-48'>1062, CK Road Store Mountain, Badda</p>
          </div>
          <div>
            <h3 className='font-bold text-xl uppercase font-space'>Invoice</h3>
          </div>
        </div>
        <div className="border-b-2 border-white my-5"></div>
        <div className='flex justify-between'>
          <div>
            <h2 className='text-xl uppercase font-space mb-2'>Md Mahir Uddin</h2>
            <p className='text-secondary mb-1'>Chikon baid, Madhupur, <br /> Tangail, Bangladesh</p>
            <p className='text-secondary'>01868944080</p>
          </div>
          <div>
            <p className='text-secondary'> <b>Invoice ID:</b> #10037 </p>
            <p className='text-secondary'> <b>Date:</b> April 17, 2023 </p>
          </div>
        </div>
        <div className="py-4 px-5 mt-8 bg-white">
          <table className='w-full'>
            <thead>
              <tr className='border bg-f1'>
                <th className='text-left py-2 px-2 '>SL</th>
                <th className='text-left py-2 px-2 '>Product Name</th>
                <th className='text-left py-2 px-2 '>Quantity</th>
                <th className='text-left py-2 px-2 '>Price</th>
                <th className='text-left py-2 px-2 '>Abount</th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b border-b_gray'>
                <td className='text-left py-3 px-2 '>1</td>
                <td className='text-left py-3 px-2 '> 	Apple Watch Series 8</td>
                <td className='text-left py-3 px-2 '> 32 </td>
                <td className='text-left py-3 px-2 '>$1254</td>
                <td className='text-left py-3 px-2 '>$1254</td>
              </tr>
              <tr className='border-b border-b_gray'>
                <td className='text-left py-3 px-2 '>1</td>
                <td className='text-left py-3 px-2 '> 	Apple Watch Series 8</td>
                <td className='text-left py-3 px-2 '> 32 </td>
                <td className='text-left py-3 px-2 '>$1254</td>
                <td className='text-left py-3 px-2 '>$1254</td>
              </tr>
            </tbody>

          </table>
        </div>

        <div className='mt-10 flex px-10'>

          <div className='flex-grow'>
            <h5 className='font-space font-semibold text-base'>Payment Method</h5>
            <p className='text-secondary uppercase'>Card</p>
          </div>
          <div className='flex-grow'>
            <h5 className='font-space font-semibold text-base'> Shipping Cost </h5>
            <p className='text-secondary uppercase'>$60</p>
          </div>
          <div className='flex-grow'>
            <h5 className='font-space font-semibold text-base'> Discount </h5>
            <p className='text-secondary uppercase'>$0.00</p>
          </div>
          <div className='flex-grow'>
            <h5 className='font-space font-semibold text-base'> Total Ammount </h5>
            <p className='uppercase text-theme_color font-semibold'>$25487.36</p>
          </div>

        </div>

        <div className='text-end mt-20'>
          <button onClick={handlePrint} className='bg-theme_color px-8 py-3 text-white font-semibold'><i className='bx bx-printer'></i> Print</button>
        </div>

      </div>
    </>

  )
}

export default Invoice