import React from 'react'
import { ReviewCard } from '../components'
import{ reviews } from'../constants'

function CustomerReviews() {
  return (
    <section className='max-container'>
      <h3 className='font-bold text-5xl text-center'>
        what our <span className='text-blue-600'> Customers   </span> say ?
      </h3>
      <p className='m-auto mt-4 max-w-lg text-center info-text text-lg'>
        Hear genuine Stories from our customers around the world. 
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {
          reviews.map((review) => {
            return (<ReviewCard key={review.name} customerName={review.name}
               feedback={review.feedback} imgURL={review.imgURL} 
               rating={review.rating}/>)
          })
        }
      </div>

    </section>
  )
}

export default CustomerReviews