import React from 'react'
import Password from '../Components/Password/Password'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PasswordPage = () => {
  let navigate = useNavigate();
  return <>
  <Container>
    <div className=' text-center ' >
      <div className='d-inline-block '>
      <div className='w-25 text-center  m-auto'>
      <img 
            className='w-50'
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
            alt="" />
      </div>
            
       <h4 className='mt-4'>Welcome back!</h4>
       <div className=''>
       <p className='text-start' style={{fontSize:16}} >Email address</p>
       <p style={{fontSize:16}}>{localStorage.getItem("customerEmail")}
       <span className='ms-4'>
        <button className={`border-0 text-decoration-underline bg-light`} style={{fontSize:14}}  onClick={()=>navigate('/login')} >
          Change
        </button>
       </span>

       </p>
       
       </div>
       
      </div>
      
        <div className='mt-5  d-flex justify-content-center align-items-center '>
          <div className='' style={{width:"35%"}}>
          <Password/>

          </div>
      </div>

    </div>

    </Container>
    </>
}

export default PasswordPage