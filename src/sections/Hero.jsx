import { arrowRight } from '../assets/icons'
import { Button,ShoeCard } from '../components'
import { shoes,statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import { useState } from 'react'

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section id="home" className="w-full  p-2 max-md:pl-3 flex md:flex-row flex-col justify-center gap-2 min-h-screen max-container ">
      <div className="relative xl:w-2/5 flex flex-col
  justify-center items-start w-full max-xl:padding-x pt-28">
        <p className='text-xl text-blue-600'>Our summer collection</p>
        <h1 className='mt-10 text-8xl max-sm:text-7xl max-sm:leading-8xl
        font-bold
        '><span className='xl:bg-white xl:whitespace-nowrap relative pr-10 z-[1]'>
            The new arrivals
          </span>
          <br />
          <span className='text-blue-700 inline-block mt-3 mr-2'> S </span>
          shoes
        </h1>
        <p className='text-blue-400 mt-6 mb-14 text-lg leading-8 sm:max-w-s'>Discover our latest collection , quality and looks , comfort and luxary</p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {
            statistics.map((stat) => {
              return (
                <div key={stat.label}>
                  <p className='font-bold text-3xl'>{stat.value}</p>
                  <p className='text-slate-500 leading-6'>{stat.label}</p>
                </div>

              )
            })
          }

        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-cover bg-center bg-blue-50'>
        <img src={bigShoeImg} alt="shoe" width={610} height={500} className="object-contain relative z-[1] duration-100" />
        <div className='absolute bottom-[-5%] flex sm:gap-6 gap-4 sm:lef-[10%] max-sm:px-6 mt-2 '>
          {
            shoes.map((shoe) => {return (
            <div key={shoe}>
                <ShoeCard 
                  imgURL={shoe}
                  changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}}
                  BigshoeImg={bigShoeImg}

                />
            </div>
            )})
          }
        </div>
      </div>

    </section>

  )
}

export default Hero