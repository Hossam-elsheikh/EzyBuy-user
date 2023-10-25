import React from 'react'
import CirCatCont from '../Components/Reusable/CirCatCont/CirCatCont'
import DropDownCont from '../Components/Reusable/DropDownCont/DropDownCont'
const FashionPage = () => {
  return (
    <div className='container'>
      <CirCatCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-6aca/k2-_02a73821-bc47-41f4-b8b3-b0e7e86817d7.v1.jpg?"/>
      <hr className='mb-5 text-muted '/>
      <div className="row">
        <div className='col-lg-3'>
          <DropDownCont/>
        </div>
      </div>
    </div>
  )
}

export default FashionPage