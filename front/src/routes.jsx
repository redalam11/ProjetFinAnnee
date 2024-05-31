import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Register from './components/register/register';
import Home from './components/home/home'; // Assurez-vous que le chemin est correct
import Formulaire from './components/Formulaire/Formulaire';
import PaymentPage from './components/PaymentPage/PaymentPage';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';

const RoutesPFA = () => {
  return (
    <Routes>
            <Route path="/" element={<Home />} />

      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} /> {/* Utilisez le composant Home ici */}
      <Route path="/formulaire" element={<Formulaire />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
};

export default RoutesPFA;
