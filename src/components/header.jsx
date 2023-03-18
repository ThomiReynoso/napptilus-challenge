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
        Carrito: {itemCount}
      </div>
    </header>
  );
};

export default Header;
