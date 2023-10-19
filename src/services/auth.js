import instance from "../axiosConfig/instance"

export const register = ( data )=>{
   return instance.post('/customer/signup',data)
}

export const login = ()=>{
    return instance.post('/customer/login',)
}