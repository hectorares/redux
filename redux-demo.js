const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => {
    return {
        counter : state.counter +1
    }
}
const store = redux.createStore(counterReducer);
console.log(store.getState());

const countersubscriber =()=>{
    const latest = store.getState();
    console.log(latest);
}

store.subscribe(countersubscriber);
store.dispatch({type: 'increment'})