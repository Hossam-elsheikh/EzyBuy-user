<<<<<<< HEAD
=======
import React, { useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988
import ImgsTextCard from "../Components/Reusable/ImgsTextCard/ImgsTextCard";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
import React, { useContext, useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import { ColorRing } from "react-loader-spinner";
import { LangContext } from '../context/LangContext'
import DropDownCat from '../Components/Reusable/DropDownCat/DropDownCat'
import CarouselElem from '../Components/Reusable/CarouselElem/CarouselElem'

const KidsPage = () => {
<<<<<<< HEAD
  const { lang, dir } = useContext(LangContext)
  const allProducts = useSelector((data) => data.products.products)
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState('')
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch()
  function getProducts() {
    dispatch(productsAction('Kids'))
  }
  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts)
    }
  }, [isLoading])
  function filterHandler(t) {
    setFilter(t)
  }

  return (
    <>
      <div>
        <div className="row">
          {products?.map(prd => <div className="col-md-2">
            <CirCatCont name={prd.title.toString().split(' ').splice(0, 2).join(' ')} image={prd.images} />
          </div>
          )}

          <div className='col-12 d-flex row' >
            <div style={dir == 'rtl' ? { borderLeft: '1px solid gray' } : { borderRight: '1px solid gray' }} className={`col-3 mt-4  border-${dir == 'rtl' ? 'left' : 'right'}`}>
              {products?.map(prd => <DropDownCont sections={prd.sections} image={prd?.images} name={prd.title.toString().split(' ').splice(0, 2).join(' ')} />)}
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
                    colors={['black', 'black', "black", 'black', 'black']}
                  />
                </div>
                :
                <div className='col-9 d-flex flex-wrap gap-3 justify-content-center'>
                  {products.length > 0 ? products.map((product) => <CarouselElem
                    src={product.images[0]}
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    arTitle={product.ar_title}
                    id={product._id}
                    retailer_id={product.retailer_id}
                    status='pending'
                  />) : <h3>{lang === 'en' ? "There's no Products Here" : 'لا يوجد منتجات في هذا القسم'}</h3>}

                  <ImgsTextCard />
                  <h5 className="ms-3">shop toys by age</h5>
                  <div className="row d-flex justify-content-evenly">
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-9be5/k2-_82eed551-be88-4ac9-ba60-a8d10bab1150.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="2-3 years" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-123f/k2-_87d450d4-e33d-48ac-9f3b-c1bd3d5d8969.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="5-7 years" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-c2ec/k2-_b68282a3-a085-4330-83b2-d5b34612f6cc.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="8-11 years" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-2e2b/k2-_93f3d7ff-8bbf-477d-85d6-c1a5d249effb.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="+12 years" />
                  </div>
                  <hr />


                  <h5 className="font-weight-bold">Ace the school year</h5>
                  <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center  justify-content-around">
                    <CardElem image="https://i5.walmartimages.com/dfw/4ff9c6c9-7b79/k2-_940df71b-6bac-40e5-964a-73b0875b7780.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" h="it's easy 1,2,3" p="Some quick example text to build on the card title and make up the bulk of the card's content" />
                    <CardElem image="https://i5.walmartimages.com/dfw/4ff9c6c9-2620/k2-_4ecda0a0-31c1-471c-814c-02dc8ce6d31c.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF" h="for the honer wall" p="Some quick example text to build on the card title and make up the bulk of the card's content" />
                  </div>

                  <h5 className="ms-3">shop toys by age</h5>
                  <div className="row d-flex justify-content-evenly">
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-fa2b/k2-_b30491da-7276-487d-903c-9303297ee4b7.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-4677/k2-_14b56a99-9fb3-4d61-878e-bda77ca02712.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-6a8a/k2-_2e4c7fe5-b509-4f6d-a6f8-9385a5fc7b2a.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-6650/k2-_52c6ac90-2df3-4e0e-8179-ed114f832266.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-7d1a/k2-_c1cecf5b-91ac-4431-9673-6cb4222fef5e.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />
                    <CircleCat image="https://i5.walmartimages.com/dfw/4ff9c6c9-5256/k2-_4c8554bb-d4c4-49f2-972b-e1d7bdc95f1d.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" name="Trampolines" />

                  </div>
                  <ImgsTextCard />

                  <CarouselCont lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='shop packbacks' desc='Up to 65% off' />
                  <hr />
                </div>
            }
          </div>
        </div>
      </div>
    </>
  );

}
=======
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("Kids"));
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      console.log(allProducts);
    }
  }, [isLoading]);
  return (
    <>
      <div>
        {isLoading ? (
          <div className=" w-100 py-5 fs-1 d-flex justify-content-center align-items-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["black", "black", "black", "black", "black"]}
            />
          </div>
        ) : (
          <div>
            <div className="row">
              <div className="col-lg-12">
              <div className="container">
                  <h5 className="ms-3">Shop</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(0,6)
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
                </div>{" "}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <DropDownCont
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-b4be/k2-_9c1576a2-807d-410a-a27c-2900adb5eff3.v1.jpg?odnHeight=48&odnWidth=48&odnBg=FFFFFF"
                  name="Fresh Food"
                />
              </div>

              <div className="col-lg-9">
                <ImgsTextCard />
                <div className="row d-flex justify-content-evenly">
                <div className="container">
                  <h5 className="ms-3 mt-3">Shop</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(0,6)
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
                </div>{" "}
                </div>
                <hr />
                {/* <div className="mt-1"> */}
                <h5 className="font-weight-bold">Ace the school year</h5>
                <div className="d-flex flex-wrap flex-md-nowrap gap-3 align-items-center  justify-content-around">
                  <CardElem
                    image="https://i5.walmartimages.com/dfw/4ff9c6c9-7b79/k2-_940df71b-6bac-40e5-964a-73b0875b7780.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                    h="it's easy 1,2,3"
                    p="Some quick example text to build on the card title and make up the bulk of the card's content"
                  />
                  <CardElem
                    image="https://i5.walmartimages.com/dfw/4ff9c6c9-2620/k2-_4ecda0a0-31c1-471c-814c-02dc8ce6d31c.v1.jpg?odnHeight=340&odnWidth=604&odnBg=FFFFFF"
                    h="for the honer wall"
                    p="Some quick example text to build on the card title and make up the bulk of the card's content"
                  />
                  {/* </div> */}
                </div>

                <div className="row d-flex justify-content-evenly">
                <div className="container">
                  <h5 className="ms-3 mt-3">Shop</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(0,6)
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
                </div>{" "}
                </div>
                <ImgsTextCard />

                <CarouselCont
                  products={products}
                  lgCount={7}
                  mdCount={7}
                  smCount={3}
                  count={7}
                  slideCount={3}
                  headline="shop packbacks"
                  desc="Up to 65% off"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988

export default KidsPage;
