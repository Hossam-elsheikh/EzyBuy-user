import React from 'react'
import CarouselCont from '../Reusable/CarouselCont/CarouselCont'

const Reorder = () => {
  return (
    <div className='container d-flex flex-column gap-5 p-0 p-md-5'>
    <div className='container d-flex flex-column gap-3 align-items-center flex-md-row'>
      <img style={{width:'100px'}} src='https://i5.walmartimages.com/dfw/4ff9c6c9-743d/k2-_16fa2300-0a01-473e-9c05-6fe7951a4adc.v1.png' />
      <p>Your essentials will show up here for quick and easy reordering</p>
    </div>
    <hr/>
    <div className='hide d-flex flex-column'>
      <h4>Build You Cart</h4>
      <CarouselCont  count={4} slideCount={2}/>
    </div>
    </div>
  )
}

export default Reorder