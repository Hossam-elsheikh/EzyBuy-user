import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

// import style from './Logout.module.css'
export default function Logout() {
  let navigate = useNavigate();

  useEffect(()=>{
    localStorage.removeItem('customerToken');
    navigate('/login')
  },[])
  
  return <>
  
  </>
}
