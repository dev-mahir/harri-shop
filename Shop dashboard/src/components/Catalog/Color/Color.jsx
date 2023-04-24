import { useState } from 'react';
import useModal from '../../../hooks/useModal';
import { useDeleteColorMutation, useGetColorQuery } from '../../../redux/colorSlice';
import Button from '../../Button/Button';
import DeleteModal from '../../Modal/DeleteModal';
import AddColor from './AddColor';
import EditColor from './EditColor';



const Color = () => {
  const { isLoading, data, isSuccess } = useGetColorQuery();
  const [deleteColor] = useDeleteColorMutation();
  const [ref, show, setShow] = useModal(false);
  const [showModal, setShowModal] = useState({
    id: "",
    type: ""
  });
  const [showEditModal, setShowEditModal] = useState(false);



  const handleDelete = () => {
    deleteColor(showModal.id);
    setShowModal(false)
  }

  const handleEdit = () => {
    deleteColor(showModal.id);
    setShowModal(false)
  }

  if (isLoading) return "Loading...";

  if (isSuccess) {
    return (
      <div>
        <DeleteModal
          show={showModal.type === 'delete'}
          hide={setShowModal}
          handleDelete={handleDelete}
          title="Delete color"
        />

        <EditColor
          show={showModal.type === 'edit'}
          hide={setShowEditModal}
          handleEdit={handleEdit}
          title="Delete color"
        />

        {show && <AddColor ref={ref} setShow={setShow} />}

        <div className="_card">
          <div className='flex items-center justify-between'>
            <h3 className='font-space'>Color</h3>
            <Button
              btnName="Add Color"
              handleClick={() => setShow(!show)}
            />
          </div>
        </div>
        <div className="_card mt-5">
          <input type="text" placeholder='Search tag' />
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
                  <td className="px-6 py-4  whitespace-nowrap ">
                    {item.name}
                  </td>
                  <td className="flex items-center px-6 py-4 space-x-3">
                    <button onClick={() => setShowModal({ id: item._id, type: "edit" })} className="font-medium text-blue-600  hover:underline">
                      <i className='bx bx-edit text-xl text-green-800'></i>
                    </button>
                    <button onClick={() => setShowModal({ id: item._id, type: "delete" })} ><i className='bx text-xl text-theme_color bx-trash'></i></button>
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

export default Color;