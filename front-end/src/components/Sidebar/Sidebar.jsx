import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';

const Sidebar = ({ show, children, setShow }) => {
  const  pathname  = useLocation();

  const ref = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => { 
    setShow(false);
  }, [pathname]);



  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-gray-300/50 duration-300 z-50 ${show ? "opacity-100 visible" : "invisible opacity-0"}`}>
      <div ref={ref} className={show ? "translate-x-0 duration-300" : "translate-x-96 duration-300"}>
        <div className='fixed top-0 right-0 min-h-screen bg-white w-[25%]  z-50 '>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Sidebar