import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemCount: 0,
};

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
