import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Search from '../components/search';
import { ProductGrid } from '../components/ProductGrid';
import { products, products2 } from '../components/_data';
import { Box, Center, Skeleton, SkeletonCircle, Spinner } from '@chakra-ui/react';
import { Item } from '../components/item';
import { fetchAllProducts } from '../services/product.service';

const ProductList = () => {
	const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchAllProducts(setProducts, setisLoading);
  }, [])

  const filteredProducts = products.filter((product) =>
    `${product.brand} ${product.model}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
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
  );
};

export default ProductList;
