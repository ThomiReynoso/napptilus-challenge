import React from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from './productList';

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((product) => product.id === id);

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalle de producto</h1>
      {JSON.stringify(product)}
    </div>
  );
};

export default ProductDetails;
