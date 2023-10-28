import instance from "../axiosConfig/instance"
import {  } from "react-icons/fa";

export const register = ( data )=>{
   return instance.post('/customer/signup',data)
}

export const login = ()=>{
    return instance.post('/customer/login',)
}