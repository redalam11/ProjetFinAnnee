import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>

<h1>VIPULSE</h1>
        <ul>
       
             <Link to="/home"> <li>HOME</li> </Link>
            <Link to="/Login"> <li>LOGIN</li> </Link>
             <Link to="/register"> <li>REGISTER</li></Link>
            <Link to="/home"> <li>FORMULAIRE DE TEST</li> </Link>
           <Link to="/home">   <li>ABOUT US</li></Link>
            <Link to="/home">  <li>LOGOUT</li></Link>






        </ul>
    </div>
  )
}

export default Navbar