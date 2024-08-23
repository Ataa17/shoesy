import React from 'react'
import { Button } from '../components'
import { shoe8 } from '../assets/images'

const Quality = () => {
    return (
        <section id='about-us' className='flex max-lg:flex-col flex-row w-full   p-2 justify-between items-center gap-8'>
            <div className='flex flex-1 flex-col'>
                <h1 className='text-8xl max-sm:text-7xl max-sm:leading-8xl font-bold '>
                        About 
                    
                    <span className='text-blue-700 inline-block pl-4'> Shoesy</span>
                </h1>
                <p className='mt-6 mb-14 text-lg leading-8 sm:max-w-s info-text'>
                Shoesy is known for its high-quality footwear, combining style, comfort, and durability.
                 With premium materials and careful craftsmanship,
                  their shoes are built to last and meet customer expectations.
                   Whether for daily wear or special occasions,
                    Shoesy offers reliable and stylish options for all tastes.
                </p>
                <p className='text-lg leading-8 sm:max-w-s info-text'> choose the best , choose Shoesy !</p>
                <div className='mt-10  flex max-md:justify-center justify-start'>                <Button label="Contact us"  />
</div>
            </div>
            <div className='flex flex-1 justify-center items-center'>
                <img src={shoe8} alt="big shoe" />
            </div>
        </section>)
}

export default Quality