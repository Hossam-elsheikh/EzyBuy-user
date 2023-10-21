import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import cart from '../../assets/cart.svg'
export default function Navbar() {
  return (
    <>
      <nav className={classes.nav}>
        <div className="d-flex align-items-center gap-2">
      <div className="show">
        <i className="fa-solid fa-bars" ></i>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/6X1M1bf/logo-04.png"
            alt="logo-04"
            border="0"
            />
        </Link>
            </div>
        <div className="hide  gap-3">
          <div className={classes.cat}>
            <i className="fa-solid fa-industry"></i>
            <p>Departments</p>
          </div>
          <div className={classes.cat}>
            <i className="fa-solid fa-hand-holding-medical"></i>
            <p>Services</p>
          </div>
        </div>
        <input className="hide" type="search" placeholder="Search any item .." />
        <div className={classes.wrap}>
          <Link className={`hide_sm ${classes.cat}`}>
            <i className="fa-regular fa-heart"></i>
            <p >My items</p>
          </Link>
          <Link className={`hide_sm ${classes.cat}`}>
            <i className="fa-regular fa-user"></i>
            <p>My Account</p>
          </Link>
          <Link className={classes.cart}>
            <img src={cart} />
            <div className="d-flex flex-column">
              <p>My Cart</p>
              <p>$0.00</p>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}
