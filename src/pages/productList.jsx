import React from 'react';
import Header from '../components/header';
import Item from '../components/item';
import Search from '../components/search';

export const PRODUCTS = [
  {
    id: '1',
    image: 'https://example.com/images/phone1.jpg',
    brand: 'Samsung',
    model: 'Galaxy S21',
    price: 799,
    cpu: 'Exynos 2100',
    ram: '8GB',
    os: 'Android 11',
    screenResolution: '2400 x 1080',
    battery: 4000,
    cameras: 'Triple: 12MP + 64MP + 12MP',
    dimensions: '151.7 x 71.2 x 7.9',
    weight: 171,
  },
  {
    id: '2',
    image: 'https://example.com/images/phone2.jpg',
    brand: 'Apple',
    model: 'iPhone 13',
    price: 999,
    cpu: 'A15 Bionic',
    ram: '6GB',
    os: 'iOS 15',
    screenResolution: '2532 x 1170',
    battery: 3240,
    cameras: 'Dual: 12MP + 12MP',
    dimensions: '146.7 x 71.5 x 7.4',
    weight: 174,
  },
  {
    id: '3',
    image: 'https://example.com/images/phone3.jpg',
    brand: 'Google',
    model: 'Pixel 6',
    price: 899,
    cpu: 'Google Tensor',
    ram: '8GB',
    os: 'Android 12',
    screenResolution: '2400 x 1080',
    battery: 4600,
    cameras: 'Dual: 50MP + 12MP',
    dimensions: '158.6 x 74.8 x 8.9',
    weight: 207,
  },
  {
    id: '4',
    image: 'https://example.com/images/phone4.jpg',
    brand: 'OnePlus',
    model: '9 Pro',
    price: 969,
    cpu: 'Snapdragon 888',
    ram: '8GB',
    os: 'Android 11',
    screenResolution: '3216 x 1440',
    battery: 4500,
    cameras: 'Quad: 48MP + 50MP + 8MP + 2MP',
    dimensions: '163.2 x 73.6 x 8.7',
    weight: 197,
  },
];

const ProductList = () => {
	
  return (
    <div>
      <Header itemCount={0} />
      <Search value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className={styles.itemsContainer}>
        {filteredProducts.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
