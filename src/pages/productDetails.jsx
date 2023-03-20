import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Image from '../components/image';
import Description from '../components/description';
import { products2Details } from '../components/_data';
import { Button, Center, Grid, HStack, Select, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'
import Actions from '../components/Actions';


const ProductDetails = () => {
  const { id } = useParams();
  const product = products2Details.find((product) => product.id === id);
  const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });

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
      <Center>
        <Grid templateColumns={responsiveGrid}>
          <Image src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
          <VStack>
            <Description product={product} />
            <Actions product={product} />
          </VStack>
        </Grid>
      </Center>
    </div>
  );
};

export default ProductDetails;
