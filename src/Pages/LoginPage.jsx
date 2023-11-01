import React from 'react'
import Login from '../Components/Login/Login'
import { Container } from 'react-bootstrap'

const LoginPage = () => {
  return <>
  <Container>
    <div className=' text-center ' >
      <div className='d-inline-block'>
      <img 
      className='img-fluid'
      src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
       alt="" />
       <h5 className='mt-5'>Sign in or create your account</h5>
       <p style={{fontSize:14}}>Not sure if you have an account?</p>
       <p style={{fontSize:14}}>Enter your email and we’ll check for you.</p>
      </div>
      
        <div className='mt-5  d-flex justify-content-center align-items-center '>
          <div className='' style={{width:"30%"}}>
          <Login/>

          </div>
      </div>

    </div>

    </Container>
    </>
}

export default LoginPage