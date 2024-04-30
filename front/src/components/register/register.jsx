import React from 'react'
import './register.css'
import { BiSolidUser} from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Register = () => {
  return (
    <div className='wrapper' >
      <div className='form-box login'>
     
      </div>
      <div className='form-box.register'>
      <form action="">
        <h1>Registration </h1>
        <div className="input-box">
           <input type="text" placeholder='Username' required/>
           <BiSolidUser className='icon' />
        </div>
        <div className="input-box">
           <input type="email" placeholder='Email' required/>
           <FaEnvelope  className='icon' />

        </div>
        <div className="input-box">
           <input type="password" placeholder='Password' required/>
           <FaLock className='icon' />
        </div>

        <div className="remember-fprgot">
          <label><input type="checkbox" />I agree to the terms & conditions</label>
        </div>

        <button type="submit">Register</button>

        <div className="register-link">
          <p>Already have an account?<a href='/'>Login</a></p>
        </div>
      </form>
      </div>
    </div>
  )  
}

export default Register