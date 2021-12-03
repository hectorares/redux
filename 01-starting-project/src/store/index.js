import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initState,
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
            state.counter = state.counter + action.amount;
        }
    }
})

const store = configureStore({
    reducer: counterSlice
});

export default store;