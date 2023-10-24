import React from 'react'
import { Container } from 'react-bootstrap'
import ProductImgs from '../Components/Reusable/ProductImgs/ProductImgs'
import ProdSpecs from '../Components/Reusable/ProdSpecs/ProdSpecs'
import CustomerReview from '../Components/Reusable/CustomerReview/CustomerReview'
import ProductDetails from '../Components/Reusable/ProductDetails/ProductDetails'

const SingleProductPage = () => {
  return <>

<div className="container-fluid">
<div className='row'>
  <div className="col-md-8 ">
  <ProductImgs/>
  <ProdSpecs />
  <CustomerReview/>
  </div>
  <div className="col-md-4">
  <ProductDetails/>
  </div>
</div>
</div>


</>
}

export default SingleProductPage