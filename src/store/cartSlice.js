import { createSlice } from '@reduxjs/toolkit';
import { getFromLocalstorage } from '../utils/cache';
import { STORE_LOCAL_STORAGE } from '../utils/constants';

const initialState = {
  itemCount: 0,
};

const persistedData = getFromLocalstorage(STORE_LOCAL_STORAGE);
if (persistedData) {
  initialState.itemCount = persistedData.cart.itemCount;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.itemCount += action.payload;
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
