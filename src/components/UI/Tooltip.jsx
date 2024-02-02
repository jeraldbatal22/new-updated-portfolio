const Tooltip = ({ children, text }) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="hidden text-center group-hover:block absolute bg-gray-800 text-white p-2 rounded-md bottom-full -left-1/2 transform translate-x-1/2">
          {text}
        </div>
      </div>
    </div>
  )
}

export default Tooltip