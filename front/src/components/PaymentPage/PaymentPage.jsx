// src/components/PaymentPage/PaymentPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    if (method === 'arrival') {
      navigate('/thank-you');
    }
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/devis'); // Rediriger vers la page de devis
  };

  return (
    <div className="payment-container">
      {paymentMethod !== 'card' && (
        <>
          <h2 className="payment-title">Choisissez votre méthode de paiement</h2>
          <div className="payment-options">
            <button onClick={() => handlePaymentMethodChange('arrival')}>Payer à l'arrivée</button>
            <a href="https://buy.stripe.com/test_dR67vV4I9dzm6VGcMM">
            <button >Payer par carte</button>

            </a>
          </div>
        </>
      )}
      {paymentMethod === 'card' && (
        <div className="card-fields">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="cardNumber">Numéro de carte :</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Date d'expiration :</label>
              <input type="text" id="expiryDate" name="expiryDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV :</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
            <button type="submit" className="card-submit-button">Payer</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
