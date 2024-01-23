// ThemeChanger.js
import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./App.css";

const ThemeChanger = () => {
  const { theme, updateTheme } = useContext(ThemeContext);
  const [nouvelleCouleur, setNouvelleCouleur] = useState("blue");
  const [nouvellePolice, setNouvellePolice] = useState("arial");

  const handleThemeChange = (e) => {
    e.preventDefault();
    updateTheme(nouvelleCouleur, nouvellePolice);
    const body = document.querySelector("body");
    body.style.backgroundColor = nouvelleCouleur;

    if (nouvelleCouleur === "white" || nouvelleCouleur === "gray") {
      body.style.color = "black";
    } else {
      body.style.color = "white";
    }

    setNouvelleCouleur("");
    setNouvellePolice("");
  };

  return (
    <div>
      <form onSubmit={handleThemeChange} className="mt-3">
        <div className="d-flex justify-content-center flex-wrap">
          <label className="mx-5">
            Nouvelle Couleur :
            <input
              type="text"
              value={nouvelleCouleur}
              onChange={(e) => setNouvelleCouleur(e.target.value)}
            />
          </label>
          <br />
          <label className="mx-5">
            Nouvelle Police :
            <input
              type="text"
              value={nouvellePolice}
              onChange={(e) => setNouvellePolice(e.target.value)}
            />
          </label>
        </div>

        <br />
        <button type="submit" className="btn btn-success">
          Changer le thème
        </button>
      </form>
    </div>
  );
};

export default ThemeChanger;
