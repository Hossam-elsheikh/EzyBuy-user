import React, { useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
import instance from "../axiosConfig/instance";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import { ColorRing } from "react-loader-spinner";
const GroceryPage = () => {
  const allProducts = useSelector((data)=> data.products.products)
  const [products,setProducts] = useState([])
  const isLoading = useSelector((state)=> state.products.isLoading);
  const dispatch = useDispatch()
  function getProducts(){
    dispatch(productsAction('Grocery'))
  }
  useEffect(()=>{
    getProducts()
  },[])
  useEffect(()=>{
    if(allProducts){
      setProducts(allProducts)
    }
  },[isLoading])
  
  return (
    <>
      <div >
        {
          isLoading ?
          <div className=" w-100 py-5 fs-1 d-flex justify-content-center align-items-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
          :
        <div className="row">
          <div className="col-lg-3">
          <DropDownCont image="https://i5.walmartimages.com/dfw/4ff9c6c9-f754/k2-_ae5145df-fcf4-4bd2-9512-3e6078153722.v1.jpg?" name="Fresh Food"/>
          </div>
          <div className="col-lg-9">
          <CirCatCont name="Shop groceries" image="https://i5.walmartimages.com/dfw/4ff9c6c9-b07e/k2-_a32048d4-a2ce-479a-84ec-bdee70018dee.v1.jpg"/>
          <hr/>
          <CirCatCont name="Shop essentials" image="https://i5.walmartimages.com/dfw/4ff9c6c9-b2e6/k2-_c4f04095-331e-4941-8c8e-9395dd2d9e45.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" />
          <hr/>
          <CarouselCont products={products} lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CardCont/>
          <hr/>
          <CarouselCont products={products} lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CarouselCont products={products} lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CardCont/>
          </div>
        </div>
        }
      </div>
    </>
  );
};

export default GroceryPage;
