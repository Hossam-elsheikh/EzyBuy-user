import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from '../UI/container/Container'
import './Layout.css'
import ProductImgs from "../Reusable/ProductImgs/ProductImgs";
import ProductDetails from "../Reusable/ProductDetails/ProductDetails";
export default function Layout() {
  return <>
  <Navbar/>
  <div className="content"> 
  <Container>
  <Outlet/>
  
  </Container>
  <Container>
  <ProductImgs/>
  <ProductDetails/>
  </Container>
  <Footer/>
  </div>
  </>
}
