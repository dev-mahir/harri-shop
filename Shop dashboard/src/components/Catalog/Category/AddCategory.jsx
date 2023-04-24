
import { useState } from 'react';
import Button from '../../Button/Button';
import { toast } from 'react-toastify';
import { useAddCategoryMutation } from '../../../redux/CategorySlice';
import axios from 'axios'




const AddCategory = ({ setShow, ref }) => {
  const [addCategory, { isLoading, isError, isSuccess }] = useAddCategoryMutation();

  const [imgPreveiw, setImgPreview] = useState(null);
  const [input, setInput] = useState({
    name: "",
    photo: ""
  });

  const handlePhotoChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      photo: e.target.files[0]
    }))
    setImgPreview(URL.createObjectURL(e.target.files[0]))
  }


  const handleAddCat = (e) => {
    e.preventDefault();
    if (!input.name || !input.photo) {
      toast.error("All fields are required");
    } else {


      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("photo", input.photo);
      addCategory(formData);
    }
  }
  


  return (
    <div className='_modal-wrapper'>
      <div ref={ref} className='_card _modal-body'>
        <div className='flex justify-between items-center border-b border-gray-200 pb-2 mb-6'>
          <h3 className='font-space'>Add Category</h3>
          <button onClick={() => setShow(false)}><i className='text-xl bx bx-x'></i></button>
        </div>
        <form onSubmit={handleAddCat}>
          <div className='mb-3'>
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={input.name} onChange={(e) => setInput({ ...input, name: e.target.value })} placeholder='Enter category name' />
          </div>
          <div className='mb-3'>
            <label htmlFor="">Image</label>
            <input type="file" name='photo' onChange={handlePhotoChange} />
          </div>
          <Button btnName="Submit" className="py-2" />
        </form>
        {imgPreveiw && <div className='border border-b_gray rounded-md overflow-hidden inline-block p-1 mt-3'>
          <img className='h-40 object-cover rounded-md' src={imgPreveiw} alt="" />
        </div>}
      </div>
    </div>
  )
}

export default AddCategory;