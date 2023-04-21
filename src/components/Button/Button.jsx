import React from 'react'

const Button = ({ className, name, handleBtnClick , type="button"}) => {
  return (
    <button type={type} onClick={handleBtnClick} className={`bg-theme_color text-white py-3 px-8 font-space text-base font-semibold ${className}`} >{name}</button>
  )
}

export default Button;