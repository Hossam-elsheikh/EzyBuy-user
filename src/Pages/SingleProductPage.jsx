import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ProductImgs from '../Components/Reusable/ProductImgs/ProductImgs'
import ProdSpecs from '../Components/Reusable/ProdSpecs/ProdSpecs'
import CustomerReview from '../Components/Reusable/CustomerReview/CustomerReview'
import ProductDetails from '../Components/Reusable/ProductDetails/ProductDetails'
import { useParams } from 'react-router-dom'
import instance from '../axiosConfig/instance'
import { useQuery } from 'react-query'
import { ColorRing } from 'react-loader-spinner'

const SingleProductPage = () => {
  const [product, setProduct] = useState([])

  let {id} = useParams()
  async function getProductDetails(id){
    try{
      let {data} = await instance.get(`product/details/${id}`)
      setProduct(data?.data) 

      return data;
    }catch(err){
      console.log(err);
      return err.messag
    }

  }
   let {isLoading , isError , data}= useQuery('getProductDetails',()=>getProductDetails(id),{
    cacheTime: 50000,
    refetchOnMount: true,
    staleTime: 30000,
    refetchInterval: 10000,
    // enabled:=true
  });

  return <>
  {
  
  isLoading?
    <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' >
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
    />
  </div> :
<div className='row 'style={{width:"93%"}}>
  <div className="col-md-8 " >
  <ProductImgs img = {product.images} />
  </div>
  <div className="col-md-4">
  <div >
  <ProductDetails prd = {product}/>
  </div>
  </div>
  <div className="col-md-8">
  <ProdSpecs dis = {product.description} />
  <CustomerReview rate = {product.rating}/>
  </div>
</div>

  }
</>
}

export default SingleProductPage