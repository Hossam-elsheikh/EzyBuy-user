import React, { useContext, useEffect,useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios'

import style from "./AccNav.module.css";
import { LoginContext } from "../../context/LoginContext";
const AccNav = () => {
  let { customerToken, setCustomerToken } = useContext(LoginContext);
  const [info,setInfo]= useState({})
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("customerToken");
    setCustomerToken(null);
    navigate("/login");
  }
  useEffect(()=>{
    async function getPersonalInfo(){
      try {
        const res = await axios({
          method: 'get',
          url: 'http://localhost:3333/customer/info',
          headers: { authorization: `${localStorage.getItem("customerToken")}`,}, 
        });
        console.log(res.data);
        setInfo(res.data)
      } catch (err) {
        console.log(err);
      }
    }

    getPersonalInfo()
  },[])
  return (
    <div
      style={{ borderRight: "1px solid rgb(209, 209, 209)" }}
      className={`d-flex flex-column ${style.links}`}
    >
      <div>
        <h5>Hi, {info.name}</h5>
        <hr />
      </div>
      <NavLink
        end
        className={({ isActive }) => (isActive ? style.active : "")}
        to=""
      >
        <i class="fa-regular fa-newspaper"></i> &nbsp; Purchase History
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="mysavings"
      >
        <i class="fa-solid fa-piggy-bank"></i> &nbsp;My Savings
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="wallet"
      >
        <i class="fa-solid fa-wallet"></i> &nbsp;Wallet
      </NavLink>
      <hr />
      <h6>Manage Account</h6>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="personalinfo"
      >
        <i class="fa-solid fa-user"></i> &nbsp;Personal info
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="addresses"
      >
        <i class="fa-solid fa-location-crosshairs"></i> &nbsp;Addresses
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="community"
      >
        <i class="fa-solid fa-envelope"></i> &nbsp;Communication & Privacy
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.active : "")}
        to="giving"
      >
        <i class="fa-solid fa-hand-holding-dollar"></i> &nbsp;Giving & impact
      </NavLink>
      <hr />
      <NavLink to="/login" onClick={logout}>
        <i class="fa-solid fa-right-from-bracket"></i> &nbsp;sign out
      </NavLink>
    </div>
  );
};

export default AccNav;
