
const Button = ({ btnName, className, startIcon, endIcon, handleClick }) => {
  return (
    <button onClick={handleClick} className={`bg-theme_color flex items-center justify-center gap-x-3 text-white font-space px-8 rounded-sm py-[10px] hover:bg-theme_color/90 duration-300   ${className}`}>


      {startIcon}

      {btnName}

      {endIcon}
    
    
    </button>
  )
}

export default Button