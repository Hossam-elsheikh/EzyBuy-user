import React from 'react'
import CirCatCont from '../Components/Reusable/CirCatCont/CirCatCont'
import DropDownCont from '../Components/Reusable/DropDownCont/DropDownCont'
import ImgsTextCard from '../Components/Reusable/ImgsTextCard/ImgsTextCard'
import CardElem from '../Components/Reusable/CardElem/CardElem'
import CarouselCont from '../Components/Reusable/CarouselCont/CarouselCont'
const FashionPage = () => {
  return (
    <>
    <div className='container'>
      <ImgsTextCard/>
      <CirCatCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-6aca/k2-_02a73821-bc47-41f4-b8b3-b0e7e86817d7.v1.jpg?"/>
      <hr className='mb-5 text-muted '/>
      <div className="row">
        <div className='col-lg-3'>
          <DropDownCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-b4be/k2-_9c1576a2-807d-410a-a27c-2900adb5eff3.v1.jpg?" name="Women"/>
        </div>
       <div className='col-lg-9'>
       <ImgsTextCard/>
       <ImgsTextCard/>
       <div className='d-flex justify-content-evenly'>
       <div className='col-lg-4 mt-5'>
        <CardElem/>
       </div>
       <div className='col-lg-4 mt-5'>
        <CardElem/>
       </div>
       </div>
       <ImgsTextCard/>
       <CirCatCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-c5c6/k2-_0b85c34b-52ef-45dc-8658-d829b88b7350.v1.jpg?"/>
       <CarouselCont lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
       <ImgsTextCard/>
       <hr/>
       <CirCatCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-5109/k2-_8010c997-9b77-4ef9-a650-38e41bfb41e7.v1.jpg?"/ >
        <hr/>
        <CirCatCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-8caa/k2-_354199b1-25b3-4948-b7cf-7c8d38252f0d.v1.jpg?"/ >
        <hr/>

       </div>
      </div>
    </div>
    </>
  )
}

export default FashionPage