import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import cart from '../../assets/cart.svg'
import MobNav from "./MobNav";
import { useState } from "react";
export default function Navbar() {
  const [display, setDisplay]=useState(false)

  function displayHandler(){
    setDisplay(!display)
  }
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.main_nav}>

        <div className={classes.bkdrop} style={{display:display?'block':'none'}} onClick={()=>displayHandler()}></div>
        <div className="d-flex align-items-center gap-2">
      <div className="show">
        <i className="fa-solid fa-bars" style={{cursor:'pointer'}} onClick={()=>displayHandler()}></i>
        </div>
        <MobNav onclick={()=>displayHandler()} display={display ? 'flex' : 'none'}/>
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
        </div>
        <div className={classes.sec_nav}>
          <div className="d-flex gap-2 align-items-center">
          <i className="fa-solid fa-truck"></i>
          <p>How do you want your items?</p>
          <i className="fa-solid fa-chevron-down" style={{cursor:'pointer'}}></i> 
          </div>
          <div className="d-none gap-3 d-lg-flex d-xl-flex">
          <Link to='/grocery'>Groceries & Essentials </Link>
          <Link to='/beauty'>Beauty</Link>
          <Link to='/kids'>Kids</Link>
          <Link to='/fashion'>Fashion</Link>
          <Link to='/electronics'>Electronics</Link>
          <Link to='/login'>log in</Link>
          <Link to='/register'>Register</Link>
          <Link to='/product'>Product</Link>
          </div>
        </div>
      </nav>
      
    </>
  );
}
