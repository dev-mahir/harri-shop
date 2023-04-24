import { useGetProductQuery } from '../../../redux/productSlice';
import Button from '../../Button/Button';

const Product = () => {
  const { isloading, data, isSuccess } = useGetProductQuery();

  console.log(data);

  if (isloading) return "Loading.....";


  if (isSuccess) {
    return (
      <div>
        <div className="_card">
          <div className='flex items-center justify-between'>
            <h3 className='font-space'>Products</h3>
            <Button
              btnName="Add Product"
            />
          </div>
        </div>
        <div className="_card flex mt-5 gap-x-5">
          <input type="text" placeholder='Search product' />
          <select name="" >
            <option value="">Category</option>
          </select>
          <select name="" id="">
            <option value="">Price</option>
          </select>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-5 _card">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>

                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Tag
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
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
                    Yes
                  </td>
                  <td className="px-6 py-4">
                    {item.tag}
                  </td>
                  <td className="px-6 py-4">
                    {item.price}
                  </td>
   
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <a href="#" className="font-medium text-blue-600  hover:underline">
                      <i className='bx bx-edit text-xl text-green-800'></i>
                    </a>
                    <button><i className='bx text-xl text-theme_color bx-trash'></i></button>
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

export default Product