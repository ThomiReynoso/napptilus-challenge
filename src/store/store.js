import { configureStore } from '@reduxjs/toolkit';
import { setToLocalstorage } from '../utils/cache';
import { STORE_LOCAL_STORAGE } from '../utils/constants';
import cartReducer from './cartSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
} );

// We save on local storage the state to persis data for 5 minutes
store.subscribe(() => {
    setToLocalstorage(STORE_LOCAL_STORAGE, store.getState(), 300000);
})
export default store;
