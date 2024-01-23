// Header.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import "./App.css"

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header style={{ color: theme.couleurPrincipale, fontFamily: theme.police }}>
      <p>Thème : {theme.couleurPrincipale} - Police : {theme.police}</p>
    </header>
  );
};

export default Header;
