import React, { useEffect, useState } from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
import ImgsTextCard from "../Components/Reusable/ImgsTextCard/ImgsTextCard";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import { ColorRing } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
const KidsPage = () => {
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
                            id={product._id}
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
                            id={product._id}

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
                            id={product._id}

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

export default KidsPage;