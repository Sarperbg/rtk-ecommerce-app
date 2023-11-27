import { configureStore } from '@reduxjs/toolkit'
import categorySlice from "./categorySlice"
import productSlice from './productSlice'
import cartSlice from './cartSlice'
import modalSlice from './modalSlice'
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
   categories: categorySlice,
   products: productSlice,
   carts: cartSlice,
   modal: modalSlice,
   search: searchReducer,

  },
})