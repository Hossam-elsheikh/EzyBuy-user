import { useFormik } from "formik"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { register } from "../../services/auth";
import { MagnifyingGlass } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
// import style from './Register.module.css'
export default function Register() {
  // let { setUserToken , setUserData } = useContext(userContext)
  let navigate =useNavigate();
  let [error,setError] = useState(null)
  let [isLoading , setisLoading]  = useState(false)

  let phoneRegex= /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  let validateSchema = Yup.object({
    name:Yup.string().min(3 , 'name min length is 3').max(10 , 'name max length is 10 ').required('name is required'),
    email:Yup.string().email('is invalid name').required( 'email is required'),
    phone:Yup.string().matches(phoneRegex,'phone number is in valid').required('phone is required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/, 'password is invalid start with upper case and min is 5 char').required('password is required'),
    address:Yup.string().max(10 , 'address max length is 10 ').required('address is required'),
    city:Yup.string().max(10 , 'city max length is 10 ').required('city is required'),

  })

 async function submetRegister(value){
  setisLoading(true)
  try{
    let {data} =  await register(value)
    if(data.message === 'customer saved successfully'){
      setisLoading(false)
      navigate('/login');
    }

  }catch(err){
    console.log(err.message);
    setError(err.message)
    toast.error("customer already saved or invalid data")
    setisLoading(false)
  }
  }
  
  const formik = useFormik({
    initialValues:{
      name:'',
      phone:'',
      email:'',
      password:'',
      address:'',
      city:''

    },
    validationSchema:validateSchema,
    onSubmit:submetRegister,

  })

  return <>
    <div className='w-75 mx-auto py-5'>
      {error ? <div className='alert alert-danger'>{error}</div>:""}
      <h3>Register Now</h3>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name" >Name</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} className='form-control mb-2' type="text"  name='name' id='name'/>
      {formik.errors.name && formik.touched.name? <div className='alert alert-danger mt-2 p-2'>{formik.errors.name}</div>:""}

      <label htmlFor="email" >E-mail</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control mb-2' type="email"  name='email' id='email'/>
      {formik.errors.email && formik.touched.email? <div className='alert alert-danger mt-2 p-2'>{formik.errors.email}</div>:""}
      
      <label htmlFor="phone" >Phone</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} className='form-control mb-2' type="tel"  name='phone' id='phone'/>
      {formik.errors.phone && formik.touched.phone? <div className='alert alert-danger mt-2 p-2'>{formik.errors.phone}</div>:""}
      
      <label htmlFor="password" >Password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2' type="password"  name='password' id='password'/>
      {formik.errors.password && formik.touched.password? <div className='alert alert-danger mt-2 p-2'>{formik.errors.password}</div>:""}
      
      <label htmlFor="address" >Address</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.address} className='form-control mb-2' type="text"  name='address' id='address'/>
      {formik.errors.address && formik.touched.address? <div className='alert alert-danger mt-2 p-2'>{formik.errors.address}</div>:""}
      
      
      <label htmlFor="city" >City</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.city} className='form-control mb-2' type="text"  name='city' id='city'/>
      {formik.errors.city && formik.touched.city? <div className='alert alert-danger mt-2 p-2'>{formik.errors.city}</div>:""}
      
     {!isLoading?
     <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn bg-success text-white mt-2'> Register  </button>
      :<button  type='button' className='btn bg-main text-white mt-2'>  
            <MagnifyingGlass
            visible={true}
            height="20"
            width="40"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor = '#c0efff'
            color = '#e15b64'
          />
       </button>}
    </form>
    <Toaster/>
    </div>

  </>
}
