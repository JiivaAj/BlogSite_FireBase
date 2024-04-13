import React from 'react'
import  { useState } from "react";

import AppsubmitButton from "../../component/navbar/appsubmitbutton.js/AppsubmitButton";
import'./Login.css'
import useAuthentication from '../../hookss/useAuthentication';

const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const [validationError,setValidationError] = useState(null)

  const {error,login} = useAuthentication()
  

  const handleSubmit = (e) => {
          e.preventDefault()
       
          if(!email){
              setValidationError('Email cannot be empty')
              return
          }
          else if(!password){
              setValidationError('Password cannot be empty')
              return
          }
         
          
          setValidationError(null)
          console.log({email,password})
          login({email,password})
  }

return (
  <div className="outercontainer">
      <h2 className="titleSpacing">Login</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputEmail1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value ={email} onChange={(e)=> setEmail(e.target.value)}
      />
      <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        value ={password} onChange={(e)=> setPassword(e.target.value)}
      />
    </div>
    
    {
      validationError && <div className="alert alert-danger" role="alert">
          {validationError}
      </div>

    }
    {
      error && <div className="alert alert-danger" role="alert">
          {error}
      </div>

    }
    <div className="float-end">
        <AppsubmitButton title="Login"/> 
        
    </div>
  </form>
  </div>
);


}

export default Login