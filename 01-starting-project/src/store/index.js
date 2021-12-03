import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        }
    }
})

// const store = configureStore({
//    reducer :{ counter: counterSlice.reducer}
// });
const store = configureStore({
    reducer: counterSlice.reducer
 });
export default store;
export const counterActions = counterSlice.actions;
