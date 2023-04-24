import  { useEffect, useRef } from 'react'



const EditColor = ({ title, hide, show, handleDelete }) => {

  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        hide(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className={`${show ? "opacity-100 visible" : "opacity-0 invisible"} duration-300  _modal-wrapper`}>
      <div ref={ref} className={`_modal-body duration-300 ${show ? "-translate-y-0" : "-translate-y-10"}`}>
        <div className='flex justify-between items-center px-3 py-2 border-b border-b_gray'>
          <h3 className='font-space'>{title}</h3>
          <button onClick={() => hide(false)}> <i className='bx text-2xl bx-x'></i></button>
        </div>
        <p className='px-3 py-4'>Are you sure?</p>
        <div className='px-3 py-2 border-t border-b_gray'>
          <button onClick={handleDelete} className='px-5 py-1 font-space
           rounded-sm bg-theme_color text-white'>Delete</button>
        </div>
      </div>
    </div>
  )
}




export default EditColor