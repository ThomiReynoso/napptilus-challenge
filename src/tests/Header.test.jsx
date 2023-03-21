import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Header from '../components/header';
import cartReducer from '../store/cartSlice';
import React from 'react';

describe('Header component', () => {
  let store;

  beforeEach(() => {
    const rootReducer = combineReducers({
      cart: cartReducer,
    });
    store = configureStore({
      reducer: rootReducer,
      preloadedState: {
        cart: {
          itemCount: 2,
        },
      },
    });
  });

  test('renders the header with the correct title', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const titleElement = screen.getByText(/MOBILFY/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the cart with the correct item count', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const itemCountElement = screen.getByText(/\(2\)/i);
    expect(itemCountElement).toBeInTheDocument();
  });
});
