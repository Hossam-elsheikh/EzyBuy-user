import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../UI/container/Container";
import "./Layout.css";
import ProductImgs from "../Reusable/ProductImgs/ProductImgs";
import ProductDetails from "../Reusable/ProductDetails/ProductDetails";
import ProdSpecs from "../Reusable/ProdSpecs/ProdSpecs";
import CustomerReview from "../Reusable/CustomerReview/CustomerReview";
import { useEffect } from "react";
import instance from "../../axiosConfig/instance";
import { useDispatch } from "react-redux";
import { productsAction } from "../../store/slices/productsSlice";
export default function Layout() {
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(productsAction())

    // instance.get('/customer/cart').then((res)=> {console.log(res);
    // dispatch(loadCart(res.data.cart))
    // })
  },[]);

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
