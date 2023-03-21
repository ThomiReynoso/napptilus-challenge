import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Search from '../components/search';
import { ProductGrid } from '../components/ProductGrid';
import { Box, Center, Skeleton, SkeletonCircle, Spinner } from '@chakra-ui/react';
import { Item } from '../components/item';
import { fetchAllProducts } from '../services/product.service';
import { getFromLocalstorage } from '../utils/cache';
import { PRODUCTS_LOCAL_STORAGE } from '../utils/constants';

const ProductList = () => {
	const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cachedProducts = getFromLocalstorage(PRODUCTS_LOCAL_STORAGE);

    if (!cachedProducts) {
      fetchAllProducts(setProducts, setIsLoading);
    } else {
      setProducts(cachedProducts);
      setIsLoading(false);
    }
  }, [])

  const filteredProducts = products.filter((product) =>
    `${product.brand} ${product.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
    <Header />
    <Skeleton startColor='gray.700' endColor='gray.100' isLoaded={!isLoading} height={'100vh'} fadeDuration={0.1}>
      <Box bgColor={"gray.100"}>
        <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: '4',
            md: '8',
            lg: '12',
          }}
          py={{
            base: '6',
            md: '8',
            lg: '12',
          }}
          >
            <ProductGrid>
              {filteredProducts.map((product) => (
                <Item key={product.id} product={product} />
                ))}
            </ProductGrid>
        </Box>
      </Box>
    </Skeleton>
    </>
  );
};

export default ProductList;
