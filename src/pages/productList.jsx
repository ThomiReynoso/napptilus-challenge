import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Search from '../components/search';
import { ProductGrid } from '../components/ProductGrid';
import { Box, Skeleton } from '@chakra-ui/react';
import { Item } from '../components/item';
import { fetchAllProducts } from '../services/product.service';
import { getFromLocalstorage, setToLocalstorage } from '../utils/cache';
import { PRODUCTS_LOCAL_STORAGE } from '../utils/constants';

const ProductList = () => {
	const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts() {
    const prods = await fetchAllProducts();
    setProducts(prods);
    setIsLoading(false);
    // Store all products in local storage for 1 hour (its like a cache)
    setToLocalstorage(PRODUCTS_LOCAL_STORAGE, prods, 3600000);
  }

  useEffect(() => {
    const cachedProducts = getFromLocalstorage(PRODUCTS_LOCAL_STORAGE);

    if (!cachedProducts) {
      fetchProducts();
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
