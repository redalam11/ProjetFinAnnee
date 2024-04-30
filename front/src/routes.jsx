import React from 'react'
import { Routes , Route } from 'react-router-dom'
import LoginForm from './components/LoginForm/LoginForm'
import Register from './components/register/register'

const RoutesPFA = () => {
  return (
    <div>
        
        <Routes>
            <Route path='/' element={<LoginForm/>} />
            <Route path='/register' element={<Register/>} />


        </Routes>
    </div>
  )
}

export default RoutesPFA