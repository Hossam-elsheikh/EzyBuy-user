import React, { useContext,useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import { ColorRing } from "react-loader-spinner";
<<<<<<< HEAD
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
=======
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
const GroceryPage = () => {
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("groceries"));
    // dispatch(productsAction("fashion"));
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      console.log(allProducts[0].images[0]);
    }
<<<<<<< HEAD
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
=======
  }, [isLoading]);

  return (
    <>
      <div>
        {isLoading ? (
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988
          <div className=" w-100 py-5 fs-1 d-flex justify-content-center align-items-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
<<<<<<< HEAD
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
=======
              colors={["black", "black", "black", "black", "black"]}
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-lg-3">
              <DropDownCont
                image="https://i5.walmartimages.com/dfw/4ff9c6c9-f754/k2-_ae5145df-fcf4-4bd2-9512-3e6078153722.v1.jpg?"
                name="Fresh Food"
              />
            </div>
            <div className="col-lg-9">
              <div className="container">
                <h5 className="ms-3">Shop groceries</h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(0, 6)
                      .map((product) => (
                        <CircleCat
                          key={product._id}
                          name={product.title.slice(0, 6)}
                          image={
                            product.images && product.images.length > 1
                              ? product.images[1]
                              : ""
                          }
                        />
                      ))
                  ) : (
                    <p>No products available</p>
                  )}
                </div>
              </div>
              <hr />
              <div className="container">
                <h5 className="ms-3">Shop groceries</h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(6,12)
                      .map((product) => (
                        <CircleCat
                          key={product._id}
                          name={product.title.slice(0, 6)}
                          image={
                            product.images && product.images.length > 1
                              ? product.images[1]
                              : ""
                          }
                        />
                      ))
                  ) : (
                    <p>No products available</p>
                  )}
                </div>
              </div>
              <hr />
              <CarouselCont
                products={products}
                lgCount={7}
                mdCount={7}
                smCount={3}
                count={7}
                slideCount={3}
                headline="Top Deals"
                desc="Up to 65% off"
              />
              <hr />
              <CardCont />
              <hr />
              <CarouselCont
                products={products}
                lgCount={7}
                mdCount={7}
                smCount={3}
                count={7}
                slideCount={3}
                headline="Top Deals"
                desc="Up to 65% off"
              />
              <hr />
              <CarouselCont
                products={products}
                lgCount={7}
                mdCount={7}
                smCount={3}
                count={7}
                slideCount={3}
                headline="Top Deals"
                desc="Up to 65% off"
              />
              <hr />
              <CardCont />
            </div>
          </div>
        )}
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988
      </div>
    </>
  );
};

export default GroceryPage;
