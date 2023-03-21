import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import * as ProductService from '../src/services/product.service';

// Mock the fetch functions in range.service
jest.mock('../src/services/product.service', () => ({
  fetchAllProducts: jest.fn(),
  fetchProduct: jest.fn(),
  addProductToCart: jest.fn(),
}));

describe('App', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('renders logo', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const linkElement = screen.getByText(/mobilfy/i);
    expect(linkElement).toBeInTheDocument();
  });

})
