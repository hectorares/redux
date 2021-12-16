import { createSlice } from '@reduxjs/toolkit';
function getProducts() {
    const productList = [
      {
        idItem: 1,
        name: 'Macbook 2022',
        description: 'Laptop Macbook silver 10th gen.',
        price: 25000,
      },
      {
        idItem: 2,
        name: 'Magic Mouse',
        description: 'White inalambric mouse.',
        price: 2569.7,
      },
      {
        idItem: 3,
        name: 'Imac 2022',
        description: 'Desktop computer silver 10th gen.',
        price: 25000,
      }
    ]

    return productList;
  }
const productSlice = createSlice({
    name: 'product',
    initialState: { products: getProducts() },
    reducers: {
        setProducts(state, action) {
            state.products.push(action.payload);
        }
    }
});


export const productActions = productSlice.actions;
export default productSlice.reducer;