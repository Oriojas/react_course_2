import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props; // información por destructurin
  const { nombre = "Anónimo" } = userInfo;
  const { edad = "Anónimo " } = userInfo;

  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
    </div>
  );
}
