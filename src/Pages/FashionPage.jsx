import React, { useContext, useEffect, useState } from 'react'
import CircleCat from '../Components/Reusable/CircleCat/CircleCat'
import { useDispatch, useSelector } from 'react-redux'
import { categoriesAction } from '../store/slices/categoriesSlice'
import { LangContext } from '../context/LangContext'
import DropDownCat from '../Components/Reusable/DropDownCat/DropDownCat'
import { productsAction } from '../store/slices/productsSlice'
import CarouselElem from '../Components/Reusable/CarouselElem/CarouselElem'
import { ColorRing } from "react-loader-spinner";

const FashionPage = () => {
  const [products,setProducts] = useState([])
  const data = useSelector(data => data.category.category)
  const isLoading = useSelector((state)=> state.products.isLoading);
  const [filter,setFilter]= useState('')
  let prds = useSelector(data => filter? data.products.products.filter((product)=> product.sub_category?.includes(filter)) :data.products.products)
  const {lang,dir} = useContext(LangContext)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(categoriesAction('fashion'))
    setProducts(data)
  },[data])
  useEffect(()=>{
  dispatch(productsAction('fashion'));
},[])
  function filterHandler(t){
    setFilter(t)
  }
  return (
    <div className='container-fluid p-4' dir={dir}>
      <div className='row'>
        <h3 onClick={()=>setFilter('')} style={{cursor:'pointer'}}>{lang ==='en'? products?.title?.toUpperCase(): products?.ar_title}</h3>
          <div className='col-12 d-flex row' >
            <div style={dir =='rtl'?{borderLeft:'1px solid gray'}:{borderRight:'1px solid gray'}} className={`col-3 mt-4  border-${dir=='rtl'?'left':'right'}`}>
              
              {prds?.map((prd) => {
              return <>
                <DropDownCat filter={filterHandler} sections={prd.sections} image={prd.images[0]} name={lang ==='en'? (prd?.title.toString().split(' ').splice(0,2).join(' ')): prd?.ar_title}/>
                </>}
              
              
              )}
            </div>
            {isLoading ?
          <div className=" col-9 d-flex flex-wrap gap-3 justify-content-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['black','black',"black",'black', 'black']}

            />
          </div> : 
            <div className='col-9 d-flex flex-wrap gap-3 justify-content-center'>
              {prds?.length > 0 ?prds?.map((product) => <CarouselElem 
              src={product.images[0]}
              title={product.title}
              price={product.price}
              rating={product.rating}
              arTitle= {product.ar_title}
              id={product._id}
              retailer_id={product.retailer_id}
              status = 'pending'
              /> ): <h3>{lang==='en'?"There's no Products Here":'لا يوجد منتجات في هذا القسم'}</h3>}
            </div>}
          </div>
      </div>
    </div>
    
  
  )
}

export default FashionPage