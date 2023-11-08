import { Link, NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import cart from '../../assets/cart.svg'
import MobNav from "./MobNav";
import logo from '../../assets/fav-05.svg'
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { useSelector } from "react-redux";
export default function Navbar() {
  const totalPrice = useSelector((data)=> data.cart.items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price*currentValue.quantity,
    0
  ))
  let { customerToken , setCustomerToken} = useContext(LoginContext);
  let [path , setPath] = useState('myaccount')
  let [logState , setLogState] = useState('My Account')

  function updateLogged (){
    if(localStorage.getItem('customerToken')){
      setPath('myaccount')
      setLogState('My Account')
    }else if (localStorage.getItem('customerToken') == null){
      setPath('login')
      setLogState('Sign in')
  }
  }

  useEffect(()=>{
    updateLogged()
},[])

useEffect(()=>{
  updateLogged()
},[customerToken])


  const [display, setDisplay] = useState(false)
  const [displayBck, setDisplayBck] = useState(false)
  const [displaySec, setDisplaySec] = useState('none')
  const Departments = [
    { title: "Groceries & Essentials", link: "/grocery" },
    { title: "Electronics", link: "/electronics" },
    { title: "Fashion", link: "/fashion" },
    { title: "Kids & Toys", link: "/kids" },
    { title: "Beauty", link: "/beauty" },
    { title: "Home & Furniture", link: "/home" },
    { title: "Halloween", link: "/halloween" },
    { title: "Baby", link: "/baby" },
    { title: "Gifts", link: "/gifts" },
    { title: "Patio & Gardens", link: "/gardens" },
  ];
  const Services = [
    { title: "Health & Wellness", link: "/health" },
    { title: "Auto Care Center", link: "/auto" },
    { title: "Protection, Home & Tech", link: "/protection" },
    { title: "EzyBuy Pay", link: "/ezybuypay" },
    { title: "Custom Cakes", link: "/cakes" },
    { title: "Photo Services", link: "/photo" },
    { title: "Money Services", link: "/money" },
    { title: "Community & Giving", link: "/community" },
  ];

  const DepartmentsDiv = () => {
    return (
      <>
        <div className={classes.dep}>
          <Link className={classes.dep_link} to='#'>All Departments</Link>
          <ul>
            {Departments.map((dep, index) => <li key={index}><Link onClick={() => displaySecHandler()} to={dep.link}>{dep.title}</Link></li>)}
          </ul>
        </div>
      </>
    )
  }
  const ServicesDiv = () => {

    return (
      <>
        <div style={{ left: '20rem' }} className={classes.dep}>
          <Link className={classes.dep_link} to='#'>All Services</Link>
          <ul>
            {Services.map((dep, index) => <li key={index}><Link onClick={() => displaySecHandler()} to={dep.link}>{dep.title}</Link></li>)}
          </ul>
        </div>
      </>
    )
  }

  function displayHandler() {
    setDisplay(!display)
  }
  function displaySecHandler() {
    setDisplaySec('none')
    setDisplayBck(false)
  }
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.main_nav}>

          <div className={classes.bkdrop} style={{ display: display ? 'block' : 'none' }} onClick={() => displayHandler()}></div>
          <div className={classes.bkdrop} style={{ display: displayBck ? 'block' : 'none' }} onClick={() => displaySecHandler()}></div>
          <div className="d-flex align-items-center gap-2">
            <div className="show">
              <i className="fa-solid fa-bars" style={{ cursor: 'pointer', fontSize: '1.6rem' }} onClick={() => displayHandler()}></i>
            </div>
            <MobNav onclick={() => displayHandler()} display={display ? 'flex' : 'none'} />
            {displaySec === 'none' ? <></> :
              displaySec === 'dep' ? <DepartmentsDiv /> : <ServicesDiv />}
            <Link to="/">
              <img
                className="show"
                src={logo}
                alt="logo"
                border="0"
                style={{ width: '35px', marginLeft: '1rem' }}
              />
            </Link>

            <Link to="/">
              <img
                className="hide"
                src="https://i.ibb.co/6X1M1bf/logo-04.png"
                alt="logo"
                border="0"
              />
            </Link>
          </div>
          { }
          <div className="hide  gap-3">
            <div className={classes.cat} onClick={() => {
              setDisplaySec('dep')
              setDisplayBck(true)
            }}>
              <i className="fa-solid fa-industry"></i>
              <p>Departments</p>
            </div>
            <div className={classes.cat} onClick={() => {
              setDisplaySec('serv')
              setDisplayBck(true)
            }}>
              <i className="fa-solid fa-hand-holding-medical"></i>
              <p>Services</p>
            </div>
          </div>
          <input type="search" placeholder="Search any item .." />
          <div className={classes.wrap}>
            <Link to='myitems' className={`hide_sm ${classes.cat}`}>
              <i className="fa-regular fa-heart"></i>
              <p >My items</p>
            </Link>
            <Link to={path} className={`hide_sm ${classes.cat}`}>
              <i className="fa-regular fa-user"></i>
              <p>{logState}</p>
            </Link>
            <Link className={classes.cart} to='/cart'>
              <img src={cart} />
              <div className="d-flex flex-column">
                <p>My Cart</p>
                <p>${totalPrice==0 ? '0.00' : Math.round((totalPrice + Number.EPSILON) * 100) / 100}</p>
              </div>
            </Link>
          </div>
        </div>
        <div className={classes.sec_nav}>
          <div className="d-flex gap-2 align-items-center">
            <i className="fa-solid fa-truck"></i>
            <p>How do you want your items?</p>
            <i className="fa-solid fa-chevron-down" style={{ cursor: 'pointer' }}></i>
          </div>
          <div className="d-none gap-3 d-lg-flex d-xl-flex">
            <Link to='/groceries'>Groceries & Essentials </Link>
            <Link to='/beauty'>Beauty</Link>
            <Link to='/kids'>Kids</Link>
            <Link to='/fashion'>Fashion</Link>
            <Link to='/electronics'>Electronics</Link>
            <Link to='/Health'>Health</Link>

          </div>
        </div>
      </nav>

    </>
  );
}
