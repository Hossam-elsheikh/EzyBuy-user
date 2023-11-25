import React, { useEffect, useState } from "react";
import instance from "../axiosConfig/instance";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import ImgsTextCard from "../Components/Reusable/ImgsTextCard/ImgsTextCard";
import CardElem from "../Components/Reusable/CardElem/CardElem";
import { ColorRing } from "react-loader-spinner";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import { useDispatch, useSelector } from "react-redux";
import { productsAction } from "../store/slices/productsSlice";
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
const FashionPage = () => {
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("fashion"));
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
          <div className="container">
            <ImgsTextCard />
            <div className="container">
              <h5 className="ms-3 mt-3">Shop</h5>
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
            </div>{" "}
            <hr className="mb-5 text-muted " />
            <div className="row">
              <div className="col-lg-3">
                <DropDownCont
                  image="https://i5.walmartimages.com/dfw/4ff9c6c9-b4be/k2-_9c1576a2-807d-410a-a27c-2900adb5eff3.v1.jpg?"
                  name="Women"
                />
              </div>
              <div className="col-lg-9">
                <ImgsTextCard />
                <ImgsTextCard />
                <div className="d-flex flex-column flex-md-row  justify-content-evenly">
                  <div className="col-lg-4 mt-5">
                    <CardElem
                      image="https://i5.walmartimages.com/dfw/4ff9c6c9-b4eb/k2-_15bec48b-7d03-4932-8970-b7901626b2a0.v1.jpg"
                      h="Gifts under $15"
                      p="Holiday pro tip: one for them, one for you."
                    />
                  </div>
                  <div className="col-lg-4 mt-5">
                    <CardElem
                      image="https://i5.walmartimages.com/dfw/4ff9c6c9-f786/k2-_3327339d-111f-4b98-b6cc-c16dc1f169f3.v1.jpg"
                      h="Gifts under $25"
                      p="Get what they really want, for way less."
                    />
                  </div>
                </div>
                <ImgsTextCard />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(9, 13)
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
                <CarouselCont
                  products={products}
                  lgCount={7}
                  mdCount={7}
                  smCount={3}
                  count={7}
                  slideCount={3}
                  headline="Top Deals"
                  desc="Up to 65% off"
                />{" "}
                <ImgsTextCard />
                <hr />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(13, 19)
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
                <hr />
                <div className="container">
                  <h5 className="ms-3">Shop groceries</h5>
                  <div className="row d-flex justify-content-evenly">
                    {products && products.length > 0 ? (
                      products
                        .slice(19, 25)
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
                <hr/>
                <div className="container">
                <h5 className="ms-3">Shop groceries</h5>
                <div className="row d-flex justify-content-evenly">
                  {products && products.length > 0 ? (
                    products
                      .slice(25, 31)
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
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FashionPage;