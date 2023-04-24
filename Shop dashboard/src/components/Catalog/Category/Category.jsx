import useModal from '../../../hooks/useModal';
import { useGetCategoryQuery } from '../../../redux/CategorySlice';
import Button from '../../Button/Button';
import AddCategory from './AddCategory';

const Category = () => {
  const { isLoading, data, isError, isSuccess } =  useGetCategoryQuery();
  const [ref, show, setShow] = useModal(false);


  if (isLoading) return "Loading..."
  if (isSuccess) { 
 return (

    <div>

      {show && <AddCategory ref={ref} setShow={setShow} />}

      <div className="_card">
        <div className='flex items-center justify-between'>
          <h3 className='font-space'>Category</h3>
          <Button
            btnName="Add category"
            handleClick={() => setShow(!show)}
          />
        </div>
      </div>
      <div className="_card mt-5">
        <input type="text" placeholder='Search category' />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-5 _card">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
         <tbody>
           
           {data.map((item, index) => 
             <tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
              <td  className="px-6 py-4  whitespace-nowrap ">
                 {item.name}
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

export default Category