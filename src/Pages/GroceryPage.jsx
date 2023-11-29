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
import CircleCat from "../Components/Reusable/CircleCat/CircleCat";
const GroceryPage = () => {
  const allProducts = useSelector((data) => data.products.products);
  const [products, setProducts] = useState([]);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();
  function getProducts() {
    dispatch(productsAction("groceries"));
    // dispatch(productsAction("fashion"));
  }
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
      console.log(allProducts[0]?.images[0]);
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
      </div>
    </>
  );
};

export default GroceryPage;