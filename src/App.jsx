import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Estas en el portfolio de <span>Miguel Ortiz C.</span></h1>
      <p className="subtitle">
        Esta página está en construcción, pero puedes ver el código en{" "}
        <a
          href="https://github.com/tu-usuario"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>.
      </p>
      <div className="github-icon-container">
        <a
          href="https://github.com/mortizcoilla" // Reemplaza con tu enlace
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github github-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default App;
