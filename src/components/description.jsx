import React from 'react';

const Description = ({ product }) => {
  const {
    brand,
    model,
    price,
    cpu,
    ram,
    os,
    screenResolution,
    battery,
    cameras,
    dimensions,
    weight
  } = product;

  return (
    <div>
      <h2>{brand} {model}</h2>
      <p>${price}</p>
      <ul>
        <li>CPU: {cpu}</li>
        <li>RAM: {ram}</li>
        <li>Sistema Operativo: {os}</li>
        <li>Resolución de pantalla: {screenResolution}</li>
        <li>Batería: {battery}mAh</li>
        <li>Cámaras: {cameras}</li>
        <li>Dimensiones: {dimensions} mm</li>
        <li>Peso: {weight} g</li>
      </ul>
    </div>
  );
};

export default Description;
