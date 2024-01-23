// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import ThemeChanger from './ThemeChanger';
import "./App.css"

function App() {
  return (
    <ThemeProvider>
      <div className="App text-center mt-5">
        <h1>Mon Application React</h1>
        <Header />
        <ThemeChanger />
      </div>
    </ThemeProvider>
  );
}

export default App;
