import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import Actions from '../components/Actions';
import store from '../store/store';
import { useToast } from '@chakra-ui/react';
import { addProductToCart } from '../services/product.service';

jest.mock('../services/product.service', () => require('./product.service.mock')); 
jest.mock('@chakra-ui/react', () => {
  const originalModule = jest.requireActual('@chakra-ui/react');
  return {
    ...originalModule,
    useToast: jest.fn(),
  };
});


const mockProduct = {
  id: 1,
  brand: 'Acer',
  model: 'Iconia Talk S',
  options: {
    colors: [
      { code: 1001, name: 'Black' },
      { code: 1011, name: 'White' }
    ],
    storages: [
      { code: 2000, name: '128GB' },
      { code: 2010, name: '256GB' },
    ],
  },
};

describe('Actions Component', () => {
	beforeEach(() => {
			useToast.mockImplementation(() => jest.fn());
	});
    

  test('renders color and storage select options', () => {
    render(
      <Provider store={store}>
        <Actions product={mockProduct} />
      </Provider>,
    );

    expect(screen.getByText('Color')).toBeInTheDocument();
    expect(screen.getByText('Storage')).toBeInTheDocument();
    expect(screen.getByText('Black')).toBeInTheDocument();
    expect(screen.getByText('White')).toBeInTheDocument();
    expect(screen.getByText('128GB')).toBeInTheDocument();
    expect(screen.getByText('256GB')).toBeInTheDocument();
  });

  test('changes color and storage select values', () => {
    render(
      <Provider store={store}>
        <Actions product={mockProduct} />
      </Provider>,
    );

    fireEvent.change(screen.getByDisplayValue('Black'), { target: { value: 1011 } });
    expect(screen.getByDisplayValue('White')).toBeInTheDocument();

    fireEvent.change(screen.getByDisplayValue('128GB'), { target: { value: 2010 } });
    expect(screen.getByDisplayValue('256GB')).toBeInTheDocument();
  });

	test('adds product to cart and shows a toast notification', async () => {
    addProductToCart.mockResolvedValue(1);

    render(
      <Provider store={store}>
        <Actions product={mockProduct} />
      </Provider>,
    );

    fireEvent.click(screen.getByText('Add to cart'));

    await waitFor(() => {
      expect(addProductToCart).toHaveBeenCalledWith(1, 1001, 2000);
      expect(useToast).toHaveBeenCalled();
    });
  });

});
