import { Button, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ itemCount }) => {
  return (
    <header>
      <Link to="/">Mobile Shop</Link>
      <nav>
        <Link to="/">Productos</Link>
      </nav>
      <div>
        <Text>Carrito: {itemCount}</Text>
      </div>
    </header>
  );
};

export default Header;
