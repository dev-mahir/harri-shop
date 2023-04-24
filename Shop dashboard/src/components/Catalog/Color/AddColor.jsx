
import { useState } from 'react';
import Button from '../../Button/Button';
import { toast } from 'react-toastify';
import { useAddBrandMutation } from '../../../redux/brandSlice';
import { useAddColorMutation } from '../../../redux/colorSlice';



const AddColor = ({ setShow, ref }) => {
  const [addColor, { isLoading, isError, isSuccess }] = useAddColorMutation();

  const [input, setInput] = useState({
    name: ""
  });




  const handleAddCat = (e) => {
    e.preventDefault();
    if (!input.name) {
      toast.error("All fields are required");
    } else {
      addColor(input);
      setInput({ name: "" });
      setShow(false)
    }
  }



  return (
    <div className='_modal-wrapper'>
      <div ref={ref} className='_card _modal-body'>
        <div className='flex justify-between items-center border-b border-gray-200 pb-2 mb-6'>
          <h3 className='font-space'>Add Color</h3>
          <button onClick={() => setShow(false)}><i className='text-xl bx bx-x'></i></button>
        </div>
        <form onSubmit={handleAddCat}>
          <div className='mb-3'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={input.name} onChange={(e) => setInput({ name: e.target.value })} placeholder='Enter color name' />
          </div>
          <Button btnName="Submit" className="py-2" />
        </form>

      </div>
    </div>
  )
}




export default AddColor;