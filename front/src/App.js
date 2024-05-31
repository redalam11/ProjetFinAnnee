import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Formulaire from './components/Formulaire/Formulaire';
import PaymentPage from './components/PaymentPage/PaymentPage';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';
import Home from './components/home/home';
import Navbar from './components/navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/register/register';
import About from './components/About/Aboutus';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/formulaire" element={<Formulaire />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
};

export default App;
