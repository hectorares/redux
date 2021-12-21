import { createSlice } from '@reduxjs/toolkit';
import { uiActions } from './ui-slice';
const initialState = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addNewItem(state, action) {
            const newItem = action.payload;
            const existentItem = state.items.find(x => x.idItem === newItem.idItem);
            if (!existentItem) {
                const quantity = newItem.quantity ? newItem.quantity : 1;
                state.items.push({
                    idItem: newItem.idItem,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: quantity,
                    totalPrice: newItem.price * quantity
                })

                state.totalQuantity++;
            } else {
                existentItem.quantity++
                existentItem.totalPrice = existentItem.price * existentItem.quantity
                state.totalQuantity++;
            }

        },
        removeItem(state, action) {
            const item = action.payload;
            const existentItem = state.items.find(x => x.idItem === item.idItem);
            if (existentItem && existentItem.quantity > 0) {
                existentItem.quantity--;
                existentItem.totalPrice = existentItem.totalPrice - existentItem.price;
                state.totalQuantity--;
            }


        }

    }
})

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotificacion({
            status: 'pending',
            title: 'Pending',
            message: 'Sending request...'
        }));

        const request = async () => {
            const response = await fetch('https://cart-dbb91-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });
            if (!response.ok) {
                throw new Error('Sending cart has failed.')
            }
        }

        try {
            await request();
            dispatch(uiActions.showNotificacion({
              status: 'success',
              title: 'Success',
              message: 'Product has been added!.'
            }))
          } catch (err) {
            console.error('Error', err);
            dispatch(uiActions.showNotificacion({
              status: 'error',
              title: 'Error',
              message: 'Adding product has failed.'
            }))
          }
    }
}

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;