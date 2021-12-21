import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
const productSlice = createSlice({
  name: 'product',
  initialState: { products: [] },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    }
  }
});
export const productActions = productSlice.actions;
export default productSlice.reducer;