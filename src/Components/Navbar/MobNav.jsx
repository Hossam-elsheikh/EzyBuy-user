import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from '../../assets/fav-05.svg'

const MobNav = (props) => {
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
  const [section, setSection] = useState(Departments);
  const [subMenu, setSubMenu] = useState(false);
  return (
    <div className={classes.mobNav} style={{ display: props.display }}>
      <div className="d-flex gap-1 justify-content-center align-items-center">
      <Link to="/">
          <img
         
            src={logo}
            alt="logo"
            border="0"
            style={{width:'35px'}}
            />
        </Link>
        <h3 style={{margin:'0'}}>Hi, User</h3>
      </div>
      {/* Main menu */}
      {!subMenu ? (
        <div className="overflow-auto p-3 ">
          <Link onClick={props.onclick} href="#" className="d-flex gap-2">
            <img
              className="logo"
              style={{ height: "25px" ,width:'auto'}}
              src="https://i.ibb.co/6X1M1bf/logo-04.png"
            />
            <p style={{fontSize:'1rem'}}> +</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-receipt"></i>
            <p>Purchase History</p>
          </Link>
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-box"></i>
            <p>My items</p>
          </Link>
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-user"></i>
            <p>Account</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-circle-question"></i>
            <p>Help</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-regular fa-heart"></i>
            <p>Lists</p>
          </Link>
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center mb-2"
          >
            <i className="fa-solid fa-gift"></i>
            <p>Registries</p>
          </Link>
          <hr />
          <Link
            className="d-flex justify-content-between align-items-center"
            onClick={() => {
              setSubMenu(true);
              setSection(Departments);
            }}
          >
            <div href="#" className="d-flex gap-3 align-items-center mb-2">
              <i className="fa-solid fa-industry"></i>
              <p>Departments</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <Link
            className="d-flex justify-content-between align-items-center"
            onClick={() => {
              setSubMenu(true);
              setSection(Services);
            }}
          >
            <div href="#" className="d-flex gap-3 align-items-center mb-2">
              <i className="fa-solid fa-hand-holding-medical"></i>
              <p>Services</p>
            </div>
            <i className="fa-solid fa-chevron-right"></i>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center "
          >
            <i className="fa-regular fa-comment"></i>
            <p>Give feedback</p>
          </Link>
          <hr />
          <Link
            onClick={props.onclick}
            href="#"
            className="d-flex gap-3 align-items-center "
          >
            <i className="fa-solid fa-right-to-bracket"></i>
            <p>Sign out</p>
          </Link>
        </div>
      ) : (
        <div className="overflow-auto p-3 d-flex flex-column gap-2">
          <Link
            onClick={() => {
              setSubMenu(false);
            }}
          >
            Back to menu
          </Link>
          <hr />
          <div className="overflow-auto p-1 d-flex flex-column gap-2">
            {section.map((item) => (
              <Link onClick={props.onclick} to={item.link}>{item.title}</Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobNav;
