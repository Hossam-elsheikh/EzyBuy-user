import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useFormik } from "formik/dist";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../axiosConfig/instance";
import toast, { Toaster } from "react-hot-toast";
import { cartAction } from "../../store/slices/cartSlice";
const Checkout = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const cart = useSelector((data) => data.cart.items);
  const stripe = useStripe();
  const element = useElements();
  const [visaPay, setVisaPay] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("Pay");

  async function emptyCart() {
    try {
      await axios.delete(`http://localhost:3333/customer/cart`, {
        headers: {
          authorization: localStorage.getItem("customerToken"),
        },
      });
      dispatch(cartAction());
    } catch (err) {
      toast.error(err.message);
    }
  }
  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleCardChange = (e) => {
    if (e.error) return setError(e.error.message);
    setError("");
  };

  let totalPrice = cart.reduce((accumulator, currentValue) => {
    let total = accumulator + currentValue.price * currentValue.quantity;
    return Math.round((total + Number.EPSILON) * 100) / 100;
  }, 0);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setSuccess("Processing...");

    const cardElement = element.getElement("card");
    const { name, phone, email } = credentials;
    const billingInfo = {
      name,
      phone,
      email,
    };
    if (visaPay) {
    try {
      const paymentIntent = await axios.post(
        "http://localhost:3333/customer/order",
        {
          headers: {
            authorization: localStorage.getItem("customerToken"),
          },
          amount: totalPrice * 100,
          value: credentials,
          cart: cart,
        },
        {}
      );

      const paymentMethodObj = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingInfo,
      });

      if (paymentMethodObj.error) {
        setError(paymentMethodObj.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      const confirmedPayment = await stripe.confirmCardPayment(
        paymentIntent.data,
        {
          payment_method: paymentMethodObj.paymentMethod.id,
        }
      );
      if (confirmedPayment.error) {
        setError(confirmedPayment.error.message);
        setProcessing(false);
        setSuccess("Pay");
        return;
      }

      setSuccess("Success! Payment is Complete");

      setTimeout(() => {
        setSuccess("Pay");
        setProcessing(false);
        setCredentials({
          name: "",
          email: "",
          phone: "",
          address: "",
        });
        cardElement.clear();
      }, 2000);
      emptyCart();
      navigate("/thanks");
      // location.reload()
    } catch (error) {
      setError(error.message);
      setProcessing(false);
      setSuccess("Pay");
    }
  }else {
    try{
      await axios.post(
        "http://localhost:3333/customer/order",
        {
          headers: {
            authorization: localStorage.getItem("customerToken"),
          },
          amount: totalPrice * 100,
          value: credentials,
          cart: cart,
        },
        {}
      );
      emptyCart();
      setProcessing(false);
      setSuccess("Pay");
      navigate("/thanks");
    }catch(error){
        
    }
  }

  };

  return (
    <div className="container-fluid row pt-5">
      <div className="col-12 col-md-6 container-fluid">
        <h3>Payment</h3>
        <div className="container-fluid p-4 border ">
          <label htmlFor="delivery" className="d-flex gap-2 mb-3">
            <input
              id="delivery"
              type="radio"
              name="payment"
              onChange={(e) => setVisaPay(false)}
            />
            Pay on Delivery
          </label>
          <label htmlFor="visa" className="d-flex gap-2">
            <input
              id="visa"
              type="radio"
              name="payment"
              onChange={(e) => setVisaPay(e.target.value)}
            />
            Pay With your Card
          </label>
        </div>
        {visaPay && (
          <div className="container">
            <form className="form border-bottom" onSubmit={handlePayment}>
              <input
                className="form-control mt-4"
                type="text"
                placeholder="Name on Card"
                name="name"
                required
                value={credentials.name}
                onChange={handleChange}
              />
              <input
                className="form-control mt-4"
                type="text"
                placeholder="Phone Number"
                name="phone"
                required
                value={credentials.phone}
                onChange={handleChange}
              />
              <input
                className="form-control my-4"
                type="email"
                placeholder="Email"
                name="email"
                required
                value={credentials.email}
                onChange={handleChange}
              />
              <p>{error}</p>
              <CardElement
                options={{
                  hidePostalCode: true,
                  style: {
                    base: {
                      fontSize: "18px",
                      color: "blue",
                    },
                    invalid: {
                      color: "red",
                    },
                  },
                }}
                onChange={handleCardChange}
              />
            </form>
          </div>
        )}
      </div>
      <div className="col-12 col-md-4 container-fluid border px-3 py-4 border-1 ">
        <h3 className="text-center ">Order Details</h3>
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
        <span className="badge bg-success d-flex text-wrap">
          Arrives by 3rd Oct at 07:30 pm to Address : customer address
        </span>

        <div className="text-center mt-3">
          <Link to="/checkout">
            <button
              onClick={handlePayment}
              className="btn btn-dark rounded-4   "
              style={{ width: "100%" }}
              disabled={isProcessing}
            >
              {success}
            </button>
          </Link>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Checkout;
