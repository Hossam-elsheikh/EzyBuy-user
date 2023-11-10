import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../UI/container/Container";
import "./Layout.css";
import ProductImgs from "../Reusable/ProductImgs/ProductImgs";
import ProductDetails from "../Reusable/ProductDetails/ProductDetails";
import ProdSpecs from "../Reusable/ProdSpecs/ProdSpecs";
import CustomerReview from "../Reusable/CustomerReview/CustomerReview";
import { useEffect, useLayoutEffect } from "react";
import instance from "../../axiosConfig/instance";
import { useDispatch } from "react-redux";
import { productsAction } from "../../store/slices/productsSlice";
import { cartAction } from "../../store/slices/cartSlice";

export default function Layout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(cartAction());
  }, []);
  return (
    <>
      <Navbar />
      <div className="content">
        <Container>
          <Outlet />
        </Container>
        <Footer />
      </div>
    </>
  );
}
