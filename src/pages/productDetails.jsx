import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Image from '../components/image';
import Description from '../components/description';
import { Box, Button, Center, Grid, HStack, Select, Skeleton, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa'
import Actions from '../components/Actions';
import { fetchProduct } from '../services/product.service';
import { getFromLocalstorage } from '../utils/cache';

const ProductDetails = () => {
  const { id } = useParams();
  const [ product, setProduct] = useState();
  const [ isLoading, setIsLoading ] = useState(true);
  const responsiveGrid = useBreakpointValue({ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" });

  useEffect(() => {
    const cachedProduct = getFromLocalstorage(`product-${id}`);

    if (!cachedProduct) {
      fetchProduct(id, setProduct, setIsLoading)
    } else {
      setProduct(cachedProduct);
      setIsLoading(false);
    }

  }, [])

  return (
    <>
      { isLoading
        ?  <Skeleton isLoaded={!isLoading}/>
        : <Box bgColor={"gray.100"} height={"100vh"}>
            <Center>
              <Grid templateColumns={responsiveGrid}>
                <Image src={product.imgUrl} alt={`${product.brand} ${product.model}`} />
                <VStack>
                  <Description product={product} />
                  <Actions product={product} />
                </VStack>
              </Grid>
            </Center>
          </Box>
      }
    </>
      
  );
};

export default ProductDetails;
