import React, { useState } from 'react';

const HookCounterTwo = () => {
  const [count, setCount] = useState(0);

  const incrementbyfive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h1>HookCounterTwo</h1>
      <p>Count {count}</p>
      <button
        onClick={() =>
          setCount((prevState) => {
            return prevState + 1;
          })
        }
      >
        Increment
      </button>
      <button onClick={() => setCount((prevState) => prevState - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={incrementbyfive}>Increment By 5</button>
    </div>
  );
};

export default HookCounterTwo;
