import { render, screen, act } from '@testing-library/react';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import * as ProductService from '../src/services/product.service';

const mockedProducts = [
  {
    id: 1,
    brand: 'Acer',
    model: 'Iconia Talk S',
  },
  {
    id: 2,
    brand: 'Acer',
    model: 'Liquid Z6',
  },
];

// Mock the fetch functions in range.service
jest.mock('../src/services/product.service', () => ({
  fetchAllProducts: jest.fn(() => mockedProducts),
  fetchProduct: jest.fn(),
  addProductToCart: jest.fn(),
}));

describe('App', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  test('renders logo', async () => {
    // I need to wrapp the component in act because it was throwing a warning when running tests
    await act(async () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    });

    const linkElement = screen.getByText(/mobilfy/i);
    expect(linkElement).toBeInTheDocument();
  });

})
