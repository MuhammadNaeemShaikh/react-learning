import React, { useState } from 'react';

const FunctionCounter = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Function Counter</h1>
      <p>Count {counter}</p>
      <button
        onClick={() => {
          setCounter(++counter);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default FunctionCounter;
