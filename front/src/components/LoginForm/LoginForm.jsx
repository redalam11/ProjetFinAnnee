import React from 'react';
import './LoginForm.css';
import { BiSolidUser } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  return (
    <>
      <div className="lamdabbar"></div>

      <div className='wrapper'>
        <div className='form-box login'>
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder='Username' required />
              <BiSolidUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href='#'>forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <a href="/register">
              <p className='paccount'>Don't have an account?</p>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
