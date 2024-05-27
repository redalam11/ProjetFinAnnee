import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/register/register'
import Home from './components/home/home'


const RoutesPFA = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/Login' element={<LoginForm/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/home' element={<Home/>} />

        </Routes>
    </div>
  )
}

export default RoutesPFA