// ThemeContext.js
import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    couleurPrincipale: 'bleu',
    police: 'Arial',
  });

  const updateTheme = (nouvelleCouleur, nouvellePolice) => {
    setTheme({
      couleurPrincipale: nouvelleCouleur,
      police: nouvellePolice,
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
