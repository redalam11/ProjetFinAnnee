import React from 'react';
import './ThankYouPage.css';

const ThankYouPage = () => {
  return (
    <div className="thank-you-container">
      <h1>Réservation effectuée !</h1>
      <p>Merci d'avoir choisi notre service de réservation. Votre paiement à l'arrivée a été enregistré avec succès. Nous tenons à vous exprimer notre gratitude pour votre confiance et votre soutien continu. Nous sommes impatients de vous accueillir et de vous offrir une expérience exceptionnelle lors de votre séjour. Si vous avez des questions ou des demandes spéciales, n'hésitez pas à nous contacter à tout moment. Merci encore pour votre confiance et à bientôt !</p>
      <div className="company-signature">
        <p>Vehipulse</p>
        <p>Signature</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
