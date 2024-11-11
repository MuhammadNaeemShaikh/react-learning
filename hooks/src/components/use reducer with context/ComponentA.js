import React, { useContext } from 'react';
import { countContext } from '../../App';

const ComponentA = () => {
  const { countState,countDispatch } = useContext(countContext);
  const action = (act) => {
    try {
      countDispatch(act);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Counter: {countState}</h1>
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

export default ComponentA;
