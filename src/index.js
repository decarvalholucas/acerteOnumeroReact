import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM
  // 0 <> 300
  // Palpites que a maquina deu

  const [estado, setEstado] = useState("ENTRADA");

  const [palpite, setPalpite] = useState(150);

  const [numPalpites, setNumPalpites] = useState(0);

  const [min, setMin] = useState(0);

  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMax(300);
    setMin(0);
    setNumPalpites(1);
    setPalpite(150);
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Começar a Jogar</button>;
  }

  const menor = () => {
    setNumPalpites(numPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpites(numPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o numero de {palpite} com {numPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Jogar novamente</button>
      </div>
    );
  }

  return (
    <div className="App">
      <p>Palpite da maquina: {palpite}</p>
      <p>Min: {min}</p>
      <p>Max: {max}</p>
      <p>Numero de palpites: {numPalpites}</p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
