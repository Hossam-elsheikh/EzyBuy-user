import React from 'react'
import { Container } from 'react-bootstrap'
import ProductImgs from '../Components/Reusable/ProductImgs/ProductImgs'
import ProdSpecs from '../Components/Reusable/ProdSpecs/ProdSpecs'
import CustomerReview from '../Components/Reusable/CustomerReview/CustomerReview'
import ProductDetails from '../Components/Reusable/ProductDetails/ProductDetails'

const SingleProductPage = () => {
  return <>

<Container>
  <ProductImgs/>
  <ProductDetails/>
  </Container>
   {/*  ------------------ */}
   <Container>
    <ProdSpecs/>
   </Container>

   {/* ---------------------- */}

<Container>
  <CustomerReview/>
</Container>
</>
}

export default SingleProductPage