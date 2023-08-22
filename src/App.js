import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar]);

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue); // para enviar el valor de stateCar para otro componente
    setContar(contar + 1);
  };

  return (
    <div className="App">
      <h2>UserState</h2>
      <h3>El carro esta: {stateCar ? "Encendido" : "Apagado"}</h3>
      <h4>Clicks; {contar}</h4>
      <button onClick={encenderApagar}>Encender / Apagar</button>
    </div>
  );
}

export default App;
