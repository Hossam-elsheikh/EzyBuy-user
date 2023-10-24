import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from "../UI/container/Container";
import "./Layout.css";
import ProductImgs from "../Reusable/ProductImgs/ProductImgs";
import ProductDetails from "../Reusable/ProductDetails/ProductDetails";
import ProdSpecs from "../Reusable/ProdSpecs/ProdSpecs";
import CustomerReview from "../Reusable/CustomerReview/CustomerReview";
export default function Layout() {
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
