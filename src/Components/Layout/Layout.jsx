import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Container from '../UI/container/Container'
import './Layout.css'
export default function Layout() {
  return <>
  <Navbar/>
  <div className="content"> 
  <Container>
  <Outlet/>
  </Container>
  <Footer/>
  </div>
  </>
}
