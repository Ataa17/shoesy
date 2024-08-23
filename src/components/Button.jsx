import React from 'react'

const Button = ({label, iconURL}) => {
  return (
<button className='flex justify-center items-center px-7 py-4 border text-lg leading-none font-montserrat rounded-full bg-blue-500 text-white hover:bg-blue-700 ease-in-out'>
    {label}
    {
      iconURL && <img src={iconURL} alt="arrow right"  className="ml-2 w-5 h-5 " />
    }
</button>  )
}

export default Button