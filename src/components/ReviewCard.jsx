import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,feedback,rating}) => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={imgURL} alt={customerName} className="rounded-full w-[120px] h-[120px] object-cover" />
            <p className='info-text mt-4 text-center max-w-sm'>{feedback}</p>
            <div className='flex flex-row gap-4 mt-2 '>
                <img src={star} alt="star rating" width={24} height={24} className='object-contain m-0'/>
                <p className='text-lg text-slate-500'>({rating})</p>
            </div>
            <h3 className='text-2xl font-bold  mt-2'>{customerName}</h3>

        </div>
    )
}

export default ReviewCard