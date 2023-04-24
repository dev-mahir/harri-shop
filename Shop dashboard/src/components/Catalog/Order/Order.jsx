import { useGetProductQuery } from '../../../redux/productSlice';
import Button from '../../Button/Button';

const Order = () => {
  const { isloading, data, isSuccess } = useGetProductQuery();

  console.log(data);

  if (isloading) return "Loading.....";


  if (isSuccess) {
    return (
      <div>
        <div className="_card">
          <div className='flex items-center justify-between'>
            <h3 className='font-space'>Order</h3>
            <Button
              btnName="Download All Orders"
            />
          </div>
        </div>
        <div className="_card flex mt-5 gap-x-5">
          <input type="text" placeholder='Search order by invoice id' />

        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-5 _card">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>

                <th scope="col" className="px-6 py-3">
                  INVOICE NO
                </th>
                <th scope="col" className="px-6 py-3">
                  order time
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer name
                </th>
                <th scope="col" className="px-6 py-3">
                  Method
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
                <th scope="col" className="px-6 py-3">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) =>
                <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">

                  <td className="px-6 py-4  whitespace-nowrap ">
                    <img src={item.photo} alt="" />
                  </td>
                  <td className="px-6 py-4  whitespace-nowrap ">
                    {item.name}
                  </td>
                  <td className="px-6 py-4">
                    {item.color}
                  </td>
                  <td className="px-6 py-4">
                    {item.category}
                  </td>
                  <td className="px-6 py-4">
                    {item.price}
                  </td>
                  <td className="px-6 py-4">
                    <p className='bg-yellow-400 px-2 text-center rounded-full text-xs font-medium text-yellow-700'>Pending</p>
                  </td>
                  <td className="px-6 py-4">
                    <select name="" id="" className='py-1 w-auto'>
                      <option value="">Pending</option>
                      <option value="">Processing</option>
                      <option value="">Deliverd</option>
                      <option value="">Cancel</option>
                    </select>
                  </td>

                  <td className="flex items-center px-6 py-4 space-x-3">
                    <button title='Print invoice' className="font-medium text-blue-600  hover:underline">
                      <i className='bx bx-printer text-xl text-green-800'></i>
                    </button>
                    <button title='View invoice'><i className='bx text-xl text-green-800 bx-zoom-in'></i></button>
                  </td>
                </tr>

              )}
            </tbody>
          </table>
        </div>





      </div>
    )
  }


}

export default Order;