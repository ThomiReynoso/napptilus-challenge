import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Image from '../components/image';
import Description from '../components/description';
import { products2Details } from '../components/_data';


const ProductDetails = () => {
  const { id } = useParams();
  const product = products2Details.find((product) => product.id === id);

  if (!product) {
    return (
      <div>
        <Header itemCount={0} />
        <p>Producto no encontrado</p>
      </div>
    );
  }

  return (
    <div>
      <Header itemCount={0} />
      <div>
        <Image src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
        <Description product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
