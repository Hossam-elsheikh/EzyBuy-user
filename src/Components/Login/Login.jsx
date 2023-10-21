import  {  useState } from 'react'
// import style from './Login.module.css'
import {useFormik} from 'formik'
import * as  Yup from 'yup' 
import { Link, useNavigate } from 'react-router-dom'
import { MagnifyingGlass } from 'react-loader-spinner'
import instance from '../../axiosConfig/instance'
import toast, { Toaster } from 'react-hot-toast'
import { Container } from 'react-bootstrap'


export default function Login() {
  
  let navigate =useNavigate();
  let [error,setError] = useState(null)
  let [isLoading , setisLoading]  = useState(false)

  async function loginSubmit(values){
    setisLoading(true)
    try {
   let {data} = await instance.post('/customer/login',values) 
   console.log(data); 
   
   if(data.message === 'login successfull'){
    setisLoading(false);
    localStorage.setItem('customerToken',data.token);
    toast.success("logged Successfully")

    navigate('/');
  }
  }catch(err){
      setError(err.message)
      setisLoading(false)
      toast.error("invalid Email or Password")
    }
  }


  let validateSchema = Yup.object({
    email:Yup.string().email('is invalid name').required( 'email is required'),
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/, 'password is invalid start with upper case and min is 5 char').required('password is required'),
  })
  
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:validateSchema,
    onSubmit:loginSubmit,
    
  })

  return (

 
  <>
    
      {error ? <div className='alert alert-danger'>{error}</div>:""}
      <h3>Login Now</h3>
      <form onSubmit={formik.handleSubmit}>
      
      <label htmlFor="email" >E-mail</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} className='form-control mb-2' type="email"  name='email' id='email'/>
      {formik.errors.email && formik.touched.email? <div className='alert alert-danger mt-2 p-2'>{formik.errors.email}</div>:""}
      
      <label htmlFor="password" >Password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2' type="password"  name='password' id='password'/>
      {formik.errors.password && formik.touched.password? <div className='alert alert-danger mt-2 p-2'>{formik.errors.password}</div>:""}
      
     {!isLoading?
      <div className='d-flex align-items-center justify-content-between' >
      <div className=' border border-0 rounded text-light d-flex align-items-center '>
      <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-success text-white mt-2 mx-2'> Login </button>
     </div>
      <Link className='btn fw-bolder fs-5' to={'/register'}>Register Now</Link>
      
     </div>
     
      :<button  type='button' className='btn btn-success text-white ms-2 mt-2'>  
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
    
    </>
   )
}
