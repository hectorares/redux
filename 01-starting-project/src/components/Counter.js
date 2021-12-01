import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { Component } from 'react';
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
  };

  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }

  const increaseHandler = (amount) => {
    dispatch({ type: 'increase', amount: amount })
  }



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={()=>increaseHandler(5)}>Increase by 5</button>
        <button onClick={()=>increaseHandler(10)}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   }
//   decrementHandler = () => {
//     this.props.decrement();

//   }
//   toggleCounterHandler = () => { }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind()}>Increase</button>
//           <button onClick={this.decrementHandler.bind()}>Decrease</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind()}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }
// const mapDispatchProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchProps)(Counter);
