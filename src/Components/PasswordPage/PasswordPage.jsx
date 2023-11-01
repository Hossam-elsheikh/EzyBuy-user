// import style from './PasswordPage.module.css'
import  {  useState } from 'react'
import {useFormik} from 'formik'
import * as  Yup from 'yup' 
import {  useNavigate } from 'react-router-dom'
import { MagnifyingGlass } from 'react-loader-spinner'
import toast, { Toaster } from 'react-hot-toast'
import { login } from '../../services/auth'


export default function PasswordPage() {
  
  let navigate =useNavigate();
  let [error,setError] = useState(null)
  let [isLoading , setisLoading]  = useState(false)

  async function loginSubmit(values){
    setisLoading(true);

    try {
      let email = localStorage.getItem("customerEmail")
      values.email = email;
   let {data} =await login(values) 
   if(data.message === 'login successfull'){
    setisLoading(false);
    localStorage.setItem('customerToken',data.token);
    toast.success("logged in successfully")
    navigate('/');
  }
  }catch(err){
      setError(err.message)
      setisLoading(false)
      toast.error("invalid or Password")
    }
  }


  let validateSchema = Yup.object({
    password:Yup.string().matches(/^[A-z][a-z0-9]{5,10}$/, 'password is invalid start with upper case and min is 5 char').required('password is required'),
  })
  
  const formik = useFormik({
    initialValues:{
      password:'',
    },
    validationSchema:validateSchema,
    onSubmit:loginSubmit,
    
  })

  return (

 
  <>
    
      {error ? <div className='alert alert-danger'>{error}</div>:""}
      
      <form onSubmit={formik.handleSubmit}>
      
      <label htmlFor="password" >Password</label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} className='form-control mb-2' type="password"  name='password' id='password'/>
      {formik.errors.password && formik.touched.password? <div className='alert alert-danger mt-2 p-2'>{formik.errors.password}</div>:""}
      
     {!isLoading?
      <div className=' border border-0 rounded text-light d-flex align-items-center '>
      <button disabled={!(formik.isValid && formik.dirty)} type='submit' className='btn btn-primary w-100 rounded-5 text-white mt-2 mx-2'> Sign In </button>
     </div>
      
     
      :<button  type='button' className='btn btn-primary rounded-5 w-100 text-white ms-2 mt-2'>  
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


