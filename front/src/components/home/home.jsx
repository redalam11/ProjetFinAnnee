import React from 'react';
import './home.css';

const App = () => {
  return (
    <div className="backgroundhome">
      <div className="App">
        {/* Bannière Principale */}
        <section className="hero-section">
          <h1>Votre partenaire de confiance pour le diagnostic automobile</h1>
          <p className="presentation">
            Fondée par des experts passionnés d'automobiles, Vehipulse est dédiée à offrir des diagnostics automobiles précis et fiables. Grâce à notre technologie de pointe et notre équipe hautement qualifiée, nous identifions et résolvons les problèmes de votre véhicule avec une précision inégalée. Vehipulse est synonyme d'excellence et d'innovation, garantissant la sécurité et la performance de chaque véhicule que nous diagnostiquons. Faites confiance à Vehipulse pour maintenir votre voiture en parfait état de fonctionnement.
          </p>
        </section>
        
        {/* Présentation de l'entreprise */}
        <section id="about" className="about-section">
          <h2>À propos de Vehipulse</h2>
          <p>
            Chez Vehipulse, nous sommes spécialisés dans le diagnostic automobile complet et précis. 
            Grâce à notre équipe expérimentée et à notre technologie de pointe, nous fournissons des services de qualité 
            supérieure pour garantir le bon fonctionnement de votre véhicule.
          </p>
        </section>
        
        {/* Points Forts */}
        <section className="advantages-section">
          <h2 className="highlight">Pourquoi Choisir Vehipulse ?</h2>
          <ul>
            <li>
              <strong>Équipe Expérimentée:</strong> Nos techniciens sont hautement qualifiés et possèdent une vaste expérience dans le diagnostic automobile.
            </li>
            <li>
              <strong>Technologie Avancée:</strong> Nous utilisons des outils de diagnostic de pointe pour assurer des résultats précis et fiables.
            </li>
            <li>
              <strong>Service Client Exceptionnel:</strong> Nous nous engageons à offrir un service client de premier ordre pour répondre à toutes vos attentes.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;