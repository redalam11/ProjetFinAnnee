import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulaire.css';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    immatriculation: '',
    marque: '',
    modele: '',
    annee: '',
    diagnostic: 'complet',
  });

  const [modelesDisponibles, setModelesDisponibles] = useState([]);
  const [showExample, setShowExample] = useState(true);
  const navigate = useNavigate();

  const marquesEtModeles = {
    'Rolls-Roys': ['Phantom', 'Ghost', 'Wraith', 'Dawn'],
    Lamborghini: ['Aventador', 'Huracan', 'Urus'],
    BMW: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 7', 'X3', 'X4', 'X6'],
    Mercedes: ['A-Class', 'C-Class', 'E-Class'],
    Audi: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q8'],
    Tesla: ['Model S', 'Model 3', 'Model X', 'Model Y'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'marque') {
      setModelesDisponibles(marquesEtModeles[value] || []);
      setFormData({
        ...formData,
        marque: value,
        modele: '', // Reset the modele field when marque changes
      });
    }
  };

  const handleImmatriculationClick = () => {
    setShowExample(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    navigate('/payment'); // Redirect to the payment page
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2012 + 1 }, (_, i) => 2012 + i);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="diagnostic-form">
        <div className="form-group immatriculation-container">
          <label htmlFor="immatriculation">Immatriculation :</label>
          <input
            type="text"
            id="immatriculation"
            name="immatriculation"
            value={formData.immatriculation}
            onChange={handleChange}
            required
          />
          {showExample && (
            <span className="example" onClick={handleImmatriculationClick}>
              Exemple :123-ABC-01
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="marque">Marque :</label>
          <select
            id="marque"
            name="marque"
            value={formData.marque}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner une marque</option>
            {Object.keys(marquesEtModeles).map((marque) => (
              <option key={marque} value={marque}>
                {marque}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="modele">Modèle :</label>
          <select
            id="modele"
            name="modele"
            value={formData.modele}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner un modèle</option>
            {modelesDisponibles.map((modele) => (
              <option key={modele} value={modele}>
                {modele}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="annee">Année :</label>
          <select
            id="annee"
            name="annee"
            value={formData.annee}
            onChange={handleChange}
            required
          >
            <option value="">Sélectionner une année</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group diagnostic-group">
          <label htmlFor="diagnostic">Type de Diagnostic :</label>
          <select
            id="diagnostic"
            name="diagnostic"
            value={formData.diagnostic}
            onChange={handleChange}
          >
            <option value="complet">Complet</option>
            <option value="semi-complet">Semi-Complet</option>
          </select>
        </div>

        <button type="submit" className="form-submit-button">Book Now !</button>
      </form>
    </div>
  );
};

export default Formulaire;
