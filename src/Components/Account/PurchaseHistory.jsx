import React, { useEffect, useState } from "react";
import axios from "axios";

const PurchaseHistory = () => {
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
    <div className="py-3" id="purchase">
      <h3>Purchase History</h3>
      <div className="d-flex flex-column gap-3">
        {orders?.map((order) => (
          <div className="d-flex justify-content-between border p-2 w-100">
            <p>{order.createdAt}</p>-
            <p className="badge bg-success d-flex align-items-center">
              $
              {Math.round(
                order.cart_Customer?.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.price,
                  0
                )
              )}
            </p>
          </div>
        ))}
      </div>
      <h5 className="bg-primary p-2 text-white rounded">get 50% off when you use EZY23f code on your next order.</h5>
      <hr />
    </div>
  );
};

export default PurchaseHistory;
