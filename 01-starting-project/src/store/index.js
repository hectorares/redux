import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';
import productReducer from './product-slice';
const store = configureStore({
    reducer: { ui: uiReducer, cart: cartReducer, product: productReducer }
})
export default store;