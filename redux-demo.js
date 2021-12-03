const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter : state.counter +1
    }
}
const store = redux.createStore(counterReducer);

const countersubscriber =()=>{
    const latest = store.getState();
}

store.subscribe(countersubscriber);
store.dispatch({type: 'increment'})