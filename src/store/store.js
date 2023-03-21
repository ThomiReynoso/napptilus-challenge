import { configureStore } from '@reduxjs/toolkit';
import { setToLocalstorage } from '../utils/cache';
import cartReducer from './cartSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
} );

// We save on local storage the state to persis data for 5 minutes
store.subscribe(() => {
    setToLocalstorage("store", store.getState(), 300000);
})
export default store;
