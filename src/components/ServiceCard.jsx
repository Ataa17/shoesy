import React from 'react'

const ServiceCard = ({service}) => {
  return (
    <div className='flex-1 sm:w-[360px] sm:min-w-[360px] w-full rounded-3xl shadow-lg px-10 py-16 shadow-blue-200'>
    <div className='w-11 h-11 justify-center items-center bg-blue-700 rounded-full flex hover:scale-105 ease-in-out duration-100'>
        <img src={service.imgURL} alt="icon" width={24} height={24} />
    </div>
    <h2 className='text-2xl font-bold text-blue-700 leading-normal'>{service.label}</h2>
    <p className='mt-2 text-slate-600  info-text break-words'>{service.subtext}</p>
    </div>
  )
}

export default ServiceCard