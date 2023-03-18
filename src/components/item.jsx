import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, image, brand, model, price }) => {
  return (
    <div>
      <img src={image} alt={`${brand} ${model}`} />
      <h3>{brand} {model}</h3>
      <p>${price}</p>
      <Link to={`/product/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default Item;
