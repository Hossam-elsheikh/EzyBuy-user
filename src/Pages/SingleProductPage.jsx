import React from 'react'
import { Container } from 'react-bootstrap'
import ProductImgs from '../Components/Reusable/ProductImgs/ProductImgs'
import ProdSpecs from '../Components/Reusable/ProdSpecs/ProdSpecs'
import CustomerReview from '../Components/Reusable/CustomerReview/CustomerReview'
import ProductDetails from '../Components/Reusable/ProductDetails/ProductDetails'

const SingleProductPage = () => {
  return <>


<div className='row 'style={{width:"93%"}}>
  <div className="col-md-8 " >
  <ProductImgs/>
  </div>
  <div className="col-md-4">
  <div >
  <ProductDetails/>
  </div>
  </div>
  <div className="col-md-8">
  <ProdSpecs />
  <CustomerReview/>
  </div>
</div>

</>
}

export default SingleProductPage