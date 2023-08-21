import React from "react";

export default function Saludar(props) {
  console.log(props.userInfo);

  return (
    <div>
      <h2>
        Hola {props.userInfo.nombre}, tiene {props.userInfo.edad} años, su color
        favorito es {props.userInfo.color}
      </h2>
    </div>
  );
}
