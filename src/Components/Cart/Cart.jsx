import { useState } from "react";

import style from "./Cart.module.css";
import { useSelector } from "react-redux";
export default function Cart() {
  const [isDropdownOpen, setisDropdownOpen] = useState("none");
  const cart = useSelector((data)=> data.cart.items)
  console.log(cart);
  const [changeIcon, setChangeIcon] = useState("down");
  let [counter, setCounter] = useState(0);
  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === "none" ? "inline" : "none");
    setChangeIcon(changeIcon === "down" ? "up" : "down");
  };

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function decreaseCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h4>
        Cart
        <span className="ms-1 text-body-secondary ">({cart.length} item)</span>
      </h4>
      <section>
        <div className="row d-flex justify-content-between position-relative">
          <div className="col-md-8 ">
            <div className="mt-4">
              <div>
                <span style={{ fontSize: "22px" }} className="d-flex ">
                  <p className="mt-2">
                    <span className="me-2">
                      <img
                        src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"
                        alt="icon image"
                      />
                    </span>
                    Pickup and delivery option
                  </p>
                  <i
                    className={`fas fa-chevron-${changeIcon} mt-3 ms-3 `}
                    onClick={toggleDropdown}
                    aria-expanded={isDropdownOpen}
                  ></i>
                </span>
                <ul
                  className={` ${style.c} border border-white`}
                  style={{ display: `${isDropdownOpen}` }}
                >
                  <li className="">
                    <div className="row">
                      <div className="col-md-4 ">
                        <button
                          className=" w-100 btn border border-2 border-black py-3 "
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Shipping"
                              src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="fw-bold fs-6">Shipping</div>
                          <div className=" text-body-secondary">Available</div>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          disabled="true"
                          className="w-100 btn border border-1 border-black  py-3  "
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Pickup"
                              src="https://i5.walmartimages.com/dfw/4ff9c6c9-d610/k2-_d157e508-3c5c-4c97-b344-51406648661e.v1.svg"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div>Pickup</div>
                          <div>Not available</div>
                        </button>
                      </div>

                      <div className="col-md-4">
                        <button
                          disabled="true"
                          className="w-100 btn border border-1 border-black  py-3"
                          type="button"
                        >
                          <div>
                            <img
                              alt="intent image for Delivery"
                              src="https://i5.walmartimages.com/dfw/4ff9c6c9-db63/k2-_08c72d67-7046-4b24-919e-7b5c945ba85d.v1.svg"
                              width="40"
                              height="40"
                            />
                          </div>
                          <div className="">Delivery</div>
                          <div>Not available</div>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-column p-4 ">
              {cart.map((product, index) => <div className={`row ${style.cartItem}`} key={index}>
                <div className="d-flex align-items-center col-5">
                  <img className="m-2" src={product.thumbnail}  />
                  <div>
                    <h6>{product.title}</h6>
                  </div>
                </div>
                  <div className="d-flex flex-column align-items-center col-3">
                    <h4>Price</h4>
                    <p>${product.price}</p>
                  </div>
                  <div className="d-flex flex-column align-items-center col-3">
                    <h4>Quantity</h4>
                    <div className={style.quantity}>
                        <input type="number" defaultValue={product.quantity}/>
                    </div>
                  </div>
              </div>)}
            </div>
          </div>

          <div
            className={`col-md-4 py-2 shadow  border border-1 rounded-4 mt-5   ${style.col_4}`}
          >
            <div className="text-center mt-2">
              <button
                className="btn btn-primary rounded-4   "
                style={{ width: "95%" }}
              >
                Continue to checkout
              </button>
            </div>

            <hr className="text-body-secondary " />

            <div className="ms-2 mt-5">
              <div className="d-flex justify-content-between">
                <h6>
                  Subtotal
                  <span className="text-body-secondary ms-1">(1 item)</span>
                </h6>
                <p>$249.90</p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="text-body-secondary" style={{ fontSize: 13 }}>
                  Shipping
                </p>
                <span className="text-success">Free</span>
              </div>

              <div className="mt-4 d-flex justify-content-between ">
                <h6>Taxes</h6>
                <p>Calculated at checkout</p>
              </div>

              <hr className="text-body-secondary " />

              <div className="mt-5 d-flex justify-content-between">
                <h6>Estimated total</h6>
                <h6>$249.90</h6>
              </div>

              <div className="text-end mt-5">
                <img
                  className=""
                  width={40}
                  src="https://cdn-assets.affirm.com/images/black_logo-white_bg.jpg"
                  alt=""
                />
                <p className=" mt-2" style={{ fontSize: 13 }}>
                  Monthly payments available for eligible items.
                </p>
                <button
                  className={`border-0 mt-2  text-decoration-underline  ${style.btun}`}
                >
                  Continue with Affirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
