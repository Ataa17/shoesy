import React from 'react'
import { services } from '../constants'
import { ServiceCard } from '../components'
function Services() {
  return (
<section className='max-container flex flex-1 flex-row max-md:flex-col gap-10 justify-center flex-wrap'>
  { services.map((service) => {

     return( <ServiceCard service={service} key={service.label} />)
  })}
</section>  )
}

export default Services