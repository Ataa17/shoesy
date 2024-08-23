import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='hover:bg-blue-50  hover:border-blue-300 border-1  border-transparent transition-colors ease-in-out duration-500 flex flex-col m-1 p-5 rounded-2xl '>
        <div className='object-contain'><img src={product.imgURL} alt={product.name} /></div>
        <div className='flex flex-col mt-4 ml-1 gap-2 justify-start'>
            <h2 className='font-bold text-2xl leading-normal'>{product.name}</h2>
            <h2 className='text-lg text-blue-700 font-semibold'>{product.price}</h2>
        </div>
    </div>
  )
}

export default ProductCard