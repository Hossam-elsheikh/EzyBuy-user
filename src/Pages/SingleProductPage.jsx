import React from 'react'
import { Container } from 'react-bootstrap'

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