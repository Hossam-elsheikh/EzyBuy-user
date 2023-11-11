import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((data) => data.cart.items);
  return (
    <div className="container-fluid row pt-5">
      <div className="col-12 col-md-6 container-fluid">
        <h3>Payment</h3>
        
      </div>
      <div className="col-12 col-md-4 container-fluid border px-3 py-2 border-1 ">
        <h3 className="text-center">Order Details</h3>
        <hr />
        <div className="d-flex justify-content-between px-3">
          <h6>
            Subtotal
            <span className="text-body-secondary ms-1">
              (
              {cart.reduce(
                (accumulator, currentValue) =>
                  accumulator + currentValue.quantity,
                0
              )}{" "}
              item)
            </span>
          </h6>
          <p>
            $
            {cart.reduce((accumulator, currentValue) => {
              let total =
                accumulator + currentValue.price * currentValue.quantity;
              return Math.round((total + Number.EPSILON) * 100) / 100;
            }, 0)}
          </p>
        </div>
        <div className="d-flex justify-content-between px-3">
          <p className="text-body-secondary" style={{ fontSize: 13 }}>
            Shipping
          </p>
          <span className="text-success">Free</span>
        </div>

        <div className="mt-2 d-flex justify-content-between  px-3">
          <h6>Taxes</h6>
          <p>0.00</p>
        </div>

        <hr className="text-body-secondary " />

        <div className="mt-2 d-flex justify-content-between px-3">
          <h6>Estimated total</h6>
          <h6>
            $
            {cart.reduce((accumulator, currentValue) => {
              let total =
                accumulator + currentValue.price * currentValue.quantity;
              return Math.round((total + Number.EPSILON) * 100) / 100;
            }, 0)}
          </h6>
        </div>
        <hr className="text-body-secondary " />
        <span class="badge bg-success">Arrives by 3rd Oct at 07:30 pm to Address : customer address</span>

        <div className="text-center mt-3">
          <Link to="/checkout">
            <button
              className="btn btn-dark rounded-4   "
              style={{ width: "100%" }}
            >
              Process Your Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
