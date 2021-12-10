import { createSlice } from '@reduxjs/toolkit';
const initialState =  { showCart: false }
const uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        }
    }
});
export default uiSlice.reducer;
export const uiActions = uiSlice.actions;