import React, { useEffect, useState } from "react";
import CarouselCont from "../Reusable/CarouselCont/CarouselCont";
import instance from "../../axiosConfig/instance";
import axios from "axios";

const Reorder = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getOrder() {
      let res = await axios({
        method: "get",
        url: "http://localhost:3333/customer/order",
        headers: { authorization: `${localStorage.getItem("customerToken")}` },
      });
      setOrders(res.data);
    }

    getOrder();
  }, []);
  return (
    <div className="container d-flex flex-column gap-5 p-0 p-md-5">
      {orders ? (
        <div className="container-fluid py-3  d-flex flex-column gap-5">
          {orders.map((order) => (
            <div
              className="d-flex shadow p-4 rounded flex-column gap-2"
              key={order._id}
            >
              <div className="d-flex justify-content-between">
                <p>ID : {order._id}</p>
                <p>ordered at : {order.createdAt}</p>

                <p
                className="text-light py-1 px-2 rounded"
                  style={
                    order.status == "Pending"
                      ? { backgroundColor: "orange" }
                      : order.status == "shipping"
                      ? { backgroundColor: "darkblue" }
                      : { backgroundColor: "green" }
                  }
                >
                   {order.status}
                </p>
              </div>
              <div>
                <p>Items</p>
                <div className="d-flex flex-column gap-3 mt-3">
                  {order.cart_Customer.map((order) => (
                    <div className="d-flex gap-4 p-2 border rounded border-1">
                      <img src={order.img} style={{ width: "100px" }} alt="" />
                      <div className="d-flex flex-column gap-1">
                        <p
                          style={{ maxWidth: "200px" }}
                          className="text-truncate"
                        >
                          {order.title}
                        </p>
                        <p>quantity: {order.quantity}</p>
                        <p>price: ${order.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="container d-flex flex-column gap-3 align-items-center flex-md-row">
            <img
              style={{ width: "100px" }}
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-743d/k2-_16fa2300-0a01-473e-9c05-6fe7951a4adc.v1.png"
            />
            <p>
              Your essentials will show up here for quick and easy reordering
            </p>
          </div>
          <hr />
          <div className="hide d-flex flex-column">
            <h4>Build You Cart</h4>
            {/* <CarouselCont  count={4} slideCount={2}/> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Reorder;
