import React, { useReducer } from 'react';

let initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { firstCounter: state.firstCounter + action?.value };
      break;

    case 'decrement':
      return state.firstCounter <= 0
        ? initialState
        : { firstCounter: state.firstCounter - action?.value };
      break;
    case 'reset':
      return initialState;
      break;

    default:
      return state;
      break;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  const action = (act) => {
    try {
      dispatch(act);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Counter: {count.firstCounter}</h1>
      <button
        onClick={() => {
          action({ type: 'increment', value: 1 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          action({ type: 'decrement', value: 1 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          action({ type: 'increment', value: 5 });
        }}
      >
        Increment by 5
      </button>
      <button
        onClick={() => {
          action({ type: 'decrement', value: 5 });
        }}
      >
        Decrement by 5
      </button>
      <button
        onClick={() => {
          action({ type: 'reset' });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CounterTwo;
