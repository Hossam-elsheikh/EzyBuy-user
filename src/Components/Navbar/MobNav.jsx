import React from 'react'
import classes from './Navbar.module.css'
import { Link } from 'react-router-dom'
const MobNav = (props) => {
  return (
    <div className={classes.mobNav} style={{display:props.display}} onClick={props.onclick}>
      <div className='d-flex gap-1 justify-content-center align-items-center'>
        <img
          className="img-fluid"
          style={{width:'50px'}}
          src="https://static.vecteezy.com/system/resources/previews/022/100/282/original/walmart-logo-transparent-free-png.png"
        />
        <h3>Hi, User</h3>
      </div>
      <div className="overflow-auto p-3">
        <Link href="#" className="d-flex gap-2">
          <img
            className="logo"
            style={{width:'25px'}}
            src="https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg"
          />
          <p>Walmart +</p>
        </Link>
        <hr />
        <Link href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-solid fa-receipt"></i>
          <p>Purchase History</p>
        </Link>
        <Link href="#" className="d-flex gap-3 align-items-center mb-2" >
          <i className="fa-solid fa-box"></i>
          <p>My items</p>
        </Link>
        <Link href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-regular fa-user"></i>
          <p>Account</p>
        </Link>
        <hr />
        <Link href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-regular fa-circle-question"></i>
          <p>Help</p>
        </Link>
        <hr />
        <Link href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-regular fa-heart"></i>
          <p>Lists</p>
        </Link>
        <Link href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-solid fa-gift"></i>
          <p>Registries</p>
        </Link>
        <hr />
        <Link className="d-flex justify-content-between align-items-center">
          <div href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-solid fa-industry"></i>
            <p>Departments</p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <Link className="d-flex justify-content-between align-items-center">
          <div href="#" className="d-flex gap-3 align-items-center mb-2">
          <i className="fa-solid fa-hand-holding-medical"></i>
            <p>Services</p>
          </div>
          <i className="fa-solid fa-chevron-right"></i>
        </Link>
        <hr />
        <Link href="#" className="d-flex gap-3 align-items-center ">
          <i className="fa-regular fa-comment"></i>
          <p>Give feedback</p>
        </Link>
        <hr />
        <Link href="#" className="d-flex gap-3 align-items-center ">
          <i className="fa-solid fa-right-to-bracket"></i>
          <p>Sign out</p>
        </Link>
      </div>
  
    </div>
  )
}

export default MobNav