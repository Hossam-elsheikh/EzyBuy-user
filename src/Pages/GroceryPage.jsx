import React, { useContext,useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import { ColorRing } from "react-loader-spinner";
import { LangContext } from '../context/LangContext'
import DropDownCat from '../Components/Reusable/DropDownCat/DropDownCat'
import CarouselElem from '../Components/Reusable/CarouselElem/CarouselElem'
const GroceryPage = () => {
  const {lang,dir} = useContext(LangContext)
  const allProducts = useSelector((data)=> data.products.products)
  const [products,setProducts] = useState([])
  const [filter,setFilter]= useState('')
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
  function filterHandler(t){
    setFilter(t)
  }
  return (
    <>
      <div >
      <div className='container-fluid p-4' dir={dir}>
      <div className='row'>
        <h3 onClick={()=>setFilter('')} style={{cursor:'pointer'}}>{lang ==='en'? (products.cat_title)?.toUpperCase(): products.ar_title}</h3>
          <div className='col-12 d-flex row' >
            <div style={dir =='rtl'?{borderLeft:'1px solid gray'}:{borderRight:'1px solid gray'}} className={`col-3 mt-4  border-${dir=='rtl'?'left':'right'}`}>
               {products?.map(prd=><DropDownCont sections={prd.sections} image={prd?.images} name={prd.title.toString().split(' ').splice(0,2).join(' ')}/>)}
            </div>
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
              colors={['black','black',"black",'black', 'black']}
            />
          </div>
          :
<div className='col-9 d-flex flex-wrap gap-3 justify-content-center'>
              {products.length > 0 ?products.map((product) => <CarouselElem 
              src={product.images[0]}
              title={product.title}
              price={product.price}
              rating={product.rating}
              arTitle= {product.ar_title}
              id={product._id}
              retailer_id={product.retailer_id}
              status = 'pending'
              /> ): <h3>{lang==='en'?"There's no Products Here":'لا يوجد منتجات في هذا القسم'}</h3>}
            </div>
        }
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default GroceryPage;
