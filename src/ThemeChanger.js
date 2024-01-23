// ThemeChanger.js
import React, { useState, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "./App.css"


const ThemeChanger = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const [nouvelleCouleur, setNouvelleCouleur] = useState('');
  const [nouvellePolice, setNouvellePolice] = useState('');

  const handleThemeChange = (e) => {
    e.preventDefault();
    updateTheme(nouvelleCouleur, nouvellePolice);
    const body = document.querySelector('.App')
    body.style.backgroundColor = nouvelleCouleur;
  };

  return (
    <div>
      <form onSubmit={handleThemeChange} className='mt-3'>
        <label>
          Nouvelle Couleur :
          <input
            type="text"
            value={nouvelleCouleur}
            onChange={(e) => setNouvelleCouleur(e.target.value)}
          />
        </label>
        <br />
        <label>
          Nouvelle Police :
          <input
            type="text"
            value={nouvellePolice}
            onChange={(e) => setNouvellePolice(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className='btn btn-success'>Changer le thème</button>
      </form>
    </div>
  );
};

export default ThemeChanger;
