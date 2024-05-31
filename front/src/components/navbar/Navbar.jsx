import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className='navbar'>



<a href="/home"><h1>VEHIPULSE</h1></a>

        <ul>
       
            <Link to="/home"> <li>HOME</li> </Link>
            <Link to="/Login"> <li>LOGIN</li> </Link>
            <Link to="/register"> <li>REGISTER</li></Link>
            <Link to="/Formulaire"> <li>FORMULAIRE DEReservation</li> </Link>
            <Link to="/about-us"> <li>ABOUTUS</li></Link>
            <Link to="/Login"> <li>LOGOUT</li></Link>






        </ul>
    </div>
  )
}

export default Navbar