import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './AccNav.module.css'
const AccNav = () => {
  return (
    <div style={{borderRight:'1px solid rgb(209, 209, 209)'}} className={`d-flex flex-column ${style.links}`}>
      <div>
      <h5>Hi, user</h5>
      <p style={{fontSize:'.7rem',color:'gray',width:'200px'}}>Thanks for being a Walmart customer for 2 months</p>
      <hr />
      </div>
      <NavLink end className={({isActive})=>isActive ? style.active : ''} to=''><i class="fa-regular fa-newspaper"></i> &nbsp; Purchase History</NavLink>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='mysavings'><i class="fa-solid fa-piggy-bank"></i> &nbsp;My Savings</NavLink>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='wallet'><i class="fa-solid fa-wallet"></i> &nbsp;Wallet</NavLink>
      <hr />
      <h6>Manage Account</h6>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='personalinfo'><i class="fa-solid fa-user"></i> &nbsp;Personal info</NavLink>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='addresses'><i class="fa-solid fa-location-crosshairs"></i> &nbsp;Addresses</NavLink>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='community'><i class="fa-solid fa-envelope"></i> &nbsp;Communication & Privacy</NavLink>
      <NavLink className={({isActive})=>isActive ? style.active : ''} to='giving'><i class="fa-solid fa-hand-holding-dollar"></i> &nbsp;Giving & impact</NavLink>
      <hr />
      <NavLink  to='signout'><i class="fa-solid fa-right-from-bracket"></i> &nbsp;sign out</NavLink>
      
    </div>
  )
}

export default AccNav