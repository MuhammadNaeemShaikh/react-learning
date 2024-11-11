import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state <= 0 ? initialState : state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const action = (act) => {
    dispatch(act);
  };
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => action('increment')}>Increment</button>
      <button onClick={() => action('decrement')}>Decrement</button>
      <button onClick={() => action('reset')}>Reset</button>
    </div>
  );
};

export default CounterOne;
