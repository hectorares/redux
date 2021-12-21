import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [],
    totalQuantity: 0,
    changed: false
};
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addNewItem(state, action) {
            const newItem = action.payload;
            const existentItem = state.items.find(x => x.idItem === newItem.idItem);
            state.changed = true;
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
            state.changed = true;
            if (existentItem && existentItem.quantity > 0) {
                existentItem.quantity--;
                existentItem.totalPrice = existentItem.totalPrice - existentItem.price;
                state.totalQuantity--;
            }


        }

    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;