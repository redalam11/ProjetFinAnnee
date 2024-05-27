import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="contact-info">
        <li><i className="fas fa-envelope"></i> info@vehipulse.com</li>
        <li><i className="fas fa-phone"></i> +33 123 456 789</li>
      </ul>
      <p>&copy; 2024 Vehipulse. Tous droits réservés.</p>
    </footer>
  );
};

export default Footer;
