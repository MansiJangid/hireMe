function Button({children, onClickHandler}){
    const baseStyle = "px-3 py-1 rounded-lg font-normal text-sm"
    const variants = {
        "primary": "bg-blue-600 text-white hover:bg-blue-700",
        "secondary": "bg-gray-300 text-gray-800 hover:bg-gray-400",
        "success": "bg-green-500 text-green-900 hover:bg-green-700 hover:text-white",
        "danger": "bg-red-600 text-white hover:bg-red-700"
    }
  return(
    <div>
      <button 
        onClick={onClickHandler}
        className={`${baseStyle} ${variants["primary"]}`}>
          
        {children}
      </button>
    </div>
  )
}

export default Button