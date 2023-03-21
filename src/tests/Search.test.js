import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/search';

describe('Search Component', () => {
  test('renders search input with correct value and onChange handler', () => {
    const handleChange = jest.fn();
    const searchValue = 'Acer';

    render(<Search value={searchValue} onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Search by model or brand');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(searchValue);
  });

  test('calls onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    const searchValue = 'Acer';

    render(<Search value={searchValue} onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText('Search by model or brand');
    fireEvent.change(inputElement, { target: { value: 'Samsung' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
