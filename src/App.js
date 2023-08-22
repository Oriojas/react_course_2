import "./App.css";
import React, { useState } from "react";

function App() {
  const [stateCar, setStateCar] = useState(false);

  const encenderApagar = () => {
    //setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue); // para enviar el valor de stateCar para otro componente
  };

  return (
    <div className="App">
      <h2>UserState</h2>
      <h3>El carro esta: {stateCar ? "Encendido" : "Apagado"}</h3>
      <button onClick={encenderApagar}>Encender / Apagar</button>
    </div>
  );
}

export default App;
